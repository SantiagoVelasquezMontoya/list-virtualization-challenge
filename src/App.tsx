import VirtualizedList from './components/VirtualizedList/VirtualizedList';
import { generateData, generateEntry } from './utils/utils';
import { useState, useMemo } from 'react';
import './App.sass';
import { Product } from './models/product/Product';
import React from 'react';

const itemHeight = 100;
function App() {
  const [items, setItems] = useState<Product[]>(
    useMemo(() => generateData(100000), [])
  );

  function newEntry() {
    setItems((prev) => [...prev, generateEntry()]);
  }

  return (
    <div className='App'>
      <header>
        <h1>Virtualized List</h1>
        <button onClick={newEntry}>Add new item</button>
      </header>
      <VirtualizedList items={items} itemHeight={itemHeight} />
    </div>
  );
}

export default App;
