import { z } from "zod";

export const loginFormSchema = z.object({
  email: z.string().email({
    message: "Невалиден имейл адрес.",
  }),
  password: z.string().min(2, {
    message: "Паролата трябва да съдържа 6 или повече синволи.",
  }),
})

export type LoginSchemaProps = z.infer<typeof loginFormSchema>;

export type LoginFormProps = {
  email: string;
  password: string;
}