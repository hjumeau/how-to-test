import React from 'react';
import { LoginForm, LoginFormState } from './components/LoginForm';
import styles from './login.module.css';

interface LoginProps {
  title: string;
  onSubmit: (value: LoginFormState) => void;
  loginError?: string;
}

export const Login: React.FunctionComponent<LoginProps> = ({title, onSubmit, loginError}) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <LoginForm error={loginError} onSubmit={onSubmit}/>
    </div>
  );
};
