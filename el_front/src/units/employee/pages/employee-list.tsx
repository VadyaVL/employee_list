import * as React from 'react';
import { Dispatch, Action } from 'redux';
import { connect } from 'react-redux';
import autobind from 'autobind-decorator';

import './employee-list.scss';

import { MainLayout } from '../../../common/components/main-layout';
import { Employee, Job, EmployeeFormModel } from '../interfaces';
import { Button } from '../../../common/components/button';
import { EmployeeItem, EmployeeHeader } from '../components';
import { ReduxState } from '../../../common/interfaces';
import { RequestStatus } from '../../../common/enum';
import { EmployeeActions } from '../redux';
import { CommonActions } from '../../../common/redux';
import { DialogNames } from '../../../common/consts';
import { ConfirmationDialog } from '../../../common/components/confirmation-dialog';
import { CreateEmployeeDialog } from '../components/create-employee-dialog';

interface ReduxProps {
  employeeList: Employee[];
  jobList: Job[];
  loadStatus: RequestStatus;
}

interface ReduxActions {
  loadEmployeeList: () => void;
  loadJobList: () => void;

  openCreateEmployeeDialog: () => void;
  createEmployeeSubmit: (data: EmployeeFormModel) => void;

  openDeleteEmployeeDialog: () => void;
  deleteEmployee: (employeeId: number) => void;
}

interface Props extends ReduxProps, ReduxActions {

}

interface State {
  savedEmployeeId: number | null;
}

class EmployeeListPageComponent extends React.Component<Props, State> {
  public state: State = {
    savedEmployeeId: null,
  };

  public componentDidMount(): void {
    if (!this.props.employeeList || this.props.employeeList.length === 0) {
      this.props.loadEmployeeList();
    }

    if (!this.props.jobList || this.props.jobList.length === 0) {
      this.props.loadJobList();
    }
  }

  public render(): React.ReactNode {
    const { employeeList, loadStatus } = this.props;

    return (
      <MainLayout isLoading={loadStatus === RequestStatus.Loading}>
        <div className='employee-list-page'>
          <Button
            text='Add new employee'
            onClick={this.props.openCreateEmployeeDialog}
          />
          <div className='employee-list-page__table'>
            <EmployeeHeader />
            {
              employeeList && employeeList.map(item => {
                return (
                  <EmployeeItem
                    key={item.id}
                    item={item}
                    onDelete={this.openDeleteDialog}
                  />
                );
              })
            }
          </div>
        </div>
        <ConfirmationDialog
          title='Delete employee?'
          message='Are you sure you want to delete?'
          onOkClick={this.confirmDelete}
        />
        <CreateEmployeeDialog
          onSubmit={this.props.createEmployeeSubmit}
        />
      </MainLayout>
    );
  }

  @autobind
  private openDeleteDialog(employeeId: number): void {
    this.setState({ savedEmployeeId: employeeId }, this.props.openDeleteEmployeeDialog);
  }

  @autobind
  private confirmDelete(): void {
    this.props.deleteEmployee(this.state.savedEmployeeId);
    this.setState({ savedEmployeeId: null });
  }
}

const mapStateToProps = (state: ReduxState): ReduxProps => {
  return {
    employeeList: state.employee.employeeList,
    jobList: state.employee.jobList,
    loadStatus: state.employee.statuses.loadEmployeeList,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<Action>): ReduxActions => {
  return {
    loadEmployeeList: () => dispatch(EmployeeActions.loadEmployeeList()),
    loadJobList: () => dispatch(EmployeeActions.loadJobList()),

    openCreateEmployeeDialog: () => dispatch(CommonActions.openDialog(DialogNames.CREATE_EMPLOYEE)),
    createEmployeeSubmit: data => dispatch(EmployeeActions.createEmployee(data)),

    openDeleteEmployeeDialog: () => dispatch(CommonActions.openDialog(DialogNames.CONFIRM)),
    deleteEmployee: emplId => dispatch(EmployeeActions.deleteEmployee(emplId)),
  };
};

export const EmployeeListPage = connect(
    mapStateToProps,
    mapDispatchToProps
)(EmployeeListPageComponent);
