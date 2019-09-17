import cx from 'classnames';
import * as React from 'react';

// @ts-ignore
import * as styles from './input.module.css';

interface IInputProps extends React.InputHTMLAttributes<any> {
  isFullWidth?: boolean;
  [attr: string]: any;
}

const InputComponent: React.FC<IInputProps> = ({ isFullWidth, input, ...rest }) => (
  <input className={cx(styles.input, { [styles.fullWidth]: isFullWidth })} {...input} {...rest} />
);

InputComponent.defaultProps = {
  isFullWidth: false,
};

export default InputComponent;
