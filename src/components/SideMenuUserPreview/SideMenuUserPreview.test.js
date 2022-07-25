import React from 'react';
import { render, screen } from '@testing-library/react';
import SideMenuUserPreview from './SideMenuUserPreview';

it('renders', () => {
  render(<SideMenuUserPreview />);

  expect(screen.getByAltText('Username')).not.toBeNull();
});
