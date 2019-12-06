import React from 'react';
import styles from './input.module.css';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  inputType?: string;
  labelName: string;
  containerClass?: string;
}

export const Input: React.FunctionComponent<InputProps> = ({inputType, labelName, id, containerClass, ...props}) => {
  return (
      <div className={styles.field}>
        <label className={styles.label} htmlFor={id}>{labelName}</label>
        <input className={styles.input} {...props} type={inputType} id={id} />
      </div>
    );
};

Input.defaultProps = {
  inputType: 'text',
};
