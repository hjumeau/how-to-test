import React, { ChangeEvent } from 'react';

interface InputProps {
  id: string;
  value: string;
  inputType: string;
  labelName: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FunctionComponent<InputProps> = ({id, inputType, labelName, onChange, value}) => {
  return (
      <div>
        <label>{labelName}</label>
        <input type={inputType} id={id} onChange={onChange} value={value}/>
      </div>
    );
};
