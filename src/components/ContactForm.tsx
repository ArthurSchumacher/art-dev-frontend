"use client";

import { SendEmailDto } from "@/types/send-email.dto";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input, Textarea } from "@nextui-org/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import * as actions from "@/actions";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const sendEmailSchema = z.object({
  email: z.string().email({ message: "Insira um e-mail válido" }),
  subject: z.string().min(6, { message: "Insira um assunto válido." }),
  message: z.string().min(10, { message: "Insira uma mensagem válida." }),
});

type SendEmailFormFields = z.infer<typeof sendEmailSchema>;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SendEmailFormFields>({
    resolver: zodResolver(sendEmailSchema),
  });

  const router = useRouter();

  const onSubmit: SubmitHandler<SendEmailFormFields> = async (data) => {
    try {
      const email: SendEmailDto = {
        from: data.email,
        subject: data.subject,
        text: data.message,
      };

      await actions.sendMail(email);
      router.refresh();
      toast.success("Sucesso ao enviar mensagem.");
    } catch (error) {
      toast.error("Falha ao enviar mensagem.");
    }
  };

  return (
    <div className="lg:w-1/3 md:w-1/2 bg-content3 rounded-lg p-8 flex flex-col md:mr-auto w-full mt-10 md:mt-8 relative z-10 shadow-lg">
      <h2 className="text-content1 text-lg mb-1 font-medium">
        Converse comigo
      </h2>
      <p className="leading-relaxed mb-5 text-content2 text-sm">
        Manda bala! Digita teu e-mail e mensagem aí, bora trocar uma ideia!
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-4">
        <Input
          {...register("email")}
          isInvalid={errors.email ? true : undefined}
          size="md"
          radius="sm"
          variant="faded"
          label="Email"
          labelPlacement="outside"
          placeholder="Digite seu e-mail"
          classNames={{
            label: "text-content1",
            input: "text-content2",
            inputWrapper: "bg-content4",
          }}
        />

        {errors.email ? (
          <p className="px-2 -mt-4 text-danger text-xs font-light">
            {errors.email.message}
          </p>
        ) : null}

        <Input
          {...register("subject")}
          isInvalid={errors.subject ? true : undefined}
          size="md"
          radius="sm"
          variant="faded"
          label="Assunto"
          labelPlacement="outside"
          placeholder="Digite o assunto"
          classNames={{
            label: "text-content1",
            input: "text-content2",
            inputWrapper: "bg-content4",
          }}
        />

        {errors.subject ? (
          <p className="px-2 -mt-4 text-danger text-xs font-light">
            {errors.subject.message}
          </p>
        ) : null}

        <Textarea
          {...register("message")}
          isInvalid={errors.message ? true : undefined}
          size="sm"
          radius="sm"
          variant="faded"
          label="Mensagem"
          labelPlacement="outside"
          placeholder="Digite sua mensagem"
          classNames={{
            label: "text-content1",
            input: "text-content2",
            inputWrapper: "bg-content4",
          }}
        />

        {errors.message ? (
          <p className="px-2 -mt-4 text-danger text-xs font-light">
            {errors.message.message}
          </p>
        ) : null}

        <Button
          size="md"
          radius="sm"
          color="primary"
          variant="solid"
          type="submit"
          isLoading={isSubmitting}
        >
          Enviar mensagem
        </Button>
        <p className="text-xs font-light text-content2 antialiased">
          Evite me enviar informações confidenciais.
        </p>
      </form>
    </div>
  );
}
