import React from 'react';
import { BrowserRouter as Router, Route, RouteProps } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Home } from './scenes/Home';
import { Login } from './scenes/Login';
import { LoginFormState } from './scenes/Login/components/LoginForm';
import { login } from './services/api/authentication';

export const LOGIN_FAILED_MESSAGE = 'Username/password is wrong. Retry…';
export const App: React.FunctionComponent = () => {
  const [isAuthenticate, setAuthentication] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [loginError, setLoginError] = React.useState('');
  const onSubmit = ({username, password}: LoginFormState) => {
    login(username, password)
      .then((customer) => {
        setAuthentication(true);
        setEmail(customer.email);
        setLoginError('');
      })
      .catch(() => {
        setLoginError(LOGIN_FAILED_MESSAGE);
        setAuthentication(false);
        setEmail('');
      });
  };
  const renderContent = (routeProps: RouteProps) => isAuthenticate
    ? <Home email={email} {...routeProps}/>
    : <Login loginError={loginError} onSubmit={onSubmit} title='Enter your credentials'{...routeProps}/>;

  return (
    <Router>
      <div className='App'>
        <Header text='React Login Example'/>
        <Route
          path='/'
          render={renderContent}
        />
        <Footer text='Try to win the testing trophy'/>
      </div>
    </Router>
  );
};
