import React, { ChangeEvent, useState } from 'react';
import { UserLogin } from '../../../../App';
import { Button } from '../../../../components/Button';
import { Input } from '../../../../components/Input';
import styles from './loginForm.module.css';

interface LoginFormProps {
  onSubmit: (value: UserLogin) => void;
  errorMessage?: string;
}

export const LoginForm: React.FunctionComponent<LoginFormProps> = ({onSubmit, errorMessage}) => {
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
        {!!errorMessage && <p className={styles.error}>{errorMessage}</p>}
      </form>
    );
};
