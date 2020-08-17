import React, { Fragment } from 'react';

const DeleteItem = (props) => {
  return (
    <Fragment>
      <h3>Do you want to delete item?</h3>
      <div className="modal-action">
        <button className="cancel-btn" onClick={props.cancel}>
          Cancel
        </button>
        <button className="delete-btn" onClick={props.delete}>
          Delete
        </button>
      </div>
    </Fragment>
  );
};

export default DeleteItem;
