import {cleanup, render} from '@testing-library/react';
import React from 'react';
import { Button } from './Button';

describe('Button Component', () => {
  afterEach(cleanup);

  it('should have type=button by default', () => {
    // WHEN
    const {getByText} = render(<Button>Connection</Button>);
    // THEN
    expect(getByText('Connection').getAttribute('type')).toEqual('button');
  });

  it('should show the type if passed one', () => {
    // GIVEN
    const type = 'submit';
    // WHEN
    const {getByText} = render(<Button type={type}>Connection</Button>);
    // THEN
    expect(getByText('Connection').getAttribute('type')).toEqual(type);
  });

  it('should show the className if passed one', () => {
    // GIVEN
    const className = 'passedClassName';
    // WHEN
    const {getByText} = render(<Button className={className}>Connection</Button>);
    // THEN
    expect(getByText('Connection').classList.contains('passedClassName')).toEqual(true);
  });

  it('should show the secondary className if secondary variant is passed', () => {
    // WHEN
    const {getByText} = render(<Button variant='secondary'>Connection</Button>);
    // THEN
    expect(getByText('Connection').classList.contains('secondary')).toEqual(true);
  });

  it('should be disabled', () => {
    // WHEN
    const {getByText} = render(<Button disabled={true}>Connection</Button>);
    // THEN
    expect(getByText('Connection').classList.contains('isDisabled')).toEqual(true);
    // because disabled attribute has no value, it's equal "" (empty string)
    // getAttribute('something') returns null when nothing was found
    expect(getByText('Connection').getAttribute('disabled')).not.toBeNull();
  });

  it('should be full width', () => {
    // WHEN
    const {getByText} = render(<Button fullWidth={true}>Connection</Button>);
    // THEN
    expect(getByText('Connection').classList.contains('full-width')).toEqual(true);
  });
});
