import React, { ChangeEvent, useState } from 'react';
import { Input } from '../../../../components/Input';

interface LoginFormProps {
  onSubmit: (value: LoginFormState) => void;
}

export interface LoginFormState {
  username: string;
  password: string;
}

export const LoginForm: React.FunctionComponent<LoginFormProps> = ({onSubmit}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const onUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {setUsername(event.target.value); };
  const onPasswordChange = (event: ChangeEvent<HTMLInputElement>) => {setPassword(event.target.value); };
  const onSubmitForm = () => onSubmit({username, password});

  return (
      <form>
        <Input id='username' labelName='Username: ' inputType='text' value={username} onChange={onUsernameChange} />
        <Input id='password' labelName='Password: ' inputType='password' value={password} onChange={onPasswordChange}/>
        <button onClick={onSubmitForm} type='button'>Connexion</button>
      </form>
    );
};
