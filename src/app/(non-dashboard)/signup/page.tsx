"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema, SignUpData } from "@/lib/validations/auth";

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
import { usePostCreateUserMutation } from "@/state/api";
import ErrorMessage from "@/components/errorMessage";
import React from "react";

export default function SignUpPage() {
  const [signUp, { isLoading, error }] = usePostCreateUserMutation();
  const [signUpError, setSignUpError] = React.useState<string | null>(null);

  const form = useForm<SignUpData>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: SignUpData) => {
    try {
      const res = await signUp(values).unwrap();
      setSignUpError(null);
      // redirect after success
      window.location.href = "/";
    } catch (err: any) {
      // prefer the caught error first; fallback to mutation error
      const message =
        err?.data?.message || err?.message || error?.data?.message || "Invalid email or password";
      setSignUpError(message);
      console.log("Sign up failed:", err);
    }
  };

  return (
    <div className="flex mt-20 justify-center ">
      <Card className="w-100">
        <CardHeader>
          <CardTitle>Sign Up</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">

              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder="your username" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

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

              <Button type="submit" className="w-full bg-[#057857]" disabled={isLoading}>
                {isLoading ? "Signing up..." : "Sign up"}
              </Button>

              {signUpError ? <ErrorMessage message={signUpError} /> : null}
            </form>
          </Form>

        </CardContent>
        <CardFooter className="">
          <p>Already have an account? <span className="text-[#057857] font-medium">Login</span></p>
        </CardFooter>
      </Card>

    </div>
  );
}