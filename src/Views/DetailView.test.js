import { render, screen } from '@testing-library/react';
import { Route, MemoryRouter } from 'react-router-dom';
import MonsterDetails from '../Components/MonsterDetails/MonsterDetails';
// import DetailView from './DetailView';

const mockmonsters = {
  category: 'monsters',
  common_locations: ['Hyrule Castle'],
  description:
    'The Sheikah of ancient Hyrule developed this as a weapon to combat Ganon. This stationary model was used for defending important structures. Its offensive power is on par with other Guardians, and omitting the legs kept the manufacturing costs low.',
  drops: [
    'ancient screw',
    'ancient spring',
    'ancient gear',
    'ancient shaft',
    'ancient core',
    'giant ancient core',
  ],
  id: 127,
  image: 'https://botw-compendium.herokuapp.com/api/v2/entry/guardian_turret/image',
  name: 'guardian turret',
};
test('Detail View Page renders specific monster image and details', async () => {
  render(
    <MemoryRouter initialEntries={['/detailview']}>
      <Route path="/detailview">
        <MonsterDetails monsters={mockmonsters} />
      </Route>
      );
    </MemoryRouter>
  );

  const image = await screen.findAllByRole('img');
  expect(image).toHaveLength(1);
});
