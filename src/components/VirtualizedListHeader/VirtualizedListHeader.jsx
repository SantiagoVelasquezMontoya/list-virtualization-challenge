import React from 'react';
import './VirtualizedListHeader.sass';
import { capitalize } from '../../utils/utils';

export default function VirtualizedListHeader({ columns }) {
  const [name, description, price] = columns;
  return (
    <div className='list-header'>
      <div className='left col'>{capitalize(name)}</div>
      <div className='middle col'>{capitalize(description)}</div>
      <div className='right col'>{capitalize(price)}</div>
    </div>
  );
}
