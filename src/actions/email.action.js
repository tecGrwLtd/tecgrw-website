"use server";

import { Resend } from "resend";


const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(initialState, formData) {
    try {
        const { email, name, subject, message } = Object.fromEntries(formData);
        if (!email || !message) {
          return { success: false, error: "Missing required fields!" }
        }
    
        await resend.emails.send({
        from: "delivered@resend.dev", // For testing without verified domain
        to: "nemmy0257@gmail.com", // used creating account
        subject: subject || "New contact form message",
        text: `
            New contact form submission:
            
            Name: ${name}
            Email: ${email}
            Subject: ${subject || "No subject"}
            
            Message:
            ${message}
        `,
        html: `
            <h2>New contact form submission</h2>
            <p><strong>Name:</strong> ${name || 'not provided'}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject || "No subject"}</p>
            <h3>Message:</h3>
            <p>${message.replace(/\n/g, '<br>')}</p>
        `,
        })
        return {success: true, message: "Message sent successfully!" }
    } catch (error) {
        return { success: false, error: "Failed to send message. Please try again."};
    }
}
