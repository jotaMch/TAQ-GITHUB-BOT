import React, { useState } from 'react';
import Label from '../../atoms/label/Label';
import Input from '../../atoms/input/Input';
import Button from '../../atoms/button/Button';

const Form: React.FC = () => {
  const [emailValue, setEmailValue] = useState<string>('');
  const [passwordValue, setPasswordValue] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');
  const [passwordErro, setPasswordErro] = useState<string>('');
  const [success, setSuccess] = useState<string>('');
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d).+$/;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEmailError('');
    setPasswordErro('');

    const emailRegexValidation = !emailRegex.test(emailValue);
    const passwordRegexValidation = !passwordRegex.test(passwordValue);

    if (emailRegexValidation) {
      setEmailError('Formato de e-mail inválido');
    }

    if (passwordRegexValidation) {
      setPasswordErro('A senha precisa conter pelo menos 1 letra e 1 número.');
    } else if (passwordValue.length < 7) {
      setPasswordErro('A senha precisa ter no mínimo 7 caracteres');
    }

    if (!emailRegexValidation && !passwordRegexValidation && passwordValue.length >= 7) {
      setSuccess('Validação completa');
    }
  };

  return (
    <div className='container'>
      <h1>Bem vindo(a) ao Instaq</h1>
      <form onSubmit={handleSubmit}>
        <div className='flex-form'>
          <Label htmlFor='e-mail' text='E-mail' className='email-label' />
          <Input
            id='e-mail'
            type='text'
            className='email-input'
            required={true}
            value={emailValue}
            setValue={setEmailValue}
          />
          <p className='erro'>{emailError}</p>
        </div>
        <div className='flex-form'>
          <Label htmlFor='password' text='Senha' className='password-label' />
          <Input
            id='password'
            type='password'
            className='password-input'
            required={false}
            value={passwordValue}
            setValue={setPasswordValue}
          />
          <p className='erro'>{passwordErro}</p>
        </div>
        <Button type='submit' text='Entrar' background='#1d76d0' border='none' id='entrar' />
        <p className='success'>{success}</p>
      </form>
    </div>
  );
};

export default Form;
