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
            <ion-icon
              name="checkmark-circle-outline"
              onClick={props.done}
              class="circle-outline"
            ></ion-icon>
            <ion-icon
              name="trash-outline"
              onClick={props.delete.bind(this, index)}
            ></ion-icon>
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
