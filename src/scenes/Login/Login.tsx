import React from 'react';
import { UserLogin } from '../../App';
import { LoginForm } from './components/LoginForm';
import styles from './login.module.css';

interface LoginProps {
  title: string;
  onSubmit: (value: UserLogin) => void;
  errorMessage?: string;
}

export const Login: React.FunctionComponent<LoginProps> = ({title, onSubmit, errorMessage}) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <LoginForm errorMessage={errorMessage} onSubmit={onSubmit}/>
    </div>
  );
};
