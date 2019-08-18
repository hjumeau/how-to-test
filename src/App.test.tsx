import { cleanup, fireEvent, render, wait } from '@testing-library/react';
import React from 'react';
import { App, LOGIN_FAILED_MESSAGE } from './App';
import { login } from './services/api/authentication';

jest.mock('./services/api/authentication');

describe('App Component', () => {
  afterEach(cleanup);

  it('should render the header text', () => {
    const {getByText} = render(<App/>);

    expect(getByText('React Login Example')).not.toBeNull();
  });

  it('should render the footer text', () => {
    const {getByText} = render(<App/>);

    expect(getByText('Try to win the testing trophy')).not.toBeNull();
  });

  it('should render the login form by default', () => {
    const {getByText} = render(<App/>);

    expect(getByText('Enter your credentials')).not.toBeNull();
  });

  it('should call the login service with username and password', () => {
    // GIVEN
    const username = 'test@gmail.com';
    const password = 'test';
    (login as jest.Mock).mockResolvedValueOnce({});

    // WHEN
    const {getByText, getByLabelText} = render(<App/>);
    fireEvent.change(getByLabelText(/Username/i), {target: {value: username}});
    fireEvent.change(getByLabelText(/Password/i), {target: {value: password}});
    fireEvent.click(getByText('Connexion'));

    // THEN
    expect(login).toHaveBeenCalledWith(username, password);
  });

  it('should show the welcome message when a user is logged', async () => {
    // GIVEN
    const email = 'test@gmail.com';
    (login as jest.Mock).mockResolvedValueOnce({email});

    // WHEN
    const {getByText} = render(<App/>);
    fireEvent.click(getByText('Connexion'));

    // THEN
    await wait(() => {
      expect(getByText(`Welcome ${email}`));
    });
  });

  it('should show the error message when user login failed', async () => {
    // GIVEN
    (login as jest.Mock).mockResolvedValueOnce(null);

    // WHEN
    const {getByText} = render(<App/>);
    fireEvent.click(getByText('Connexion'));

    // THEN
    await wait(() => {
      expect(getByText(LOGIN_FAILED_MESSAGE)).not.toBeNull();
    });
  });
});
