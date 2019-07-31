import React from 'react';

interface FooterProps {
  text: string;
}

export const Footer: React.FunctionComponent<FooterProps> = ({text}) => {
  return (<div><h3>{text}</h3></div>);
};
