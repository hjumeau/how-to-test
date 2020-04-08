import classNames from 'classnames';
import React from 'react';
import styles from './button.module.css';

export type Variants = 'primary' | 'secondary';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variants;
  className?: string;
  disabled?: boolean;
  fullWidth?: boolean;
}

export const Button: React.FunctionComponent<ButtonProps> = ({
  variant,
  fullWidth,
  type,
  className,
  disabled,
  ...props
}) => {
  const classes = classNames(
    styles.container,
    className,
    variant && styles[variant],
    disabled && 'isDisabled',
    fullWidth && styles['full-width'],
  );
  return (
    <button {...props} className={classes} disabled={disabled} type={type}/>
  );
};

Button.defaultProps = {
  className: '',
  disabled: false,
  fullWidth: false,
  type: 'button',
  variant: 'primary',
};
