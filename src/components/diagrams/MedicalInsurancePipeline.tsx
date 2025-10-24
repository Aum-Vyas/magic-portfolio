export default function MedicalInsurancePipeline() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="900" height="280" viewBox="0 0 900 280">
      <style>{`.box{fill:#F8FAFC;stroke:#94A3B8;stroke-width:2}.title{font:600 14px sans-serif;fill:#0F172A}.text{font:12px sans-serif;fill:#334155}.arrow{stroke:#64748B;stroke-width:2;fill:none}`}</style>
      <defs>
        <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse">
          <path d="M0 0L10 5L0 10z" fill="#64748B" />
        </marker>
      </defs>
      <rect className="box" x="30" y="40" width="160" height="80" rx="8" />
      <rect className="box" x="220" y="40" width="190" height="80" rx="8" />
      <rect className="box" x="440" y="40" width="170" height="80" rx="8" />
      <rect className="box" x="640" y="40" width="170" height="80" rx="8" />
      <text className="title" x="50" y="65">Load & Split</text>
      <text className="text" x="50" y="85">train/val/test (stratify if needed)</text>
      <text className="title" x="240" y="65">Transform</text>
      <text className="text" x="240" y="85">impute → encode → scale</text>
      <text className="title" x="460" y="65">Train</text>
      <text className="text" x="460" y="85">fit estimator, save pipeline</text>
      <text className="title" x="660" y="65">Evaluate</text>
      <text className="text" x="660" y="85">MAE, RMSE, R², residuals</text>
      <path className="arrow" d="M190 80L220 80" markerEnd="url(#arrow)" />
      <path className="arrow" d="M410 80L440 80" markerEnd="url(#arrow)" />
      <path className="arrow" d="M610 80L640 80" markerEnd="url(#arrow)" />
    </svg>
  );
}

