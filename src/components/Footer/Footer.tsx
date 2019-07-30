import React from 'react';

interface Props {
  text: string;
}

export const Footer: React.FunctionComponent<Props> = ({text}) => {
  return (<div><h3>{text}</h3></div>);
};
