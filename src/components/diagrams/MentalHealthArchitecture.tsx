export default function MentalHealthArchitecture() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="900" height="260" viewBox="0 0 900 260">
      <style>{`.box{fill:#F7FAFC;stroke:#CBD5E1;stroke-width:2}.title{font:600 14px sans-serif;fill:#0F172A}.text{font:12px sans-serif;fill:#334155}.arrow{stroke:#64748B;stroke-width:2;fill:none}`}</style>
      <defs>
        <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse">
          <path d="M0 0L10 5L0 10z" fill="#64748B" />
        </marker>
      </defs>
      <rect className="box" x="20" y="60" width="170" height="90" rx="8" />
      <rect className="box" x="220" y="60" width="190" height="90" rx="8" />
      <rect className="box" x="440" y="60" width="170" height="90" rx="8" />
      <rect className="box" x="630" y="60" width="170" height="90" rx="8" />
      <text className="title" x="40" y="85">Text Data</text>
      <text className="text" x="40" y="105">posts, messages, labels</text>
      <text className="title" x="240" y="85">Preprocessing</text>
      <text className="text" x="240" y="105">clean, tokenize, TF‑IDF</text>
      <text className="title" x="460" y="85">Classifier</text>
      <text className="text" x="460" y="105">LogReg / Linear SVM</text>
      <text className="title" x="650" y="85">Evaluation</text>
      <text className="text" x="650" y="105">accuracy, F1, confusion</text>
      <path className="arrow" d="M190 105L220 105" markerEnd="url(#arrow)" />
      <path className="arrow" d="M410 105L440 105" markerEnd="url(#arrow)" />
      <path className="arrow" d="M610 105L630 105" markerEnd="url(#arrow)" />
    </svg>
  );
}

