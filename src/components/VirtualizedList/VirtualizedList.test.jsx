import { render, screen } from '@testing-library/react';
import VirtualizedList from './VirtualizedList';
import { userEvent } from '../../../test-utils';
// import userEvent from '@testing-library/user-event';

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

const mockProps = {
  items: [
    {
      name: 'foo 1',
      description: 'description',
      price: 'price',
      id: 'id0',
      position: 0,
    },
    {
      name: 'foo 2',
      description: 'description',
      price: 'price',
      id: 'id8',
      position: 2,
    },
    {
      name: 'foo 3',
      description: 'description',
      price: 'price',
      id: 'id16',
      position: 3,
    },
    {
      name: 'foo 4',
      description: 'description',
      price: 'price',
      id: 'id24',
      position: 4,
    },
    {
      name: 'foo 5',
      description: 'description',
      price: 'price',
      id: 'id32',
      position: 5,
    },
    {
      name: 'foo 6',
      description: 'description',
      price: 'price',
      id: 'id40',
      position: 6,
    },
    {
      name: 'foo 7',
      description: 'description',
      price: 'price',
      id: 'id48',
      position: 7,
    },
    {
      name: 'foo 8',
      description: 'description',
      price: 'price',
      id: 'id56',
      position: 8,
    },
  ],
  itemHeight: 100,
  scrollPosition: 0,
};
