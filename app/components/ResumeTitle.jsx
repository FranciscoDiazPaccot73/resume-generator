const ResumeTitle = ({ label, className }) => (
  <div className={`font-bold border-b-2 border-black mb-2 ${className}`}>
    <p>{label.toUpperCase()}</p>
  </div>
);

export default ResumeTitle;
