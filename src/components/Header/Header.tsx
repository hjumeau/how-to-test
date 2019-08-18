import React from 'react';

interface HeaderProps {
  text: string;
}

export const Header: React.FunctionComponent<HeaderProps> = ({text}) => {
  return (
    <div>
      <h1>{text}</h1>
    </div>
  );
};
