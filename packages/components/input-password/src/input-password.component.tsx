import React from 'react';

import Input from '@somo/pda-components-base-input/src';

interface IInputPassword {
  id: string;
  label?: string;
  onKeyPress?: () => void;
  value: string | number;
  validate?: () => void;
  onChange: (value: string) => void;
  onFocus?: (e: React.FocusEvent<any>) => void;
  note?: string;
  error?: string;
  placeholder?: string;
}

const InputPassword: React.FC<IInputPassword> = (props) => {
  return <Input data-test="component-input-password" type="password" {...props} />;
};

export default InputPassword;
