import React from 'react';
import ListItem from './ListItem';

export default function List({ listTitle, listItems }) {
  return (
    <div className="list">
      <h3 className="list-title">{listTitle}</h3>
      <ul className="list-items">
        {listItems.map((item, index) => {
          return <ListItem key={index} item={item} />;
        })}
      </ul>

      <button className="add-card-btn btn">Add a card</button>
    </div>
  );
}
