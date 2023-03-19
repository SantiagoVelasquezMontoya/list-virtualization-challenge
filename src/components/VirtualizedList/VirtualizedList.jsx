import React, { useState, useRef } from 'react';
import './VirtualizedList.sass';
import ListItem from '../ListItem/ListItem';

export default function VirtualizedList({ items, itemHeight }) {
  const [visibleItems, setVisibleItems] = useState(items.slice(0, 6));
  const outerContainerRef = useRef();
  const listContainerHeight = items.length * itemHeight;

  function handleScroll() {
    const scrollTop = outerContainerRef.current.scrollTop;
    const scrollBottom = scrollTop + outerContainerRef.current.clientHeight;
    const startIndex = Math.floor(scrollTop / itemHeight);
    const endIndex = Math.ceil(scrollBottom / itemHeight);
    setVisibleItems(items.slice(startIndex, endIndex));
  }

  return (
    <div
      className='outer-container'
      onScroll={handleScroll}
      ref={outerContainerRef}
    >
      <ul className='list-container' style={{ height: listContainerHeight }}>
        {visibleItems.map((item) => {
          return (
            <ListItem
              key={item.id}
              item={item}
              position={item.position}
              height={itemHeight}
            />
          );
        })}
      </ul>
    </div>
  );
}
