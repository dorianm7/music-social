import React from 'react';
import { render, screen } from '@testing-library/react';
import MusicLibrary from './MusicLibrary';
import BasicPlaylist from '../BasicPlaylist/BasicPlaylist';

it('renders', () => {
  render((
    <MusicLibrary>
      <BasicPlaylist />
      <BasicPlaylist />
    </MusicLibrary>
  ));

  expect(screen.getByText('Search')).not.toBeNull();
});
