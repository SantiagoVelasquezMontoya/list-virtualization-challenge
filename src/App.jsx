import VirtualizedList from './components/VirtualizedList/VirtualizedList';
import './App.sass';
import { faker } from '@faker-js/faker';

function App() {
  const items = Array.from({ length: 10000 }).map((_, i) => {
    return {
      name: faker.commerce.product(),
      price: faker.commerce.price(),
      description: faker.commerce.productDescription(),
      id: faker.datatype.uuid(),
      position: i,
    };
  });

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
