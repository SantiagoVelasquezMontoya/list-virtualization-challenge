import VirtualizedList from './components/VirtualizedList/VirtualizedList';
import { generateData } from './utils/utils';
import './App.sass';
import VirtualizedListHeader from './components/VirtualizedListHeader/VirtualizedListHeader';

function App() {
  const items = generateData();
  return (
    <div className='App'>
      <header>
        <h1>Virtualized List</h1>
        <button>Add new item</button>
      </header>
      <div className='content'>
        <VirtualizedListHeader columns={Object.keys(items[0])} />
        <VirtualizedList items={items} itemHeight={100} />
      </div>
    </div>
  );
}

export default App;
