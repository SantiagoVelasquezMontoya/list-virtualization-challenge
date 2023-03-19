import VirtualizedList from './components/VirtualizedList/VirtualizedList';
import generateData from './components/utils/GenerateData';
import './App.sass';

function App() {
  const items = generateData();
  return (
    <div className='App'>
      <header>
        <h1>Virtualized List</h1>
        <button>Add new item</button>
      </header>
      <div className='content'>
        <VirtualizedList items={items} itemHeight={100} />
      </div>
    </div>
  );
}

export default App;
