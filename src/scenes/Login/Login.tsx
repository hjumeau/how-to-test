import React from 'react';
import { LoginForm, LoginFormState } from './components/LoginForm';

interface LoginProps {
  title: string;
  onSubmit: (value: LoginFormState) => void;
}

export const Login: React.FunctionComponent<LoginProps> = ({title, onSubmit}) => {
  return (
    <div>
      <h2>{title}</h2>
      <LoginForm onSubmit={onSubmit}/>
    </div>
  );
};
