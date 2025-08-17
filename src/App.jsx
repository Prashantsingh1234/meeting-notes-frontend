import { useState } from "react";
import axios from "axios";
import UploadTranscript from "./components/UploadTranscript";
import SummaryEditor from "./components/SummaryEditor";
import EmailForm from "./components/EmailForm";
import "./App.css";  // Import CSS

function App() {
  const [summary, setSummary] = useState("");

  // Use environment variable for backend URL
  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

  // Generate summary from transcript using backend
  const generateSummary = async (transcript, prompt) => {
    try {
      const res = await axios.post(`${API_URL}/api/summary`, { transcript, prompt });
      setSummary(res.data.summary);
    } catch (error) {
      console.error("Error generating summary:", error);
      alert("❌ Failed to generate summary. Please try again.");
    }
  };

  // Send email via backend
  const sendEmail = async (recipients) => {
    try {
      await axios.post(`${API_URL}/api/email`, { recipients, summary });
      alert("✅ Email sent successfully!");
    } catch (error) {
      console.error("Error sending email:", error);
      alert("❌ Failed to send email. Please try again.");
    }
  };

  return (
    <div className="app-container">
      <div className="card">
        <h1 className="title">✨ AI Meeting Notes Summarizer ✨</h1>
        <p className="subtitle">Upload transcript ➝ Generate summary ➝ Share via email</p>

        <UploadTranscript onGenerate={generateSummary} />
        <SummaryEditor summary={summary} setSummary={setSummary} />
        <EmailForm onSend={sendEmail} />
      </div>
    </div>
  );
}

export default App;
