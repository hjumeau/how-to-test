import React from 'react';
import { LoginForm, LoginFormState } from './components/LoginForm';

interface LoginProps {
  title: string;
  onSubmit: (value: LoginFormState) => void;
  loginError?: string;
}

export const Login: React.FunctionComponent<LoginProps> = ({title, onSubmit, loginError}) => {
  return (
    <div>
      <h2>{title}</h2>
      <LoginForm error={loginError} onSubmit={onSubmit}/>
    </div>
  );
};
