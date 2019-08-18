import { fireEvent, render } from '@testing-library/react';
import * as React from 'react';
import { LoginForm } from './LoginForm';

describe('LoginForm Component', () => {
  it('should submit the username and password', () => {
    // GIVEN
    const onSubmitMock = jest.fn();
    const password = 'test';
    const username = 'test@gmail.com';

    // WHEN
    const {getByLabelText, getByText} = render(<LoginForm onSubmit={onSubmitMock}/>);

    fireEvent.change(getByLabelText(/Username/i), {target: {value: username}});
    fireEvent.change(getByLabelText(/Password/i), {target: {value: password}});
    fireEvent.click(getByText('Connexion'));

    // THEN
    expect(onSubmitMock).toHaveBeenCalledWith({username, password});
  });

  it('should show a error message if passed one', () => {
    // GIVEN
    const onSubmitMock = jest.fn();
    const errorMsg = 'error message';

    // WHEN
    const {getByText} = render(<LoginForm error={errorMsg} onSubmit={onSubmitMock}/>);

    // THEN
    expect(getByText(errorMsg)).not.toBeNull();
  });
});
