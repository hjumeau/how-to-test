import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  inputType?: string;
  labelName: string;
}

export const Input: React.FunctionComponent<InputProps> = ({inputType, labelName, id, ...props}) => {
  return (
      <div>
        <label htmlFor={id}>{labelName}</label>
        <input {...props} type={inputType} id={id} />
      </div>
    );
};

Input.defaultProps = {
  inputType: 'text',
};
