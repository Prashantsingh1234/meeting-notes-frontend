import { useState } from "react";

export default function UploadTranscript({ onGenerate }) {
  const [transcript, setTranscript] = useState("");
  const [prompt, setPrompt] = useState("");

  return (
    <div>
      <textarea placeholder="Paste transcript here" value={transcript} onChange={(e) => setTranscript(e.target.value)} />
      <input type="text" placeholder="Enter custom instruction" value={prompt} onChange={(e) => setPrompt(e.target.value)} />
      <button onClick={() => onGenerate(transcript, prompt)}>Generate Summary</button>
    </div>
  );
}
