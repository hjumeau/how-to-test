import { render } from '@testing-library/react';
import * as React from 'react';
import { Header } from './Header';

describe('Header Component', () => {
  it('should show the text if passed one', () => {
    // GIVEN
    const headerText = 'header text';
    // WHEN
    const {getByText} = render(<Header text={headerText}/>);
    // THEN
    expect(getByText(headerText)).not.toBeNull();
  });
});
