import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { mountWithProviders } from '../../../../helpers/test';
import { LoginForm } from './LoginForm';

configure({ adapter: new Adapter() });

describe('LoginForm Component', () => {
  it('should show username label', () => {
    // WHEN
    const loginFormWrapper = mountWithProviders(<LoginForm />);
    const usernameLabelWrapper = loginFormWrapper.find('[data-testid="username-label"]');

    // THEN
    expect(usernameLabelWrapper.text()).toEqual('USERNAME');
  });

  it('should show password label', () => {
    // WHEN
    const loginFormWrapper = mountWithProviders(<LoginForm />);
    const passwordLabelWrapper = loginFormWrapper.find('[data-testid="label-password"]');

    // THEN
    expect(passwordLabelWrapper.text()).toEqual('PASSWORD');
  });

  it('should submit the username and password', () => {
    // GIVEN
    const onSubmitMock = jest.fn();
    const password = 'test';
    const username = 'test@gmail.com';

    // WHEN
    const loginFormWrapper = mountWithProviders(<LoginForm onSubmit={onSubmitMock}/>);

    const passwordInput = loginFormWrapper.find('[data-testid="password-input"]');
    const usernameInput = loginFormWrapper.find('[data-testid="username-input"]');
    const loginSubmitButton = loginFormWrapper.find('[data-testid="login-submit-button"]');

    passwordInput.simulate('change', { target: { value: password } });
    usernameInput.simulate('change', { target: { value: username } });
    loginSubmitButton.simulate('submit');

    // THEN
    expect(onSubmitMock).toHaveBeenCalledWith(
      {username, password},
      expect.any(Function),
      expect.any(Object),
    );
    // expect(onSubmitMock.mock.calls[0][0]).toEqual({username, password});
  });

  it('should show a errorMessage message if passed one', () => {
    // GIVEN
    const onSubmitMock = jest.fn();
    const errorMsg = 'errorMessage message';

    // WHEN
    const loginFormWrapper = mountWithProviders(<LoginForm errorMessage={errorMsg} onSubmit={onSubmitMock}/>);
    const errorMessageWrapper = loginFormWrapper.find('[data-testid="error-message"]');

    // THEN
    expect(errorMessageWrapper.text()).toEqual(errorMsg);
  });
});
