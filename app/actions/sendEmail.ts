"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmailAction(prevState: any, formData: FormData) {
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  if (!email || !message) {
    return { error: "Please fill out all fields." };
  }

  try {
    const { error } = await resend.emails.send({
      // For testing, Resend requires you to use their onboarding domain
      from: "Split Our Check <onboarding@resend.dev>", 
      to: process.env.CONTACT_EMAIL as string,
      subject: "New Message from Split Our Check",
      text: `You have a new message from ${email}:\n\n${message}`,
      replyTo: email, // This allows you to hit "Reply" in your email client and reply directly to the user
    });

    if (error) {
      return { error: error.message };
    }

    return { success: true };
  } catch (err) {
    return { error: "Something went wrong. Please try again." };
  }
}