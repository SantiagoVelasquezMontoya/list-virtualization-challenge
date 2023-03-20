import { screen, render } from '@testing-library/react';
import VirtualizedListHeader from './VirtualizedListHeader';

const mockProps = ['name', 'description', 'price'];
describe('Should run the test', () => {
  it('Should render the component', () => {
    const component = render(<VirtualizedListHeader columns={mockProps} />);

    expect(component.baseElement).toBeInTheDocument();
  });

  it('Should render the name and description correctly', () => {
    render(<VirtualizedListHeader columns={mockProps} />);

    const nameElement = screen.getByText(/Name/);
    const descElement = screen.getByText(/Description/);

    expect(nameElement.textContent).toEqual('Name');
    expect(descElement.textContent).toEqual('Description');
  });
});
