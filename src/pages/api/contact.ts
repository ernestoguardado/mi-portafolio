import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, message } = req.body as {
    name: string;
    email: string;
    message: string;
  };

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Todos los campos son requeridos' });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `[Portfolio] Nuevo mensaje de ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #111;">Nuevo mensaje desde tu portafolio</h2>
          <table style="width:100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Nombre:</td>
              <td style="padding: 8px 0;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Correo:</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td>
            </tr>
          </table>
          <hr style="margin: 16px 0; border: none; border-top: 1px solid #eee;" />
          <p style="color: #333; white-space: pre-line;">${message}</p>
        </div>
      `,
    });

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error('Error enviando correo:', error);
    return res.status(500).json({ error: 'Error al enviar el mensaje' });
  }
}
