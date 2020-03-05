import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { UserLogin } from '../../../../App';
import { Button } from '../../../../components/Button';
import { InputField } from '../../../../components/InputField';
import styles from './loginForm.module.css';

interface LoginFormProps {
  errorMessage?: string;
}

const LoginComponent: React.FunctionComponent<InjectedFormProps<UserLogin> & LoginFormProps>
  = ({errorMessage, handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit}>
      <Field
        component={InputField}
        id='username'
        name='username'
        label='USERNAME'
      />
      <Field
        component={InputField}
        id='password'
        name='password'
        label='PASSWORD'
        type='password'
      />
      <Button id='login-submit' style={{marginTop: 40}} type='submit'>Connexion</Button>
      {!!errorMessage && <p data-testid='error-message' className={styles.error}>{errorMessage}</p>}
    </form>
  );
};

export const LoginForm = reduxForm<UserLogin, LoginFormProps>({ form: 'signin' })(LoginComponent);
