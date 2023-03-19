import React, { useState, useRef } from 'react';
import './VirtualizedList.sass';

export default function VirtualizedList({ items, itemHeight }) {
  const [visibleItems, setVisibleItems] = useState(items.slice(0, 6));
  const outerContainerRef = useRef();
  const listContainerHeight = items.length * itemHeight;

  function handleScroll() {
    console.log('Scrolling');
    const scrollTop = outerContainerRef.current.scrollTop;
    const scrollBottom = scrollTop + outerContainerRef.current.clientHeight;

    const startIndex = Math.floor(scrollTop / itemHeight);
    const endIndex = Math.ceil(scrollBottom / itemHeight);
    console.log(startIndex, endIndex);
  }

  return (
    <div
      className='outer-container'
      onScroll={handleScroll}
      ref={outerContainerRef}
    >
      <div className='list-container' style={{ height: listContainerHeight }}>
        {visibleItems.map((item, index) => {
          return (
            <div key={item} className='list-item'>
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
}
