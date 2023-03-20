import React, { useState, useRef, useEffect } from 'react';
import './VirtualizedList.sass';
import ListItem from '../ListItem/ListItem';
import VirtualizedListHeader from '../VirtualizedListHeader/VirtualizedListHeader';

export default function VirtualizedList({ items, itemHeight, scrollPosition }) {
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

  function scrollToTop() {
    outerContainerRef.current.scrollTop = 0;
  }

  useEffect(() => {
    //Scroll to last item on the bottom of the list
    outerContainerRef.current.scrollTop = scrollPosition;
  }, [scrollPosition]);

  return (
    <>
      <div className='main-container'>
        <VirtualizedListHeader columns={Object.keys(items[0])} />
        <div
          data-testid='outer-container'
          className='outer-container'
          onScroll={handleScroll}
          ref={outerContainerRef}
        >
          <ul
            className='list-container'
            style={{ height: listContainerHeight }}
          >
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
      </div>
      <button onClick={scrollToTop}>Scroll to Top</button>
    </>
  );
}
