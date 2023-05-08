const Radio = ({ classNameInput, type, name, value, onChange,id,checked }) => {
    return (
      <div className="form-check">
        <input 
          className={classNameInput} 
          type="radio" 
          name={name} 
          value={value}
          id={id}
          onChange={onChange}
          checked={checked} />
      </div>
    );
  };
  
export default Radio;
  