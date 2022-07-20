import React from 'react';
import { render, screen } from '@testing-library/react';
import SideMenu from './SideMenu';

it('renders', () => {
  render(<SideMenu />);

  expect(screen.getByRole('navigation')).not.toBeNull();
});
