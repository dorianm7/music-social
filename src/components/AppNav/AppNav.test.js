import React from 'react';
import { render, screen } from '@testing-library/react';
import AppNav from './AppNav';

it('renders', () => {
  render(<AppNav />);

  expect(screen.getByRole('navigation')).not.toBeNull();
});
