import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

it('renders', () => {
  render(<Footer />);

  expect(screen.getByText('Music Social')).not.toBeNull();
});
