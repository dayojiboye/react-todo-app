import React from 'react';
import './modal.css';

const Modal = (props) => {
  let style = ['modal'];

  if (props.showModal) {
    style.push('show');
  }

  return <div className={style.join(' ')}>{props.children}</div>;
};

export default Modal;
