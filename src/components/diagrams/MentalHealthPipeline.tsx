export default function MentalHealthPipeline() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="900" height="300" viewBox="0 0 900 300">
      <style>{`.box{fill:#F8FAFC;stroke:#94A3B8;stroke-width:2}.title{font:600 14px sans-serif;fill:#0F172A}.text{font:12px sans-serif;fill:#334155}.arrow{stroke:#64748B;stroke-width:2;fill:none}`}</style>
      <defs>
        <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse">
          <path d="M0 0L10 5L0 10z" fill="#64748B" />
        </marker>
      </defs>
      <rect className="box" x="30" y="40" width="170" height="90" rx="8" />
      <rect className="box" x="230" y="40" width="200" height="90" rx="8" />
      <rect className="box" x="460" y="40" width="180" height="90" rx="8" />
      <rect className="box" x="670" y="40" width="180" height="90" rx="8" />
      <text className="title" x="50" y="65">Load & Split</text>
      <text className="text" x="50" y="85">stratified train/val/test</text>
      <text className="title" x="250" y="65">Clean & Vectorize</text>
      <text className="text" x="250" y="85">normalize, remove noise, TF‑IDF</text>
      <text className="title" x="480" y="65">Train</text>
      <text className="text" x="480" y="85">LogReg / Linear SVM</text>
      <text className="title" x="690" y="65">Evaluate</text>
      <text className="text" x="690" y="85">accuracy, macro/micro F1</text>
      <path className="arrow" d="M200 85L230 85" markerEnd="url(#arrow)" />
      <path className="arrow" d="M430 85L460 85" markerEnd="url(#arrow)" />
      <path className="arrow" d="M640 85L670 85" markerEnd="url(#arrow)" />
      <text className="text" x="40" y="160">• class weights / resampling for imbalance</text>
      <text className="text" x="40" y="180">• error analysis guided by confusion matrix</text>
    </svg>
  );
}

