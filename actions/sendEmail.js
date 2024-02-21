"use server";

import { EmailTemplate } from "@/components/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData) => {
  // const senderName = formData.get("senderName");
  // const senderEmail = formData.get("senderEmail");
  // const message = formData.get("message");
  const { senderName, senderEmail, message } = formData;

  await resend.emails.send({
    from: "SpacePlan <onboarding@resend.dev>",
    to: ["gerard.homsi@gmail.com"],
    reply_to: senderEmail,
    subject: "Contact From",
    react: EmailTemplate({ message, senderEmail, senderName }),
  });
};
