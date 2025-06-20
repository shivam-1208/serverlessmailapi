export default function Home() {
  return (
    <div style={{ fontFamily: 'Arial', padding: '2rem' }}>
      <h1>📧 Email Sender API</h1>
      <p>This API is deployed and ready to send emails.</p>
      <p>
        Send a <strong>POST</strong> request to <code>/api/send-email</code> with JSON body:
      </p>
      <pre>{`
{
  "receiver_email": "someone@example.com",
  "subject": "Hello!",
  "body_text": "This is a test email."
}
      `}</pre>
    </div>
  );
}
