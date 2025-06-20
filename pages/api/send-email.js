import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    // Serve HTML form
    return res.status(200).send(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Email Sender</title>
        <style>
          body { font-family: Arial, sans-serif; max-width: 600px; margin: 50px auto; }
          input, textarea, button { width: 100%; padding: 10px; margin: 10px 0; }
          button { background-color: #0070f3; color: white; border: none; cursor: pointer; }
          button:hover { background-color: #005bb5; }
          .response { margin-top: 20px; font-weight: bold; }
        </style>
      </head>
      <body>
        <h1>📧 Send an Email</h1>
        <form id="emailForm">
          <label>To:</label>
          <input type="email" id="receiver_email" required />
          <label>Subject:</label>
          <input type="text" id="subject" required />
          <label>Message:</label>
          <textarea id="body_text" rows="6" required></textarea>
          <button type="submit">Send Email</button>
        </form>
        <div class="response" id="response"></div>
        <script>
          document.getElementById('emailForm').addEventListener('submit', async function(e) {
            e.preventDefault();
            const responseEl = document.getElementById('response');
            responseEl.textContent = "Sending...";
            const res = await fetch('/api/send-email', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                receiver_email: document.getElementById('receiver_email').value,
                subject: document.getElementById('subject').value,
                body_text: document.getElementById('body_text').value
              })
            });
            const data = await res.json();
            responseEl.textContent = res.ok ? '✅ ' + data.message : '❌ ' + data.error;
          });
        </script>
      </body>
      </html>
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

    return res.status(200).json({ message: 'Email sent successfully!' });

  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

