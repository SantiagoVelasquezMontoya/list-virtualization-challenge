import React from 'react';
import './ListItem.sass';

export default function ListItem({ height, position, item }) {
  return (
    <li
      className='list-item'
      style={{ height: height, top: position * height }}
    >
      <h4 className='name col'>{item.name}</h4>
      <h4 className='price col'>{item.description}</h4>
      <h4 className='desc col'>{item.price}</h4>
    </li>
  );
}
