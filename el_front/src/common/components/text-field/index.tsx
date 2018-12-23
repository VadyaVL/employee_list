import * as React from 'react';
import { WrappedFieldProps } from 'redux-form';

import './index.scss';

interface TextFieldProps {
  label?: string;
  type?: string;
}

interface Props extends TextFieldProps, WrappedFieldProps { }

export const TextField: React.SFC<Props> = (props): React.ReactElement<Props> => {
  const {
    label,
    input,
    type,
    meta: { error, touched },
  } = props;
  
  return (
    <div className='text-field'>
      {
        label && <label>{label}:</label>
      }
      <input {...input} type={type} />
      {
        touched && error ? <span className='text-field__error'>{error}</span> : null
      }
    </div>
  );
};
