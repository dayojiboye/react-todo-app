import React from 'react';
import './AddItem.css';

const AddItem = (props) => {
  return (
    <div className="input-container">
      <input type="text" onChange={props.change} value={props.text}/>
      <button className="add-button" onClick={props.click}>
        ADD ITEM
      </button>
    </div>
  );
};

export default AddItem;
