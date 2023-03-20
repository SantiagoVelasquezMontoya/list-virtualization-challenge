import App from './App';
import { screen, render } from '@testing-library/react';

describe('App Tests', () => {
  it('Should render the App component', () => {
    const appElement = render(<App />);
    expect(appElement.baseElement).toBeInTheDocument();
  });
});
