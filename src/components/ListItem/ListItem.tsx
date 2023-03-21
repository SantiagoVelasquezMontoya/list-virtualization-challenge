import React from 'react';
import './ListItem.sass';
import { Product } from '../../models/product/Product';

type ListItemProps = {
  height: number;
  position: number;
  item: Product;
};

export default function ListItem({ height, position, item }: ListItemProps) {
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
