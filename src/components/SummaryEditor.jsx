import React from "react";

function SummaryEditor({ summary, setSummary }) {
  return (
    <div className="summary-section">
      <h2 className="summary-heading" style={{ color: "#000" }}>
  📝 Generated Summary
</h2>
      <textarea
        value={summary}
        onChange={(e) => setSummary(e.target.value)}
        placeholder="Your AI-generated summary will appear here..."
        className="summary-textarea"
          // ✅ Inline CSS for black text
      />
    </div>
  );
}

export default SummaryEditor;
