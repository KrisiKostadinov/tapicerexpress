"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { z } from "zod";

import type { CompanyData, Settings } from "@prisma/client";
import { updateCompany } from "@/app/dashboard/settings/data";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

type CompanyDataProps = {
  settings: Settings | null;
  companyData: CompanyData | null;
};

export const formSchema = z.object({
  websiteTitle: z.string(),
  emailAddress: z.string(),
  phoneNumber: z.string(),
  physicalAddress: z.string(),
  city: z.string(),
});

export type FormSchemaProps = z.infer<typeof formSchema>;

export default function CompanyData({ companyData }: CompanyDataProps) {
  const router = useRouter();

  const form = useForm<FormSchemaProps>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      websiteTitle: "",
      emailAddress: "",
      phoneNumber: "",
      physicalAddress: "",
      city: "",
    },
  });

  useEffect(() => {
    if (companyData) {
      form.reset({
        websiteTitle: companyData.websiteTitle,
        emailAddress: companyData.emailAddress,
        phoneNumber: companyData.phoneNumber,
        physicalAddress: companyData.physicalAddress,
        city: companyData.city || "",
      });
    }
  }, []);

  const onSubmit = async (data: FormSchemaProps) => {
    try {
      await updateCompany(data);
      toast.success("Промените са направени");
      router.refresh();
    } catch (error) {
      toast.error("Нещо се обърка");
      console.error("Грешка при запазване:", error);
    }
  };

  return (
    <div className="bg-white border shadow rounded-md p-5">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <FormField
            control={form.control}
            name="websiteTitle"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Име на сайта</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Въведете име на уеб сайта"
                    {...field}
                  />
                </FormControl>
                <FormDescription className="text-muted-foreground">
                  По избор
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="emailAddress"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Имейл</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Въведете имейл адрес"
                    {...field}
                  />
                </FormControl>
                <FormDescription className="text-muted-foreground">
                  По избор
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Телефон</FormLabel>
                <FormControl>
                  <Input
                    type="tel"
                    placeholder="Въведете телефон за връзка"
                    {...field}
                  />
                </FormControl>
                <FormDescription className="text-muted-foreground">
                  По избор
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="physicalAddress"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Физически адрес</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Въведете физически адрес"
                    {...field}
                  />
                </FormControl>
                <FormDescription className="text-muted-foreground">
                  По избор
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Град</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Въведете град"
                    {...field}
                  />
                </FormControl>
                <FormDescription className="text-muted-foreground">
                  По избор
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            variant="adminDefault"
            type="submit"
            disabled={form.formState.isSubmitting}
          >
            {form.formState.isSubmitting
              ? "Зареждане..."
              : "Запазване на промените"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
