import * as React from 'react';

import { Dialog } from '../dialog';
import { DialogNames } from '../../consts';

interface OwnProps {
  title?: string;
  message?: string;
  onOkClick?: () => void;
}

export const ConfirmationDialog: React.StatelessComponent<OwnProps> = ({
  title,
  message,
  onOkClick,
}) => {
  return (
    <Dialog
      title={title ? title : 'Confirmation'}
      dialogName={DialogNames.CONFIRM}
      onOkClick={onOkClick}
    >
      { message ? message : 'Do you confirm the action?' }
    </Dialog>
  );
}
