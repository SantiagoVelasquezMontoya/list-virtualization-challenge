import { render, screen } from '@testing-library/react';
import VirtualizedList from './VirtualizedList';
import { Product } from '../../models/product/Product';
import React from 'react';

describe('VirtualizedList', () => {
  it('Should render the list', () => {
    const component = render(<VirtualizedList {...mockProps} />);

    expect(component.baseElement).toBeInTheDocument();
  });

  it('Should include the first item in the list', () => {
    render(<VirtualizedList {...mockProps} />);

    const listItems = screen.getAllByText(/foo/);
    expect(listItems[0].textContent).toEqual('foo 1');
  });

  it('Should not include seventh item in the list', () => {
    render(<VirtualizedList {...mockProps} />);

    const listItems = screen.getAllByText(/foo/);
    expect(listItems[6]).toBeUndefined();
  });
});

type VirtualizedListProps = {
  items: Product[];
  itemHeight: number;
};

const mockProps: VirtualizedListProps = {
  items: [
    {
      name: 'foo 1',
      description: 'description',
      price: 123,
      id: 'id0',
    },
    {
      name: 'foo 2',
      description: 'description',
      price: 43,
      id: 'id8',
    },
    {
      name: 'foo 3',
      description: 'description',
      price: 6544,
      id: 'id16',
    },
    {
      name: 'foo 4',
      description: 'description',
      price: 6564,
      id: 'id24',
    },
    {
      name: 'foo 5',
      description: 'description',
      price: 2564,
      id: 'id32',
    },
    {
      name: 'foo 6',
      description: 'description',
      price: 784,
      id: 'id40',
    },
    {
      name: 'foo 7',
      description: 'description',
      price: 263,
      id: 'id48',
    },
    {
      name: 'foo 8',
      description: 'description',
      price: 755,
      id: 'id56',
    },
  ],
  itemHeight: 100,
};
