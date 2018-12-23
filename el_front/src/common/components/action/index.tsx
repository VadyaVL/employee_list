import * as React from 'react';

import './index.scss';

interface Props {
  text: string;
  onClick: () => void;
}

export const Action: React.StatelessComponent<Props> = (props) => {
  return (
    <span className='action' onClick={props.onClick}>
      {props.text}
    </span>
  );
};
