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
import { useRouter } from "next/navigation";
import { ROUTES } from "@/config/routes";
import Link from "next/link";
import { ForgotAction } from "@/server/auth";
import { ToastError, ToastSuccess } from "@/components/ui/custom/toast";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  email: z.string().email({
    message: "Invalid email address",
  }),
});

export default function ForgotForm() {
  const router = useRouter();

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    const [res, error] = await ForgotAction(values.email);
    if (res) {
      ToastSuccess(res.message);
    }
    if (error) {
      ToastError(error);
      if (typeof error === "string" && error === "User not found") {
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

        <Button
          type="submit"
          disabled={form.formState.isSubmitting}
          className="w-full">
          {form.formState.isSubmitting && (
            <Icons.spinner className="mr-2 h-4 w-4 animate-spin group-hover:text-gray-500" />
          )}
          Submit
        </Button>
      </form>
      <div className="text-center text-sm">
        Remember password of your account?{" "}
        <Link href={ROUTES.AUTH.LOGIN} className="underline underline-offset-4">
          Log In
        </Link>
      </div>
    </Form>
  );
}
