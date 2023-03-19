import React from 'react';
import './ListItem.sass';

export default function ListItem({ height, position, item }) {
  return (
    <li
      className='list-item'
      style={{ height: height, top: position * height }}
    >
      <p className='name col'>
        {position}
        <span>{item.name}</span>
      </p>
      <p className='price col'>
        <span>{item.description}</span>
      </p>
      <p className='desc col'>{item.price}</p>
    </li>
  );
}
