import React, { ChangeEvent, useState } from 'react';
import { Button } from '../../../../components/Button';
import { Input } from '../../../../components/Input';
import styles from './loginForm.module.css';

interface LoginFormProps {
  onSubmit: (value: LoginFormState) => void;
  error?: string;
}

export interface LoginFormState {
  username: string;
  password: string;
}

export const LoginForm: React.FunctionComponent<LoginFormProps> = ({onSubmit, error}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const onUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {setUsername(event.target.value); };
  const onPasswordChange = (event: ChangeEvent<HTMLInputElement>) => {setPassword(event.target.value); };
  const onSubmitForm = () => onSubmit({username, password});

  return (
      <form>
        <Input
          id='username'
          labelName='USERNAME'
          inputType='text'
          value={username}
          onChange={onUsernameChange}
        />
        <Input
          id='password'
          labelName='PASSWORD'
          inputType='password'
          value={password}
          onChange={onPasswordChange}
        />
        <Button style={{marginTop: 40}} onClick={onSubmitForm} >Connexion</Button>
        {!!error && <p className={styles.error}>{error}</p>}
      </form>
    );
};
