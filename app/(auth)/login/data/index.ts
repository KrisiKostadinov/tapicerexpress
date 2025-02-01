"use server";

import { LoginFormProps, loginFormSchema } from "../types"

export const getDefaultCredentials = async () => {
  return {
    email: "",
    password: "",
  }
}

export const loginAction = async (values: LoginFormProps) => {
  const validationResult = loginFormSchema.safeParse(values);

  if (validationResult.error) {
    return { error: validationResult.error.message };
  }

  return { message: "Успешно влизане в системата" };
}