import VirtualizedList from './components/VirtualizedList/VirtualizedList';
import './App.sass';

function App() {
  const items = Array.from({ length: 100000 }).map((_, i) => `Person ${i}`);
  return (
    <div className='App'>
      <h1>Virtualized List</h1>
      <div className='content'>
        <VirtualizedList items={items} itemHeight={100} />
      </div>
    </div>
  );
}

export default App;
