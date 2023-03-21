import React, { useState, useRef, useEffect } from 'react';
import './VirtualizedList.sass';
import ListItem from '../ListItem/ListItem';
import VirtualizedListHeader from '../VirtualizedListHeader/VirtualizedListHeader';
import { Product } from '../../models/product/Product';

type VirtualizedListProps = {
  items: Product[];
  itemHeight: number;
};

interface VisibleProduct extends Product {
  position: number;
}

const itemOffset = 400;
export default function VirtualizedList({
  items,
  itemHeight,
}: VirtualizedListProps) {
  const [visibleItems, setVisibleItems] = useState<VisibleProduct[]>(
    items.slice(0, 6).map((item, index) => {
      return { ...item, position: index };
    })
  );
  const [scroll, setScroll] = useState<number>(0);

  const outerContainerRef = useRef<HTMLDivElement>(null);
  const listContainerHeight = items.length * itemHeight;

  function handleScroll() {
    const outerContainer = outerContainerRef.current;
    if (outerContainer !== null) {
      const scrollTop = outerContainer.scrollTop;
      const scrollBottom = scrollTop + outerContainer.clientHeight;
      const startIndex = Math.floor(scrollTop / itemHeight);
      const endIndex = Math.ceil(scrollBottom / itemHeight);
      setVisibleItems(
        items.slice(startIndex, endIndex).map((item, index) => {
          return { ...item, position: startIndex + index };
        })
      );
    }
  }

  function scrollToTop() {
    if (outerContainerRef.current != null)
      outerContainerRef.current.scrollTop = 0;
  }

  useEffect(() => {
    //Scroll to last item on the bottom of the list
    setScroll(items.length * itemHeight - itemOffset);
    if (outerContainerRef.current != null) {
      outerContainerRef.current.scrollTop = scroll;
    }
  }, [items.length]);

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
