"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  LoginFormProps,
  loginFormSchema,
  LoginSchemaProps,
} from "@/app/(auth)/login/types";
import { loginAction } from "@/app/(auth)/login/data";

export default function LoginForm({ email, password }: LoginFormProps) {
  const form = useForm<LoginSchemaProps>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email,
      password,
    },
  });

  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  useEffect(() => {
    if (error) {
      const errorMessage =
        error === "CredentialsSignin"
          ? "Имейл адресът или паролата са невалидни"
          : "Възникна неочаквана грешка. Моля, опитайте отново.";
      toast.error(errorMessage);
    }
  }, [error]);

  const onSubmit = async (values: LoginFormProps) => {
    try {
      const result = await loginAction(values);

      if (result.error) {
        return toast.error(result.error);
      }

      toast.success(result.message);
      await signIn("credentials", values);
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("Нещо се случи");
      }
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Имейл</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="Въведете имейл адресът си"
                  {...field}
                />
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
              <FormLabel>Парола</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Въведете паролата си"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">
          Вход
        </Button>
      </form>
    </Form>
  );
}
