import * as React from 'react';
import { Dispatch, Action } from 'redux';
import { connect } from 'react-redux';
import { reduxForm, Form, InjectedFormProps, Field, submit, reset } from 'redux-form';

import { Dialog } from '../../../common/components/dialog';
import { DialogNames } from '../../../common/consts';
import { EmployeeFormModel, Job } from '../interfaces';
import { FormNames } from '../../../common/consts/form-names';
import { Required } from '../../../common/validators';
import { ReduxState } from '../../../common/interfaces';
import { CommonActions } from '../../../common/redux';
import { TextField } from '../../../common/components/text-field';
import { SelectField } from '../../../common/components/select-field';
import { store } from '../../../store';

interface ReduxProps {
  isOpen: boolean;
  jobs: Job[];
}

interface ReduxActions {
  submit: () => void;
}

interface OwnProps {
}

interface Props extends ReduxProps, ReduxActions, OwnProps, InjectedFormProps<EmployeeFormModel> {
  
}

class CreateEmployeeDialogComponent extends React.Component<Props> {
  public componentDidUpdate(prevProps: Props): void {
    if (prevProps.isOpen && !this.props.isOpen) {
      this.props.reset();
    }
  }

  public render(): React.ReactNode {
    return (
      <Dialog
        title='Create new Employee'
        dialogName={DialogNames.CREATE_EMPLOYEE}
        okText='Create'
        closeByOk={false}
        onOkClick={this.props.submit}
      >
        <Form onSubmit={this.props.handleSubmit}>
          <Field
            name='firstName'
            label='First Name'
            component={TextField}
            validate={Required}
          />
          <Field
            name='lastName'
            label='Last Name'
            component={TextField}
            validate={Required}
          />
          <Field
            name='employmentDate'
            label='Employment Date'
            component={TextField}
            validate={Required}
            type='datetime-local'
          />
          <Field
            name='rate'
            label='Rate'
            component={TextField}
            validate={Required}
            type='number'
          />
          <Field
            name='jobs'
            label='Job title'
            component={SelectField}
            validate={Required}
            multiple={true}
          >
            {
              this.props.jobs.map(job => {
                return (
                  <option key={job.id} value={job.id}>{job.title}</option>
                );
              })
            }
          </Field>
        </Form>
      </Dialog>
    )
  }
}

const mapStateToProps = (state: ReduxState): ReduxProps => {
  return {
    isOpen: state.common.dialog[DialogNames.CREATE_EMPLOYEE],
    jobs: state.employee.jobList,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<Action>): ReduxActions => {
  return {
    submit: () => dispatch(submit(FormNames.CREATE_EMPLOYEE)),
  };
};

const connected = connect<ReduxProps, ReduxActions, Props>(
  mapStateToProps,
  mapDispatchToProps
)(CreateEmployeeDialogComponent);

export const CreateEmployeeDialog = reduxForm<EmployeeFormModel>({
  form: FormNames.CREATE_EMPLOYEE,
  onSubmitSuccess: () => store.dispatch(CommonActions.closeDialog(DialogNames.CREATE_EMPLOYEE)),
})(connected);