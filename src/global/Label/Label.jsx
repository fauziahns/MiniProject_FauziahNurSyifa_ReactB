const Label = ({ htmlFor, className, label }) => {
    return (
      <label htmlFor={htmlFor} className={`ms-2 mb-2 ${className && className}`}>
        {label}
      </label>
    );
  };
  
  export default Label;
  