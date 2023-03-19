import VirtualizedList from './components/VirtualizedList/VirtualizedList';
import { generateData, generateEntry } from './utils/utils';
import './App.sass';

function App() {
  const items = generateData(100000);

  function newEntry() {
    items.push(generateEntry(items.length - 1));
    alert('New entry was added to the bottom of the list');
  }
  return (
    <div className='App'>
      <header>
        <h1>Virtualized List</h1>
        <button onClick={newEntry}>Add new item</button>
      </header>
      <VirtualizedList items={items} itemHeight={100} />
    </div>
  );
}

export default App;
