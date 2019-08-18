import { render } from '@testing-library/react';
import * as React from 'react';
import { Footer } from './Footer';

describe('Footer Component', () => {
  it('should show the text if passed one', () => {
    // GIVEN
    const footerText = 'footer text';
    // WHEN
    const {getByText} = render(<Footer text={footerText}/>);
    // THEN
    expect(getByText(footerText)).not.toBeNull();
  });
});
