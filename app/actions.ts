"use server";

import { encodedRedirect } from "@/utils/utils";
import { createClient, createAdminClient } from "@/utils/supabase/server";
import { headers } from "next/headers";
import { redirect } from "next/navigation";



export const adminClient = async (): Promise<any> => {
  const supabaseAdmin = await createAdminClient();
  return supabaseAdmin;
}

export const signUpAction = async (formData: FormData) => {

  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();
  const username = formData.get("username")?.toString();
  const supabase = await createClient();
  const origin = (await headers()).get("origin");

  if (!email || !password || !username) {
    return { error: "Email, password, and username are required" };
  }

  // Proceed with signing up the user
  const { data: userData, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${origin}/auth/callback`,
      data: {
        display_name: username,
      },
    },
  });
  console.log("data is:", userData)

  if (error) {
    return encodedRedirect("success", "/sign-up", error.message);
  } else {
    return encodedRedirect( 
      "success",
      "/sign-up",
      "Thanks for signing up! Please check your email for a verification link.",
    );
  }
};

export const signInAction = async (formData: FormData) => {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const supabase = await createClient();

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return encodedRedirect("error", "/sign-in", error.message);
  }

  return redirect("/dashboard");
};

export const forgotPasswordAction = async (formData: FormData) => {
  const email = formData.get("email")?.toString();
  const supabase = await createClient();
  const origin = (await headers()).get("origin");
  const callbackUrl = formData.get("callbackUrl")?.toString();

  if (!email) {
    return encodedRedirect("error", "/forgot-password", "Email is required");
  }

  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${origin}/auth/callback?redirect_to=/protected/reset-password`,
  });

  if (error) {
    console.error(error.message);
    return encodedRedirect(
      "error",
      "/forgot-password",
      "Could not reset password",
    );
  }

  if (callbackUrl) {
    return redirect(callbackUrl);
  }

  return encodedRedirect(
    "success",
    "/forgot-password",
    "Check your email for a link to reset your password.",
  );
};

export const resetPasswordAction = async (formData: FormData) => {
  const supabase = await createClient();

  const password = formData.get("password") as string;
  const confirmPassword = formData.get("confirmPassword") as string;

  if (!password || !confirmPassword) {
    encodedRedirect(
      "error",
      "/protected/reset-password",
      "Password and confirm password are required",
    );
  }

  if (password !== confirmPassword) {
    encodedRedirect(
      "error",
      "/protected/reset-password",
      "Passwords do not match",
    );
  }

  const { error } = await supabase.auth.updateUser({
    password: password,
  });

  if (error) {
    encodedRedirect(
      "error",
      "/protected/reset-password",
      "Password update failed",
    );
  }

  encodedRedirect("success", "/protected/reset-password", "Password updated");
};

export const signOutAction = async () => {
  const supabase = await createClient();
  await supabase.auth.signOut();
  return redirect("/sign-in");
};



export const searchByUsername = async (searchText: string) => {

  const supabaseAdmin = await adminClient();  
  const { data, error } = await supabaseAdmin
    .from('auth.users') // Accessing the auth table directly
    .select('*')
    .ilike('user_metadata->>display_name', `%${searchText}%`); // Filter by username

  if (error) {
    console.error('Error fetching users:', error);
    return;
  }
  console.log('Users:', data);
};


export const searchByUuid = async (searchText: string) => {

  const supabaseAdmin = await adminClient();
  const { data, error } = await supabaseAdmin
    .from('auth.users') // Accessing the auth table directly
    .select('*')
    .eq('id', searchText); // Filter by UUID

  if (error) {
    console.error('Error fetching user by UUID:', error);
    return;
  }
  console.log('User:', data);
};
  
