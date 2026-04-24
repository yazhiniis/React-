import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hello coders heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/hello coders/i);
  expect(headingElement).toBeInTheDocument();
});

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
