import React from 'react';

interface LabelProps {
  htmlFor?: string;
  text: string;
  required?: boolean;
  className?: string;
}

const Label: React.FC<LabelProps> = ({ htmlFor, text, className }) => {
  const labelStyled = {
    fontSize: '24px',
  };

  return (
    <label style={labelStyled} htmlFor={htmlFor} className={className}>
      {text}
    </label>
  );
};

export default Label;
