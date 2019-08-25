import React from 'react';
import styles from './header.module.css';

interface HeaderProps {
  text: string;
}

export const Header: React.FunctionComponent<HeaderProps> = ({text}) => {
  return (
    <div>
      <h1 className={styles.title}>{text}</h1>
    </div>
  );
};
