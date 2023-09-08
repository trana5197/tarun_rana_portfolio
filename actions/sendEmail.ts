"use server";

import { Resend } from "resend";

import { getErrorMessage, validateString } from "../lib/utils";

import ContactFormEmail from "../email/ContactFormEmail";
import React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  // simple server side validatiom
  if (!validateString(senderEmail, 500))
    return { error: "Invalid sender email" };
  if (!validateString(message, 5000)) return { error: "Invalid message" };

  let data;
  try {
    await resend.emails.send({
      from: "From Portfolio (IMPORTANT)<onboarding@resend.dev>",
      to: "trana51997@gmail.com",
      subject: "IMPORTANT: Message from portfolio",
      reply_to: senderEmail as string,
      // text: message as string,
      // react: <ContactFormEmail message={message} senderEmail={sendEmail} />
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: senderEmail as string,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
}
