import React from 'react';
import { WrappedFieldProps } from 'redux-form';
import { withReduxFormField } from '../../helpers/hocs';
import { Input, InputProps } from '../Input';

export const InputField: React.FunctionComponent<InputProps & WrappedFieldProps> = withReduxFormField(Input);
