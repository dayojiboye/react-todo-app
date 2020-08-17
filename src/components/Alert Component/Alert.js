import React from 'react';
import './Alert.css';

const Alert = (props) => {
  let style = ['alert'];
  let alertText = null;

  if (props.showalert && props.type === 'caution') {
    style.push('caution');
    alertText = 'PLEASE ADD AN ITEM!';
  } else if (props.showalert && props.type === 'success') {
    style.push('success');
    alertText = 'ITEM ADDED SUCCESSFULLY';
  } else if (props.showalert && props.type === 'delete') {
    style.push('success');
    alertText = 'ITEM DELETED!';
  }

  let alertbox = (
    <div className={style.join(' ')}>
      <p>{alertText}</p>
    </div>
  );

  return alertbox;
};

export default Alert;
