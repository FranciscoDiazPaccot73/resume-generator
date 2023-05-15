const ResumeTitle = ({ label, className = '', color }) => (
  <div className={`font-bold border-b-2 mb-2 ${className}`} style={{ borderColor: color }}>
    <p style={{ color }}>{label.toUpperCase()}</p>
  </div>
);

export default ResumeTitle;
