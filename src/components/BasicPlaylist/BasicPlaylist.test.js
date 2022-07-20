import React from 'react';
import { render, screen } from '@testing-library/react';
import BasicPlaylist from './BasicPlaylist';

it('renders', () => {
  render(<BasicPlaylist />);

  expect(screen.getAllByRole('list')).not.toBeNull();
});
