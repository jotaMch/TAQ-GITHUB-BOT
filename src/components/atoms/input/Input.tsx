import React from 'react';

interface InputProps {
  id: string;
  type: string;
  className?: string;
  required?: boolean;
}

const Input: React.FC<InputProps> = ({ id, type, className, required }) => {
  const inputStyled = {
    height: '38px',
    borderRadius: '10px',
    border: '1px solid #555',
  };
  return <input style={inputStyled} id={id} type={type} className={className} required={required} />;
};

export default Input;
