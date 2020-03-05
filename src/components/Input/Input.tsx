import React from 'react';
import styles from './input.module.css';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const Input: React.FunctionComponent<InputProps> = ({ label, id, ...props}) => {
  return (
      <div className={styles.field}>
        <label data-testid={`${id}-label`} className={styles.label} htmlFor={id}>{label}</label>
        <input data-testid={`${id}-input`} className={styles.input} {...props} id={id} />
      </div>
    );
};

Input.defaultProps = {
  type: 'text',
};
