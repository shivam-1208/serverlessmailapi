✅ README.md
markdown
Copy
Edit
# 📧 Serverless Email Sender API (with Frontend UI)

This project provides a simple serverless email-sending API using **Node.js + Nodemailer**, deployed on **Vercel**. It includes:

- A REST API to send emails (`POST /api/send-email`)
- A browser-based HTML form at the same endpoint (`GET /api/send-email`)

---

## 🔧 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/shivam-1208/serverlessmailapi.git
cd serverlessmailapi
2. Install Dependencies
bash
Copy
Edit
npm install
3. Environment Variables
Create a .env file (locally or in Vercel Dashboard):

env
Copy
Edit
SMTP_HOST=smtp.yourmail.com
SMTP_PORT=587
SMTP_USER=your@email.com
SMTP_PASS=your_app_password
🚀 Deployment on Vercel
Option 1: Using Vercel CLI
bash
Copy
Edit
npm i -g vercel
vercel login
vercel
Choose:

Project name

Framework: Next.js

Root directory: .

Output Directory: (just press Enter)

Option 2: Via GitHub
Push the code to GitHub

Go to https://vercel.com/import

Import your GitHub repo

Set Environment Variables in the Settings > Environment Variables tab

🧪 API Usage
🔹 Endpoint
bash
Copy
Edit
POST /api/send-email
🔹 Headers
pgsql
Copy
Edit
Content-Type: application/json
🔹 Body
json
Copy
Edit
{
  "receiver_email": "someone@example.com",
  "subject": "Hello!",
  "body_text": "This is a test email."
}
🧪 Test with Postman or cURL
✅ Postman
Method: POST

URL: https://your-vercel-app.vercel.app/api/send-email

Body: raw JSON (as above)

✅ cURL
bash
Copy
Edit
curl -X POST https://your-vercel-app.vercel.app/api/send-email \
  -H "Content-Type: application/json" \
  -d '{"receiver_email":"someone@example.com", "subject":"Test", "body_text":"Hello from cURL"}'
🌐 Use in Browser
Navigate to:

perl
Copy
Edit
https://your-vercel-app.vercel.app/api/send-email
This shows a built-in HTML form where you can input the email, subject, and message, and send directly.
