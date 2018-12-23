import * as React from 'react';
import autobind from 'autobind-decorator';

import './table.scss';

import { Employee } from '../interfaces';

interface EmployeeItemProps {
  item: Employee;
  onDelete: (employeeId: number) => void;
}

export class EmployeeItem extends React.Component<EmployeeItemProps> {
  public render(): React.ReactNode {
    const { item } = this.props;
    const jobsValue = item.jobs ?
      item.jobs.map(job => job.title).join(' & ') : ''; // or use reduce function

    return (
      <div className='employee-item row'>
        <span className='col'>
          {`${item.firstName} ${item.lastName}`}
        </span>
        <span className='col'>
          {jobsValue}
        </span>
        <span className='col'>
          {item.employmentDate}
        </span>
        <span className='col'>
          {`${item.rate}$`}
        </span>
        <span className='col'>
          <span onClick={this.onDelete}>
            Delete
          </span>
        </span>
      </div>
    );
  }

  @autobind
  private onDelete(): void {
    if (this.props.onDelete) {
      this.props.onDelete(this.props.item.id);
    }
  }
}