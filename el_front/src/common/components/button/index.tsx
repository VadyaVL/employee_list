import * as React from 'react';
import classNames from 'classnames';

import './index.scss';

interface ButtonProps {
  text: string;
  className?: string;
  type?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button: React.StatelessComponent<ButtonProps> = (props) => {
  return (
    <button
      className={classNames('button', props.className)}
      onClick={props.onClick}
      type={props.type}
    >
      {props.text}
    </button>
  );
}