import React from 'react';
import Label from '../../atoms/label/Label';
import Input from '../../atoms/input/Input';
import Button from '../../atoms/button/Button';

const Form: React.FC = () => {
  return (
    <div className='container'>
      <h1>Bem vindo(a) ao Instaq</h1>
      <form>
        <div className='flex-form'>
          <Label htmlFor='e-mail' text='E-mail' className='email-label' />
          <Input id='e-mail' type='email' className='email-input' required={false} />
        </div>
        <div className='flex-form'>
          <Label htmlFor='password' text='Senha' className='password-label' />
          <Input id='password' type='password' className='password-input' required={false} />
        </div>
        <Button text='Entrar' background='#1d76d0' border='none' id='entrar' />
      </form>
    </div>
  );
};

export default Form;
