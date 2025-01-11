interface InputProps {
  id: string;
  type: string;
  className?: string;
  required?: boolean;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const inputStyled = {
  height: '60px',
  borderRadius: '10px',
  border: '1px solid #555',
  padding: '0 6px',
  fontSize: '22px',
};

const Input: React.FC<InputProps> = ({ id, type, className, required }) => {
  return <input style={inputStyled} id={id} type={type} className={className} required={required} />;
};

export default Input;
