"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginData, loginSchema, SignUpData, signUpSchema } from "@/lib/validations/auth";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormControl,
} from "@/components/ui/form";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useGetLoginMutation } from "@/state/api";
import ErrorMessage from "@/components/errorMessage";

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const [login, { isLoading, error }] = useGetLoginMutation();
 const [loginError, setLoginError] = useState<string | null>(null);
  const form = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: any) => {
    try {
    setLoading(true);
    const res = await login(values).unwrap();
    console.log(res);
    setLoading(false);
    setLoginError(null);
    // redirect after success
    window.location.href = "/";

  } catch (err) {
   const message =
        error?.data?.message ||
        error?.error ||
        "Invalid email or password";

    setLoginError(message);
    setLoading(false);


    console.log("Login failed:", err);
  }

  };

  return (
    <div className="flex mt-20 justify-center ">
      <Card className="w-100">
        <CardHeader>
          <CardTitle>Login</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="you@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="******" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {form.formState.errors.root && (
                <p className="text-sm text-red-500">
                  {form.formState.errors.root.message}
                </p>
              )}

              <Button type="submit" className="w-full bg-[#057857]" disabled={loading}>
                {loading ? "Logging in..." : "Login"}
              </Button>

             {loginError? <ErrorMessage message={loginError}/>: null}
            </form>
          </Form>

        </CardContent>
        <CardFooter className="">
            <p>Don't have an account <span className="text-[#057857] font-medium">SignUp</span></p>
        </CardFooter>
      </Card>
      
    </div>
  );
}