import React, { useEffect } from 'react';
import './ItemsContainer.css';

const ItemsContainer = (props) => {
  let todoItem = null;

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(props.items));
  }, [props.items]);

  if (props.items.length > 0) {
    todoItem = props.items.map((item, index) => {
      return (
        <li key={item.id}>
          <p>{item.item}</p>
          <div>
            <i className="far fa-check-circle fa-lg" onClick={props.done}></i>
            <i
              className="fas fa-trash-alt fa-lg"
              onClick={props.delete.bind(this, index)}
            ></i>
          </div>
        </li>
      );
    });
  }

  return (
    <div className="items-container">
      <ul>{todoItem}</ul>
    </div>
  );
};

export default ItemsContainer;
