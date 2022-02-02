import { toBeInTheDocument } from '@testing-library/jest-dom/dist/matchers';
import { render, screen } from '@testing-library/react';
import App from './App';
import HomeView from './Views/HomeView';

test.skip('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
