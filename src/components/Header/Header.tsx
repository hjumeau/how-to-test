import React from 'react';

interface HeaderProps {
  text: string;
}

export const Header: React.FunctionComponent<HeaderProps> = (props) => {
  return (
    <div>
      <h1>{props.text}</h1>
    </div>
  );
};
