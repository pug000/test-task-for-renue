/* eslint-disable react/button-has-type */
import { memo } from 'react';

import styles from './Button.module.scss';

interface ButtonProps {
  id: string;
  type?: 'button' | 'submit' | 'reset';
  children: React.ReactNode;
  disabled?: boolean;
  callback?: () => void;
}

function Button({ id, type, children, disabled, callback }: ButtonProps) {
  return (
    <button
      id={id}
      type={type}
      className={styles.button}
      disabled={disabled}
      onClick={callback}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  type: 'button',
  disabled: false,
  callback: undefined,
};

export default memo(Button);
