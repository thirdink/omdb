import { render, screen } from '@testing-library/react';
import App from './App';

test('renders search for something', () => {
  render(<App />);
  const linkElement = screen.getByText(/search for something/i);
  expect(linkElement).toBeInTheDocument();
});
