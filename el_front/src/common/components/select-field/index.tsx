import * as React from 'react';
import { WrappedFieldProps } from 'redux-form';

import './index.scss';

interface SelectFieldProps {
  label?: string;
  multiple?: boolean;
}

interface Props extends SelectFieldProps, WrappedFieldProps { }

export const SelectField: React.SFC<Props> = (props): React.ReactElement<Props> => {
  const {
    label,
    input,
    multiple,
    meta: { error, touched },
  } = props;
  
  return (
    <div className='select-field'>
      {
        label && <label>{label}</label>
      }
      <select {...input} multiple={multiple}>
        {props.children}
      </select>
      {
        touched && error ? <span className='select-field__error'>{error}</span> : null
      }
    </div>
  );
};
