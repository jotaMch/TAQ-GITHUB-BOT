import React from 'react';

interface ButtonProps {
  id?: string;
  text?: string;
  background?: string;
  border?: string;
}

const Button: React.FC<ButtonProps> = ({ id, border, text, background = 'blue' }) => {
  const buttonStyled = {
    backgroundColor: background,
    color: 'white',
    border: border,
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '24px',
    fontWeight: 'bold',
    height: '60px',
  };

  return (
    <button style={buttonStyled} id={id}>
      {text}
    </button>
  );
};

export default Button;
