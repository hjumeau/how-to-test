import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, RouteProps } from 'react-router-dom';
import styles from './app.module.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Home } from './scenes/Home';
import { Login } from './scenes/Login';
import { login } from './services/api/authentication';
import { store } from './store';

export interface UserLogin {
  username: string;
  password: string;
}

export interface UserLogin {
  username: string;
  password: string;
}

export const LOGIN_FAILED_MESSAGE = 'Username/password is wrong. Retry…';

export const App: React.FunctionComponent = () => {
  const [isAuthenticate, setAuthentication] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [loginError, setLoginError] = React.useState('');
  const onSubmit = ({username, password}: UserLogin) => {
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
    : <Login errorMessage={loginError} onSubmit={onSubmit} title='Account Login' {...routeProps}/>;

  return (
    <Provider store={store}>
      <Router>
        <div className={styles.container}>
          <div className={styles.innerContainer}>
            <Header text='React Login Example'/>
            <Route
              path='/'
              render={renderContent}
            />
            <Footer text='Try to win the testing trophy with a simple react login form'/>
          </div>
        </div>
      </Router>
    </Provider>
  );
};
