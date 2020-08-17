import React from 'react';
import AddItem from '../Add-Item/AddItem';
import ItemsContainer from '../Items-Component/ItemsContainer';

const Main = (props) => {
  return (
    <main>
      <AddItem change={props.change} click={props.clicked} text={props.text} />
      <ItemsContainer
        items={props.items}
        delete={props.delete}
        done={props.done}
      />
    </main>
  );
};

export default Main;
