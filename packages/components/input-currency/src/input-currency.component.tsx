import React from 'react';

import Input from '@somo/pda-components-base-input/src';

interface IInputCurrency {
  id: string;
  label?: string;
  handleChange: (value: string) => void;
  handleKeyPress?: () => void;
  value: string | number;
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

const InputCurrency: React.FC<IInputCurrency> = (props) => {
  return <Input {...props} data-test="component-input-currency" type="text" wrapperClass="currency" />;
};

export default InputCurrency;
