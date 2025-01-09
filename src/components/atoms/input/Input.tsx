interface InputProps {
  id: string;
  type: string;
  className?: string;
  required?: boolean;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const Input: React.FC<InputProps> = ({ id, type, className, required = false, value, setValue }) => {
  const inputStyled = {
    height: '38px',
    borderRadius: '10px',
    border: '1px solid #555',
    padding: '0 6px',
  };

  return (
    <input
      style={inputStyled}
      id={id}
      type={type}
      className={className}
      required={required}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export default Input;
