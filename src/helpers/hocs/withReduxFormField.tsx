import React from 'react';
import { WrappedFieldProps } from 'redux-form';

export const withReduxFormField = <P extends object>(
  Component: React.ComponentType<P>,
): React.FC<P & WrappedFieldProps> => ({
  input,
  meta: {touched, error, warning},
  ...props
}: WrappedFieldProps) => (
  <>
  <Component {...input} {...(props as P)} />
  {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
  </>
);
