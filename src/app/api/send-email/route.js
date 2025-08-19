import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { from, name, subject, message } = await req.json();
    if (!name || !from || !message) {
      return NextResponse.json(
        { success: false, error: "Name, email, and message are required" },
        { status: 400 }
      );
    }
    const data = await resend.emails.send({
      from: "delivered@resend.dev", // For testing without verified domain
      to: "nemmy0257@gmail.com", // used creating account
      subject: subject || "New contact form message",
      text: `
        New contact form submission:
        
        Name: ${name}
        Email: ${from}
        Subject: ${subject || "No subject"}
        
        Message:
        ${message}
      `,
      html: `
        <h2>New contact form submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${from}</p>
        <p><strong>Subject:</strong> ${subject || "No subject"}</p>
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
