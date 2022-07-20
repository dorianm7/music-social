import React from 'react';
import { render, screen } from '@testing-library/react';
import MusicItem from './MusicItem';

it('renders', () => {
  render(<MusicItem />);

  expect(screen.getByAltText('Default Image')).not.toBeNull();
});
