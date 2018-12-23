import * as React from 'react';

import './table.scss';

export const EmployeeHeader: React.StatelessComponent = () => {
  return (
    <div className='employee-item row header'>
      <span className='employee-item__name col'>Name</span>
      <span className='employee-item__jobs col'>Job title</span>
      <span className='employee-item__employment-date col'>Employment Date</span>
      <span className='employee-item__rate col'>Rate</span>
      <span className='employee-item__action col'>Action</span>
    </div>
  );
};