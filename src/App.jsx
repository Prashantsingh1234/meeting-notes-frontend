import { useState } from "react";
import axios from "axios";
import UploadTranscript from "./components/UploadTranscript";
import SummaryEditor from "./components/SummaryEditor";
import EmailForm from "./components/EmailForm";
import "./App.css";  // Import CSS

function App() {
  const [summary, setSummary] = useState("");

  const generateSummary = async (transcript, prompt) => {
    const res = await axios.post("http://localhost:5000/api/summary", { transcript, prompt });
    setSummary(res.data.summary);
  };

  const sendEmail = async (recipients) => {
    await axios.post("http://localhost:5000/api/email", { recipients, summary });
    alert("✅ Email sent successfully!");
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
