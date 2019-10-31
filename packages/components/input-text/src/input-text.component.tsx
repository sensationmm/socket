import React from 'react';

import Input from '@somo/pda-components-base-input/src';

interface IInputText {
  id: string;
  label?: string;
  onChange: (value: string) => void;
  onKeyPress?: () => void;
  value: string | number;
  validate?: () => void;
  onFocus?: (e: React.FocusEvent<any>) => void;
  readOnly?: boolean;
  note?: string;
  error?: string;
  hidden?: boolean;
  placeholder?: string;
}

const InputText: React.FC<IInputText> = (props) => {
  return <Input data-test="component-input-text" type="text" {...props} />;
};

export default InputText;
