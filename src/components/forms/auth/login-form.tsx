"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Icons } from "@/components/ui/custom/icons";
import { useRouter, useSearchParams } from "next/navigation";
import { ROUTES } from "@/config/routes";
import Link from "next/link";
import { LoginAction } from "@/server/auth";
import { ToastError, ToastSuccess } from "@/components/ui/custom/toast";
import { useEffect } from "react";
import { PasswordInput } from "@/components/ui/custom/password-input";

const formSchema = z.object({
  email: z.string().email({
    message: "Invalid email address",
  }),
  password: z
    .string()
    .nonempty({
      message: "Password is required",
    })
    .min(8, {
      message: "Password must be at least 8 characters",
    }),
});

export default function LoginForm() {
  const params = useSearchParams();
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const [res, error] = await LoginAction(values);

    if (res) {
      ToastSuccess(res.message);
      router.push(ROUTES.DASHBOARD.ROOT);
    }
    if (error) {
      ToastError(error);
      if (typeof error === "string" && error === "User not found") {
        router.push(ROUTES.AUTH.SIGNUP);
      }
    }
    form.reset();
  }

  const refresh = params.get("refresh");
  useEffect(() => {
    if (refresh === "true") {
      window.location.href = ROUTES.AUTH.LOGIN;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refresh]);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 ">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Acme@gmail.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="relative">
              <FormLabel>Password</FormLabel>
              <Link
                href={ROUTES.AUTH.FORGOT}
                className="underline text-xs underline-offset-4 absolute right-0 top-0">
                Forgot password?
              </Link>
              <FormControl>
                <PasswordInput placeholder="*********" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          disabled={form.formState.isSubmitting}
          className="w-full bg-[#003780]">
          {form.formState.isSubmitting && (
            <Icons.spinner className="mr-2 h-4 w-4 animate-spin group-hover:text-gray-500" />
          )}
          Login
        </Button>
      </form>
      <div className="text-center text-sm">
        Don&apos;t have an account?{" "}
        <Link
          href={ROUTES.AUTH.SIGNUP}
          className="underline underline-offset-4 text-[#003780] font-semibold cursor-pointer">
          Sign up
        </Link>
      </div>
    </Form>
  );
}
