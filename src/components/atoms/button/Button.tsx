import React from 'react';

interface ButtonProps {
  id?: string;
  text?: string;
  background?: string;
  border?: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({ id, border, text, background = 'blue', type = 'button' }) => {
  const buttonStyled = {
    backgroundColor: background,
    color: 'white',
    border: border || 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '24px',
    fontWeight: 'bold',
    height: '60px',
  };

  return (
    <button type={type} style={buttonStyled} id={id} aria-label={text}>
      {text}
    </button>
  );
};

export default Button;
