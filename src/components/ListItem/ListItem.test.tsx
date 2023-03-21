import { render, screen } from '@testing-library/react';
import ListItem from './ListItem';
import { Product } from '../../models/product/Product';
import React from 'react';

type ListItemProps = {
  height: number;
  position: number;
  item: Product;
};

describe('List Item', () => {
  it('Should render the component correctly', () => {
    const mockProps: ListItemProps = {
      height: 100,
      position: 0,
      item: {
        name: 'Keyboard',
        description: 'It writes',
        price: 132,
        id: 'some-id-123',
      },
    };
    render(<ListItem {...mockProps} />);

    const name = screen.getByText(/Keyboard/i);
    expect(name.textContent).toEqual('Keyboard');
  });
});
