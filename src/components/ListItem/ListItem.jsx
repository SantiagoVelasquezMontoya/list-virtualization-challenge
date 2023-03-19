import React from 'react';
import './ListItem.sass';

export default function ListItem({ height, position, item }) {
  return (
    <li
      key={item}
      className='list-item'
      style={{ height: height, top: position * height }}
    >
      <h4 className='name col'>{item}</h4>
      <h4 className='desc col'>{item}</h4>
      <h4 className='price col'>{item}</h4>
    </li>
  );
}
