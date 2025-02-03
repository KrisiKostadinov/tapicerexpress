"use client";

import { useEffect, useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { MinusIcon, PlusIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { DialogDescription } from "@radix-ui/react-dialog";
import { Textarea } from "@/components/ui/textarea";
import { createService, updateService } from "@/app/dashboard/services/data";
import { useSaveService } from "@/app/dashboard/services/hooks/use-save-service";

export const formSchema = z.object({
  title: z
    .string()
    .min(2, { message: "Това поле трябва да съдържа поне 2 символа." })
    .max(50, { message: "Това поле трябва да съдържа най-много 50 символа." }),
  description: z.string().optional(),
  endMessage: z.string().optional(),
});

export type FormSchemaProps = z.infer<typeof formSchema>;

export default function SaveService() {
  const router = useRouter();
  const { service, isOpen, toggleOpen, setService } = useSaveService();

  const form = useForm<FormSchemaProps>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      endMessage: "",
    },
  });

  useEffect(() => {
    if (service) {
      form.reset({
        title: service.title,
        description: service.description || "",
        endMessage: service.endMessage || "",
      });
    } else {
      form.reset({
        title: "",
        description: "",
        endMessage: "",
      });
    }
  }, [service, form]);

  useEffect(() => {
    if (service?.steps) {
      setSteps(service.steps);
    } else {
      setSteps(["", "", ""]);
    }
  }, [service]);

  const [steps, setSteps] = useState<string[]>(service?.steps ?? ["", "", ""]);

  const addStep = () => {
    setSteps([...steps, ""]);
  };

  const removeStep = (index: number) => {
    setSteps(steps.filter((_, i) => i !== index));
  };

  const updateStep = (index: number, value: string) => {
    const newSteps = [...steps];
    newSteps[index] = value;
    setSteps(newSteps);
  };

  const onSubmit = async (data: FormSchemaProps) => {
    try {
      if (service?.id) {
        await updateService(service?.id, data, steps);
        toast.success("Услугата е променена");
      } else {
        await createService(data, steps);
        toast.success("Услугата е добавена");
      }

      toggleOpen();
      router.refresh();
    } catch (error) {
      toast.error("Нещо се обърка");
      console.error("Грешка при запазване:", error);
    } finally {
      setService(undefined);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={toggleOpen}>
      <DialogContent className="sm:max-w-[768px] max-h-[600px] overflow-auto">
        <DialogTitle className="text-2xl font-semibold">
          Създаване на нова услуга
        </DialogTitle>
        <DialogDescription className="text-muted-foreground">
          От този компонент можете да създавате нови или да променяте
          съществуващи услуги на уебсайта.
        </DialogDescription>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Заглавие</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Въведете заглавие на услугата"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription className="text-muted-foreground">
                    Задължително!
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Описание</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Въведете описание на услугата"
                      {...field}
                      rows={10}
                    />
                  </FormControl>
                  <FormDescription className="text-muted-foreground">
                    По избор
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="space-y-3">
              <h2 className="font-medium">
                Добавете стъпки към услугата{" "}
                <span className="text-muted-foreground">по избор</span>
              </h2>
              {steps.map((step, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Input
                    type="text"
                    placeholder={`Стъпка ${index + 1}`}
                    value={step}
                    onChange={(e) => updateStep(index, e.target.value)}
                  />
                  {steps.length > 2 && (
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => removeStep(index)}
                      type="button"
                    >
                      <MinusIcon />
                    </Button>
                  )}
                </div>
              ))}
              <Button
                variant="outline"
                size="sm"
                onClick={addStep}
                type="button"
              >
                <PlusIcon className="mr-2" /> Добави стъпка
              </Button>
            </div>
            <FormField
              control={form.control}
              name="endMessage"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Послание</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Въведете последно послание на услугата"
                      {...field}
                      rows={4}
                    />
                  </FormControl>
                  <FormDescription className="text-muted-foreground">
                    По избор
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex gap-4 justify-end">
              <Button
                variant="adminDefault"
                type="submit"
                disabled={form.formState.isSubmitting}
              >
                {form.formState.isSubmitting
                  ? "Зареждане..."
                  : "Запазване на промените"}
              </Button>
              <Button variant="outline" type="button" onClick={toggleOpen}>
                Отказ
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}