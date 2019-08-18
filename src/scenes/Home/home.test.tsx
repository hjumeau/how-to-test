import { render } from '@testing-library/react';
import * as React from 'react';
import { Home } from './Home';

describe('Home Component', () => {
  it('should show a welcome msg with a email if passed one', () => {
    // GIVEN
    const email = 'test@gmail.com';
    const expectedText = `Welcome ${email}`;
    // WHEN
    const {getByText} = render(<Home email={email}/>);
    // THEN
    expect(getByText(expectedText)).not.toBeNull();
  });
});
