import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
// import MonsterList from './Components/MonsterList/MonsterList';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/loading/i);
  expect(linkElement).toBeInTheDocument();
});
//passing

test('test monster list goes to monster list', async () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  const linkElement = screen.getByText(/loading/i);
  waitForElementToBeRemoved(linkElement);
  const Link = await screen.findByRole('link');

  expect(Link).toBeInTheDocument();
});
