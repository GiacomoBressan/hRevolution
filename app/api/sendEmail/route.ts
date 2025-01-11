import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  // Configurazione del trasportatore (smtp) per Nodemailer
  const transporter = nodemailer.createTransport({
    service: "outlook", // Usa il servizio che preferisci (es. Gmail)
    auth: {
      user: process.env.EMAIL_USER, // La tua email
      pass: process.env.EMAIL_PASS, // La tua password (o app password per Gmail)
    },
  });

  // Configurazione dell'email
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: "l.crocetta@vibranium.it", // Sostituisci con l'email del destinatario
    subject: "Nuovo messaggio dal modulo di contatto",
    text: `Nome: ${name}\nEmail: ${email}\nMessaggio: ${message}`,
  };

  try {
    // Invia l'email
    await transporter.sendMail(mailOptions);
    return NextResponse.json(
      { message: "Email inviata con successo" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Errore nell'invio dell'email", error },
      { status: 500 }
    );
  }
}
