import {cleanup, render} from '@testing-library/react';
import React from 'react';
import { Input } from './Input';

describe('Input Component', () => {
  afterEach(cleanup);

  it('should show the label', () => {
    // GIVEN
    const id = 'username';
    const labelName = 'e-mail';
    // WHEN
    const {getByText} = render(<Input id={id} labelName={labelName} />);
    // THEN
    expect(getByText(labelName)).not.toBeNull();
  });

  it('should have type=text by default', () => {
    // GIVEN
    const id = 'username';
    const labelName = 'e-mail';
    // WHEN
    const {getByLabelText} = render(<Input id={id} labelName={labelName} />);
    // THEN
    expect(getByLabelText(labelName).getAttribute('type')).toEqual('text');
  });

  it('should have a id', () => {
    // GIVEN
    const id = 'username';
    const labelName = 'e-mail';
    // WHEN
    const {getByLabelText} = render(<Input id={id} labelName={labelName} />);
    // THEN
    expect(getByLabelText(labelName).getAttribute('id')).toEqual(id);
  });
});
