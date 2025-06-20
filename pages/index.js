export default function Home() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '2rem', maxWidth: '700px', margin: '0 auto' }}>
      <h1>📨 Welcome to Email API</h1>
      
      <p>✅ Go to <a href="/api/send-email" style={{ color: '#0070f3', textDecoration: 'underline' }}>/sendmail</a> to use the online form.</p>
      
      <p>✅ Or send a <strong>POST</strong> request to <code>/api/send-email</code> using Postman or cURL:</p>

      <h3>📦 JSON Body Example:</h3>
      <pre style={{
        backgroundColor: '#f4f4f4',
        padding: '1rem',
        borderRadius: '5px',
        overflowX: 'auto'
      }}>
{`{
  "receiver_email": "someone@example.com",
  "subject": "Hello from API",
  "body_text": "This is a test email."
}`}
      </pre>

      <h3>💻 Example cURL Command:</h3>
      <pre style={{
        backgroundColor: '#f4f4f4',
        padding: '1rem',
        borderRadius: '5px',
        overflowX: 'auto'
      }}>
{`curl -X POST https://your-deployment-url.vercel.app/api/send-email \\
  -H "Content-Type: application/json" \\
  -d '{
    "receiver_email": "someone@example.com",
    "subject": "Hello from API",
    "body_text": "This is a test email."
  }'`}
      </pre>

      <p style={{ marginTop: '2rem', color: 'gray' }}>Built with ❤️ using Vercel, Serverless & Nodemailer</p>
    </div>
  );
}
