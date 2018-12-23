import * as React from 'react';

import './table.scss';

export const EmployeeHeader: React.StatelessComponent = () => {
  return (
    <div className='employee-item row header'>
      <span className='col'>Name</span>
      <span className='col'>Job title</span>
      <span className='col'>Employment Date</span>
      <span className='col'>Rate</span>
      <span className='col'>Action</span>
    </div>
  );
};