import React from 'react';
import { render, screen } from '@testing-library/react';
import PlaylistHeader from './PlaylistHeader';

it('renders', () => {
  render(<PlaylistHeader />);

  expect(screen.getByRole('heading')).not.toBeNull();
});
