import React from 'react';
import './VirtualizedListHeader.sass';
import { capitalize } from '../../utils/utils';

type VirtualizedListHeaderProps = {
  columns: string[];
};

export default function VirtualizedListHeader({
  columns,
}: VirtualizedListHeaderProps) {
  const [name, description, price] = columns;
  return (
    <div className='list-header'>
      <div className='left col'>{capitalize(name)}</div>
      <div className='right col'>{capitalize(price)}</div>
      <div className='middle col'>{capitalize(description)}</div>
    </div>
  );
}
