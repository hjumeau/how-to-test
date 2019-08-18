import { cleanup, fireEvent, render } from '@testing-library/react';
import * as React from 'react';
import { Login } from './Login';

describe('Login Scene', () => {
  afterEach(cleanup);

  it('should show the title if passed one', () => {
    // GIVEN
    const title = 'Title';
    const onSubmitMock = jest.fn();

    // WHEN
    const {getByText} = render(<Login title={title} onSubmit={onSubmitMock}/>);

    // THEN
    expect(getByText(title)).not.toBeNull();
  });

  it('should show a error message if passed one', () => {
    // GIVEN
    const title = 'Title';
    const onSubmitMock = jest.fn();
    const errorMsg = 'error message';

    // WHEN
    const {getByText} = render(<Login title={title} loginError={errorMsg} onSubmit={onSubmitMock}/>);

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
    const {getByLabelText, getByText} = render(<Login title={title} onSubmit={onSubmitMock}/>);

    fireEvent.change(getByLabelText(/Username/i), {target: {value: username}});
    fireEvent.change(getByLabelText(/Password/i), {target: {value: password}});
    fireEvent.click(getByText('Connexion'));

    // THEN
    expect(onSubmitMock).toHaveBeenCalledWith({username, password});
  });
});
