import React from 'react';
import { BrowserRouter as Router, Route, RouteProps } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Home } from './scenes/Home';
import { Login } from './scenes/Login';
import { LoginFormState } from './scenes/Login/components/LoginForm';

const App: React.FunctionComponent = () => {
  const [isAuthenticate, setAuthentication] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const onSubmit = ({username, password}: LoginFormState) => {
    if (username === 'test@gmail.com' && password === 'test') {
      setAuthentication(true);
      setEmail(username);
    } else {
      setAuthentication(false);
      setEmail('');
    }
  };
  const renderContent = (routeProps: RouteProps) => isAuthenticate
    ? <Home email={email} {...routeProps}/>
    : <Login onSubmit={onSubmit} title='Enter your credentials'{...routeProps}/>;

  return (
    <Router>
      <div className='App'>
        <Header text='React Login Example'/>
        <Route
          path='/'
          render={renderContent}
        />
        <Footer text='Put some style on it'/>
      </div>
    </Router>
  );
};

export default App;
