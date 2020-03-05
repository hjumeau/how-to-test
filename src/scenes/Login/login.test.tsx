import { cleanup, fireEvent } from '@testing-library/react';
import * as React from 'react';
import { renderWithProviders } from '../../helpers/test';
import { Login } from './Login';

describe('Login Scene', () => {
  afterEach(cleanup);

  it('should show the title if passed one', () => {
    // GIVEN
    const title = 'Title';
    const onSubmitMock = jest.fn();

    // WHEN
    const {getByText} = renderWithProviders(<Login title={title} onSubmit={onSubmitMock}/>);

    // THEN
    expect(getByText(title)).not.toBeNull();
  });

  it('should show a errorMessage message if passed one', () => {
    // GIVEN
    const title = 'Title';
    const onSubmitMock = jest.fn();
    const errorMsg = 'errorMessage message';

    // WHEN
    const {getByText} = renderWithProviders(<Login title={title} errorMessage={errorMsg} onSubmit={onSubmitMock}/>);

    // THEN
    expect(getByText(errorMsg)).not.toBeNull();
  });

  it('should submit the username and password', () => {
    // GIVEN
    const title = 'Title';
    const onSubmitMock = jest.fn();
    const password = 'test';
    const username = 'test@gmail.com';

    // WHEN
    const {getByLabelText, getByText} = renderWithProviders(<Login title={title} onSubmit={onSubmitMock}/>);

    fireEvent.change(getByLabelText(/Username/i), {target: {value: username}});
    fireEvent.change(getByLabelText(/Password/i), {target: {value: password}});
    fireEvent.click(getByText('Connexion'));

    // THEN
    expect(onSubmitMock).toHaveBeenCalledWith(
      { username, password },
      expect.any(Function),
      expect.any(Object),
    );
  });
});
