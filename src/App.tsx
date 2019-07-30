import React from 'react';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Login } from './scenes/Login';
import { LoginFormState } from './scenes/Login/components/LoginForm';

const onSubmit = (value: LoginFormState) => {
  alert(JSON.stringify(value));
};

const App: React.FC = () => {
  return (
    <div className='App'>
      <Header text='React Login Example'/>
      <Login onSubmit={onSubmit} title='Enter your credentials'/>
      <Footer text='Put some style on it'/>
    </div>
  );
};

export default App;
