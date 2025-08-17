import { useState } from "react";

export default function EmailForm({ onSend }) {
  const [recipients, setRecipients] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSend = async () => {
    if (!recipients.trim()) {
      alert("⚠️ Please enter at least one recipient email.");
      return;
    }

    try {
      await onSend(recipients);
      setRecipients("");      // ✅ Clear input field
      setSuccess(true);       // ✅ Show success message

      // Hide success message after 3 seconds
      setTimeout(() => setSuccess(false), 3000);
    } catch (error) {
      alert("❌ Failed to send email. Please try again.");
    }
  };

  return (
    <div className="email-section">
      <input
        type="text"
        placeholder="Enter recipient emails (comma separated)"
        value={recipients}
        onChange={(e) => setRecipients(e.target.value)}
      />
      <button onClick={handleSend}>Send Email</button>

      {success && <p style={{ color: "green", marginTop: "10px" }}>✅ Email sent successfully!</p>}
    </div>
  );
}
