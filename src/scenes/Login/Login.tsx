import React from 'react';
import { LoginForm, LoginFormState } from './components/LoginForm';

interface Props {
  title: string;
  onSubmit: (value: LoginFormState) => void;
}

export const Login: React.FunctionComponent<Props> = ({title, onSubmit}) => {
  return (
    <div>
      <h2>{title}</h2>
      <LoginForm onSubmit={onSubmit}/>
    </div>
  );
};
