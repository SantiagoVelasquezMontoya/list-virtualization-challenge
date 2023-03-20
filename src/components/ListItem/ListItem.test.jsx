import { render, screen } from '@testing-library/react';
import ListItem from './ListItem';

describe('Should multiply', () => {
  it('Should render the component correctly', () => {
    const mockProps = {
      height: 100,
      position: 0,
      item: {
        name: 'Keyboard',
        description: 'It writes',
        price: 132,
      },
    };
    render(<ListItem {...mockProps} />);

    const name = screen.getByText(/Keyboard/i);
    expect(name.textContent).toEqual('Keyboard');
  });
});
