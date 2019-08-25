import React from 'react';
import styles from './footer.module.css';

interface FooterProps {
  text: string;
}

export const Footer: React.FunctionComponent<FooterProps> = ({text}) => (
  <div>
    <h3 className={styles.title}>{text}</h3>
  </div>
);
