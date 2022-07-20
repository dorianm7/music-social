import React from 'react';
import { render, screen } from '@testing-library/react';
import CollaborativePlaylistPageContents from './CollaborativePlaylistPageContents';

it('renders', () => {
  render(<CollaborativePlaylistPageContents />);

  expect(screen.getByRole('heading', { level: 2 })).not.toBeNull();
});
