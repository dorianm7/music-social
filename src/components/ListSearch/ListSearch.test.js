import React from 'react';
import { render, screen } from '@testing-library/react';
import ListSearch from './ListSearch';

it('renders', () => {
  render(<ListSearch />);

  expect(screen.getByText('Search')).not.toBeNull();
});
