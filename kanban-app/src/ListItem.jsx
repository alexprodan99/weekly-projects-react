import React from 'react';

export default function ListItem({ item }) {
  const onDragStart = (event, id) => {
    event.dataTransfer.setData('id', id);
  };
  return (
    <li draggable onDragStart={(event) => onDragStart(event, item.id)}>
      {item.title}
    </li>
  );
}
