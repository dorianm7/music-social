import React from 'react';
import { render, screen } from '@testing-library/react';
import CollaborativePlaylistPage from './CollaborativePlaylistPage';

it('renders', () => {
  render(<CollaborativePlaylistPage />);

  expect(screen.getByRole('heading', { level: 1 })).not.toBeNull();
});
