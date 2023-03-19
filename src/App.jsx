import './App.css';
import VirtualizedList from './components/VirtualizedList/VirtualizedList';

function App() {
  const items = Array.from({ length: 1000 }).map((_, i) => `Person ${i}`);
  return (
    <div className='App'>
      <h1>List Virtualization</h1>
      <VirtualizedList items={items} itemHeight={35} />
    </div>
  );
}

export default App;
