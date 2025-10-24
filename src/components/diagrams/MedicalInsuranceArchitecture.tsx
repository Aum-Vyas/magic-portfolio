export default function MedicalInsuranceArchitecture() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="900" height="260" viewBox="0 0 900 260">
      <style>{`.box{fill:#F7FAFC;stroke:#CBD5E1;stroke-width:2}.title{font:600 14px sans-serif;fill:#0F172A}.text{font:12px sans-serif;fill:#334155}.arrow{stroke:#64748B;stroke-width:2;fill:none}`}</style>
      <defs>
        <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse">
          <path d="M0 0L10 5L0 10z" fill="#64748B" />
        </marker>
      </defs>
      <rect className="box" x="20" y="60" width="150" height="90" rx="8" />
      <rect className="box" x="200" y="60" width="180" height="90" rx="8" />
      <rect className="box" x="410" y="60" width="170" height="90" rx="8" />
      <rect className="box" x="610" y="60" width="170" height="90" rx="8" />
      <rect className="box" x="20" y="180" width="300" height="60" rx="8" />
      <text className="title" x="40" y="85">Data</text>
      <text className="text" x="40" y="105">age, bmi, children, smoker, region...</text>
      <text className="title" x="220" y="85">Preprocessing</text>
      <text className="text" x="220" y="105">impute, encode categoricals, scale</text>
      <text className="title" x="430" y="85">Model</text>
      <text className="text" x="430" y="105">LinearReg, RF, or GBR</text>
      <text className="title" x="630" y="85">Evaluation</text>
      <text className="text" x="630" y="105">MAE, RMSE, R², plots</text>
      <text className="title" x="40" y="205">Artifacts & Reporting</text>
      <text className="text" x="40" y="225">metrics.json, figures/, model.joblib</text>
      <path className="arrow" d="M170 105L200 105" markerEnd="url(#arrow)" />
      <path className="arrow" d="M380 105L410 105" markerEnd="url(#arrow)" />
      <path className="arrow" d="M580 105L610 105" markerEnd="url(#arrow)" />
      <path className="arrow" d="M695 150L170 210" markerEnd="url(#arrow)" />
    </svg>
  );
}

