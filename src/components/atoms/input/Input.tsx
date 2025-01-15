interface InputProps {
  id: string;
  type: string;
  className?: string;
  required?: boolean;
  value: string;
  setValue: (value: string) => void;
}

const inputStyled = {
  height: '60px',
  borderRadius: '10px',
  border: '1px solid #555',
  padding: '0 6px',
  fontSize: '22px',
};

const Input: React.FC<InputProps> = ({ id, type, className, required, value, setValue }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <input
      style={inputStyled}
      id={id}
      type={type}
      className={className}
      required={required}
      value={value}
      onChange={handleChange}
    />
  );
};

export default Input;
