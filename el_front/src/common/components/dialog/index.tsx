import * as React from 'react';
import { Dispatch, Action } from 'redux';
import { connect } from 'react-redux';
import autobind from 'autobind-decorator';

import './index.scss';

import { ReduxState } from '../../interfaces';
import { CommonActions } from '../../redux';
import { Modal } from '../modal';
import { Button } from '../button';

interface ReduxProps {
  isOpen: boolean;
}

interface ReduxActions {
  closeDialog: () => void;
}

interface OwnProps {
  dialogName: string;
  title?: string;
  okText?: string;
  closeByOk?: boolean;
  onOkClick?: () => void;
  onCancelClick?: () => void;
}

interface Props extends OwnProps, ReduxProps, ReduxActions {

}

class DialogComponent extends React.Component<Props> {
  public static defaultProps: Partial<OwnProps> = {
    closeByOk: true,
  };

  public render(): React.ReactNode {
    return (
      <Modal className='dialog-modal'>
        {
          this.props.isOpen ?
          <div className='dialog__backdrop' onClick={this.props.closeDialog}>
            <div className='dialog' onClick={this.onContentClick}>
              <div className='dialog__header'>
                <span className='dialog__title'>
                  {this.props.title ? this.props.title : 'Dialog'}
                </span>
                <span className='dialog__close-action' onClick={this.props.closeDialog}>
                  <span>×</span>
                </span>
              </div>
              <div className='dialog__content'>
                {this.props.children}
              </div>
              <div className='dialog__action'>
                <Button
                  text={this.props.okText ? this.props.okText : 'Ok'}
                  className='dialog__ok-action'
                  onClick={this.onOkClick}
                />
                <Button
                  text='Cancel'
                  className='dialog__cancel-action'
                  onClick={this.onCancelClick}
                />
              </div>
            </div>
          </div> : null
        }
      </Modal>
    );
  }

  @autobind
  private onContentClick(event: React.MouseEvent<HTMLDivElement>): void {
    event.stopPropagation();
  }

  @autobind
  private onOkClick(_event: React.MouseEvent<HTMLButtonElement>): void {
    if (this.props.closeByOk) {
      this.props.closeDialog();
    }

    if (this.props.onOkClick) {
      this.props.onOkClick();
    }
  }

  @autobind
  private onCancelClick(_event: React.MouseEvent<HTMLButtonElement>): void {
    this.props.closeDialog();

    if (this.props.onCancelClick) {
      this.props.onCancelClick();
    }
  }
}

const mapStateToProps = (state: ReduxState, props: OwnProps): ReduxProps => {
  return {
    isOpen: state.common.dialog[props.dialogName],
  };
};

const mapDispatchToProps = (dispatch: Dispatch<Action>, props: OwnProps): ReduxActions => {
  return {
    closeDialog: () => dispatch(CommonActions.closeDialog(props.dialogName)),
  };
};

export const Dialog = connect(
    mapStateToProps,
    mapDispatchToProps
)(DialogComponent);
