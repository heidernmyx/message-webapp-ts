"use client"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().trim().min(1, "Password is required"),
})

type LoginFormValues = z.infer<typeof loginSchema>;

export function LoginForm() {

  const { register, handleSubmit, setError, formState: { errors, isSubmitting } } = useForm<LoginFormValues>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormValues) => {
    console.log(data);
  }
  
  return (
    <Card className="mx-auto max-w-sm border-black">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                { ...register("email") }
                id="email"
                type="email"
                placeholder="m@example.com"
              />
              <p className="text-red-500">{errors.email && errors.email?.message}</p>
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link href="#" className="ml-auto inline-block text-sm underline">
                  Forgot your password?
                </Link>
              </div>
              <Input {...register('password', { required: true}) } 
                id="password" 
                type="password" 
              />
              <p className="text-red-500">{errors.password && errors.password?.message}</p>
            </div>
            <Button type="submit" className="w-full">
              Login
            </Button>
            {/* <Button variant="outline" className="w-full">
              Login with Google
            </Button> */}
          </div>
        </form>
        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link href="../app/auth/signup" className="underline">
            Sign up
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
