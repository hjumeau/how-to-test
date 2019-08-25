import classNames from 'classnames';
import React from 'react';
import styles from './button.module.css';

export enum Variants {
  Primary = 'primary',
  Secondary = 'secondary',
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variants.Primary | Variants.Secondary;
  className?: string;
  disabled?: boolean;
  block?: boolean;
}

export const Button: React.FunctionComponent<ButtonProps> = ({
  variant,
  block,
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
    block && styles.block,
  );
  return (
    <button {...props} className={classes} disabled={disabled} type={type}/>
  );
};

Button.defaultProps = {
  block: false,
  className: '',
  disabled: false,
  type: 'button',
  variant: Variants.Primary,
};
