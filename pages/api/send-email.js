import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    return res.status(200).send(`
      <h1>📧 Email Sender API</h1>
      <p>Send a <strong>POST</strong> request to <code>/api/send-email</code> with JSON body:</p>
      <pre>
{
  "receiver_email": "example@gmail.com",
  "subject": "Test",
  "body_text": "Hello from the API"
}
      </pre>
    `);
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Only POST and GET methods are allowed' });
  }

  const { receiver_email, subject, body_text } = req.body;

  if (!receiver_email || !subject || !body_text) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: receiver_email,
      subject,
      text: body_text,
    });

    return res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
