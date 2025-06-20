// pages/sendmail.js

import { useState } from 'react';

export default function SendMailForm() {
  const [formData, setFormData] = useState({
    receiver_email: '',
    subject: '',
    body_text: '',
  });

  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (res.ok) {
      setStatus('✅ Email sent successfully!');
    } else {
      setStatus(`❌ Error: ${data.error}`);
    }
  };

  return (
    <div style={{ fontFamily: 'Arial', padding: '2rem' }}>
      <h1>📧 Send Email</h1>
      <form onSubmit={handleSubmit}>
        <label>Email: <input type="email" required onChange={(e) => setFormData({ ...formData, receiver_email: e.target.value })} /></label><br /><br />
        <label>Subject: <input required onChange={(e) => setFormData({ ...formData, subject: e.target.value })} /></label><br /><br />
        <label>Body:<br />
          <textarea required onChange={(e) => setFormData({ ...formData, body_text: e.target.value })}></textarea>
        </label><br /><br />
        <button type="submit">Send</button>
      </form>
      <p>{status}</p>
    </div>
  );
}

