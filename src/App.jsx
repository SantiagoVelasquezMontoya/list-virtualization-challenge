import VirtualizedList from './components/VirtualizedList/VirtualizedList';
import { generateData, generateEntry } from './utils/utils';
import { useState, useMemo } from 'react';
import './App.sass';

const itemHeight = 100;
const itemOffset = 400;
function App() {
  const [items, setItems] = useState(useMemo(() => generateData(100000), []));
  const [scroll, setScroll] = useState(0);

  function newEntry() {
    setItems((prev) => [...prev, generateEntry()]);
    setScroll(items.length * itemHeight - itemOffset);
  }

  return (
    <div className='App'>
      <header>
        <h1>Virtualized List</h1>
        <button onClick={newEntry}>Add new item</button>
      </header>
      <VirtualizedList
        items={items}
        itemHeight={itemHeight}
        scrollPosition={scroll}
      />
    </div>
  );
}

export default App;
