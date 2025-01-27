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
import { Icons } from "@/components/ui/custom/icons";
import { useRouter, useSearchParams } from "next/navigation";
import { ROUTES } from "@/config/routes";
import Link from "next/link";
import {  RestAction } from "@/server/auth";
import { ToastError, ToastSuccess } from "@/components/ui/custom/toast";
import { PasswordInput } from "@/components/ui/custom/password-input";

const formSchema = z
  .object({
    Password: z
      .string()
      .nonempty({
        message: "Password is required",
      })
      .min(8, {
        message: "Password must be at least 8 characters",
      }),
    confirmPassword: z
      .string()
      .nonempty({
        message: "Password is required",
      })
      .min(8, {
        message: "Password must be at least 8 characters",
      }),
  })
  .superRefine((data, ctx) => {
    if (data.Password !== data.confirmPassword) {
      ctx.addIssue({
        message: "Passwords do not match",
        code: z.ZodIssueCode.custom,
        path: ["confirmPassword"],
      });
    }
    return true;
  });

export default function ForgotVerifyForm() {
  const router = useRouter();

  const params = useSearchParams();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      Password: "",
      confirmPassword: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const email = params.get("email")!;
    const token = params.get("code")!;
    const [res, error] = await RestAction(email, values.Password, token);
    if (res) {
      ToastSuccess(res.message);
      router.push(ROUTES.DASHBOARD.ROOT);
    }
    if (error) {
      ToastError(error);
      if (typeof error === "string" && error === "Unauthorized") {
        router.push(ROUTES.AUTH.SIGNUP);
      }
    }
    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 ">
        <FormField
          control={form.control}
          name="Password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <PasswordInput placeholder="*********" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
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
          Submit
        </Button>
      </form>
      <div className="text-center text-sm">
        Remember password of your account?{" "}
        <Link href={ROUTES.AUTH.LOGIN} className="underline underline-offset-4 text-[#003780] font-semibold cursor-pointer">
          Log In
        </Link>
      </div>
    </Form>
  );
}
