import React, { useState } from 'react';
import Label from '../../atoms/label/Label';
import Input from '../../atoms/input/Input';
import Button from '../../atoms/button/Button';

const Form: React.FC = () => {
  const [emailValue, setEmailValue] = useState<string>('');
  const [passwordValue, setPasswordValue] = useState<string>('');
  const [emailErro, setEmailErro] = useState<string>('');
  const [passwordErro, setPasswordErro] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEmailErro('');
    setPasswordErro('');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d).+$/;
    const emailRegexValidation = !emailRegex.test(emailValue);
    const passwordRegexValidation = !passwordRegex.test(passwordValue);

    if (emailRegexValidation) {
      setEmailErro('Formato de e-mail inválido');
    }
    if (passwordRegexValidation) {
      setPasswordErro('A senha precisa conter pelo menos 1 letra e 1 número.');
    } else if (passwordValue.length < 7) {
      setPasswordErro('A senha precisa ter no mínimo 7 caracteres');
    }

    if (!emailRegexValidation && !passwordRegexValidation && passwordValue.length >= 7) {
      alert('Validação completa');
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
            type='email'
            className='email-input'
            required={false}
            value={emailValue}
            setValue={setEmailValue}
          />
          <p className='erro'>{emailErro}</p>
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
      </form>
    </div>
  );
};

export default Form;
