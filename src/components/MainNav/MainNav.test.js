import React from 'react';
import { render, screen } from '@testing-library/react';
import MainNav from './MainNav';

it('renders', () => {
  render(<MainNav />);

  expect(screen.getByRole('navigation')).not.toBeNull();
});
