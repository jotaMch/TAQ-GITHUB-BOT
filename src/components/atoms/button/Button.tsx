import React from 'react';

interface ButtonProps {
  id?: string;
  text?: string;
  background?: string;
  border?: string;
  type?: 'submit';
}
const buttonStyled = {
  color: 'white',
  borderRadius: '5px',
  cursor: 'pointer',
  fontSize: '24px',
  fontWeight: 'bold',
  height: '60px',
};

const Button: React.FC<ButtonProps> = ({ id, border, text, background = 'blue' }) => {
  return (
    <button style={{ ...buttonStyled, border, background }} id={id}>
      {text}
    </button>
  );
};

export default Button;
