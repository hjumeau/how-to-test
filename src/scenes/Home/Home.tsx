import React from 'react';

interface HomeProps {
  email: string;
}

export const Home: React.FunctionComponent<HomeProps> = ({email}) => (<div>Welcome {email}</div>);
