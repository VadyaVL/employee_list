import * as React from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.getElementById('modal-root');

interface Props {
  className?: string;
}

export class Modal extends React.Component<Props> {
  private el: HTMLDivElement;

  constructor(props: Props) {
    super(props);
    this.el = document.createElement('div');
    this.el.className = this.props.className;
  }

  public componentDidMount() {
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  render() {
    return createPortal(
      this.props.children,
      this.el,
    );
  }
}