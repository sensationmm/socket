import React from 'react';

import Input from '@somo/pda-components-base-input/src';

interface IInputNumber {
  id: string;
  label?: string;
  handleChange: (value: string) => void;
  handleKeyPress?: () => void;
  value?: string | number;
  validate: () => void;
  handleFocus?: (e: React.FocusEvent<any>) => void;
  readOnly?: boolean;
  note?: string;
  error?: string;
  min?: number;
  max?: number;
  hidden?: boolean;
  placeholder?: string;
}

const InputNumber: React.FC<IInputNumber> = (props) => {
  return <Input data-test="component-input-number" type={'number'} {...props} />;
};

export default InputNumber;
