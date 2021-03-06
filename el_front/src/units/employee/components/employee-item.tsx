import * as React from 'react';
import autobind from 'autobind-decorator';
import * as moment from 'moment';

import './table.scss';

import { Employee } from '../interfaces';
import { Action } from '../../../common/components/action';

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
        <span className='employee-item__name col'>
          {`${item.firstName} ${item.lastName}`}
        </span>
        <span className='employee-item__jobs col'>
          {jobsValue}
        </span>
        <span className='employee-item__employment-date col'>
          {moment(item.employmentDate).format('YYYY/MM/DD hh:mm')}
        </span>
        <span className='employee-item__rate col'>
          {`${item.rate}$`}
        </span>
        <span className='employee-item__action col'>
          <Action text='Delete' onClick={this.onDelete} />
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