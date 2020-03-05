import { fireEvent } from '@testing-library/react';
import * as React from 'react';
import { renderWithProviders } from '../../../../helpers/test';
import { LoginForm } from './LoginForm';

describe('LoginForm Component', () => {
  it('should submit the username and password', () => {
    // GIVEN
    const onSubmitMock = jest.fn();
    const password = 'test';
    const username = 'test@gmail.com';

    // WHEN
    const {getByLabelText, getByText} = renderWithProviders(<LoginForm onSubmit={onSubmitMock}/>);

    fireEvent.change(getByLabelText(/Username/i), {target: {value: username}});
    fireEvent.change(getByLabelText(/Password/i), {target: {value: password}});
    fireEvent.click(getByText('Connexion'));

    // THEN
    expect(onSubmitMock).toHaveBeenCalledWith(
      {username, password},
      expect.anything(),
      expect.anything(),
    );
  });

  it('should show a errorMessage message if passed one', () => {
    // GIVEN
    const onSubmitMock = jest.fn();
    const errorMsg = 'errorMessage message';

    // WHEN
    const {getByText} = renderWithProviders(<LoginForm errorMessage={errorMsg} onSubmit={onSubmitMock}/>);

    // THEN
    expect(getByText(errorMsg)).not.toBeNull();
  });
});
