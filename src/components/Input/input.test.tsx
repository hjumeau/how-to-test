import {cleanup, render} from '@testing-library/react';
import React from 'react';
import { Input } from './Input';

describe('Input Component', () => {
  afterEach(cleanup);

  it('should show the label', () => {
    // GIVEN
    const id = 'username';
    const label = 'e-mail';
    // WHEN
    const {getByText} = render(<Input id={id} label={label} />);
    // THEN
    expect(getByText(label)).not.toBeNull();
  });

  it('should have type=text by default', () => {
    // GIVEN
    const id = 'username';
    const label = 'e-mail';
    // WHEN
    const {getByLabelText} = render(<Input id={id} label={label} />);
    // THEN
    expect(getByLabelText(label).getAttribute('type')).toEqual('text');
  });

  it('should have a id', () => {
    // GIVEN
    const id = 'username';
    const label = 'e-mail';
    // WHEN
    const {getByLabelText} = render(<Input id={id} label={label} />);
    // THEN
    expect(getByLabelText(label).getAttribute('id')).toEqual(id);
  });
});
