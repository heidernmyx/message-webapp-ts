import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";
import { NextAuthOptions } from "next-auth";
import { User } from "next-auth";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
    maxAge: 60 * 60, // 1 hour
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        

        const data = {
          email: credentials!.email,
          password: credentials!.password,
        };
        const formData = new FormData();
        formData.append("json", JSON.stringify(data));
        formData.append("operation", "login");

        const response = await axios({
          url: `${process.env.NEXT_PUBLIC_API_URL}/users.php`,
          method: "POST",
          data: formData,
        });

        console.log("RESPONSE: ", response.data);
        const { user_id, name, role, email } = response.data.user;
        const user: User = {
          id: user_id,
          name: name,
          usertype: role,
          email: email,
        };
        if (user) {
          return user;
        } else {
          return null;
          // throw new Error("Invalid credentials.");
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = Number(user.id);
        token.name = user.name;
        token.usertype = user.usertype;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.usertype = token.usertype;
      }
      return session;
    },
  },
  pages: {
    signIn: "/auth/login",
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
