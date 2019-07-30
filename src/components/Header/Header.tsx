import React from 'react';

interface Props {
  text: string;
}

export const Header: React.FunctionComponent<Props> = (props) => {
  return (
    <div>
      <h1>{props.text}</h1>
    </div>
  );
};
