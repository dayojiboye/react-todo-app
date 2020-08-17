import React from 'react';

const Backdrop = (props) => {
  let style = ['backdrop'];

  if (props.showmodal) {
    style.push('show');
  }

  return <div className={style.join(' ')} onClick={props.hide}></div>;
};

export default Backdrop;
