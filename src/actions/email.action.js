"use server";

import { Resend } from "resend";


export async function sendEmail(initialState, formData) {
    if (!process.env.RESEND_API_KEY){
    return {success: false, message: "Server configuration error"};
  }
  const resend = new Resend(process.env.RESEND_API_KEY);
  const { email, name, subject, message } = Object.fromEntries(formData);
  if (!email || !message) {
    return { success: false, message: "Missing required fields!" };
  }

  try {
    const res = await resend.emails.send({
      from: "Contact <contact@tecgrw.com>",
      to: "info@tecgrw.com",
      subject: subject || "New contact form message",
      replyTo: email,
      text: `New contact form submission:

      Name: ${name || 'Not provided'}
      Email: ${email}
      Subject: ${subject || "No subject"}

      Message:
      ${message}`,
            html: `<h2>New contact form submission</h2>
      <p><strong>Name:</strong> ${name || 'Not provided'}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject || "No subject"}</p>
      <h3>Message:</h3>
      <p>${message.replace(/\n/g, '<br>')}</p>`
    });

    return res.data 
      ? { success: true, message: "Message sent successfully!" }
      : { success: false, message: "Error occurred, please try again!" };
  } catch {
    return { success: false, message: "Failed to send message. Please try again." };
  }
}
export async function emailSubscribe(initialState, formData){
  if (!process.env.BREVO_API_KEY || !process.env.BREVO_TEMPLATE_ID){
    return {success: false, message: "Server configuration error"};
  }
  const email = formData.get('email');
  try {
    const res = await fetch("https://api.brevo.com/v3/contacts/doubleOptinConfirmation", {
      method: "POST",
      headers: {
        "accept": "application/json",
        "api-key": process.env.BREVO_API_KEY,
        "content-type": "application/json"
      },
      body: JSON.stringify({
        email,
        includeListIds: [6],
        templateId: parseInt(process.env.BREVO_TEMPLATE_ID),
        redirectionUrl: process.env.REDIRECTION_URL || "https://tecgrw.com" 
      })
    });
    return res.ok
        ? { success: true, message: "Subscribed successfully!" }
        : { success: false, message: "Error subscribing, please try again!" };
    } catch{
      return { success: false, message: "Internal server error" };
    }
}