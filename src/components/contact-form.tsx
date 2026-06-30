"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useLocale } from "@/lib/locale";

const createContactSchema = (locale: "en" | "vi") =>
  z.object({
    name: z.string().min(2, locale === "vi" ? "Vui lòng nhập tên của bạn." : "Please enter your name."),
    email: z
      .string()
      .email(locale === "vi" ? "Vui lòng nhập địa chỉ email hợp lệ." : "Please enter a valid email address."),
    message: z
      .string()
      .min(
        10,
        locale === "vi"
          ? "Hãy mô tả thêm một chút — ít nhất 10 ký tự."
          : "Tell me a little more — at least 10 characters."
      ),
  });

type ContactValues = z.infer<ReturnType<typeof createContactSchema>>;

export function ContactForm() {
  const { locale } = useLocale();
  const [submitted, setSubmitted] = useState(false);
  const contactSchema = createContactSchema(locale);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (values: ContactValues) => {
    // TODO: Wire this up to a real email service.
    //   Options: an /api/contact route handler that calls Resend,
    //   EmailJS (client-side), or a form backend (Formspree, etc.).
    //   For now we simulate a successful send so the UI flow is complete.
    await new Promise((r) => setTimeout(r, 800));
    console.info("[contact] submission (not yet wired to a backend):", values);
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label={locale === "vi" ? "Tên" : "Name"} htmlFor="name" error={errors.name?.message}>
          <Input
            id="name"
            placeholder={locale === "vi" ? "Nguyễn Văn A" : "Jane Doe"}
            aria-invalid={!!errors.name}
            {...register("name")}
          />
        </Field>
        <Field label="Email" htmlFor="email" error={errors.email?.message}>
          <Input
            id="email"
            type="email"
            placeholder="jane@company.com"
            aria-invalid={!!errors.email}
            {...register("email")}
          />
        </Field>
      </div>

      <Field label={locale === "vi" ? "Nội dung" : "Message"} htmlFor="message" error={errors.message?.message}>
        <Textarea
          id="message"
          placeholder={
            locale === "vi"
              ? "Bạn đang xây dựng gì, và tôi có thể hỗ trợ như thế nào?"
              : "What are you building, and how can I help?"
          }
          aria-invalid={!!errors.message}
          {...register("message")}
        />
      </Field>

      <div className="flex items-center gap-4">
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? <Loader2 className="animate-spin" /> : <Send />}
          {isSubmitting
            ? locale === "vi"
              ? "Đang gửi…"
              : "Sending…"
            : locale === "vi"
              ? "Gửi tin nhắn"
              : "Send Message"}
        </Button>
        {submitted && (
          <span className="flex items-center gap-1.5 text-sm text-[var(--color-signal)]">
            <CheckCircle2 className="size-4" />
            {locale === "vi" ? "Cảm ơn — tôi sẽ liên hệ sớm." : "Thanks — I&apos;ll be in touch."}
          </span>
        )}
      </div>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={htmlFor}
        className="font-mono text-xs uppercase tracking-[0.12em] text-[var(--color-fg-subtle)]"
      >
        {label}
      </label>
      {children}
      {error && (
        <span role="alert" className="text-xs text-[#ff6b6b]">
          {error}
        </span>
      )}
    </div>
  );
}
