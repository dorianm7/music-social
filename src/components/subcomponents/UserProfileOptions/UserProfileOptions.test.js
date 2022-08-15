import React from 'react';
import { render, screen } from '@testing-library/react';
import UserProfileOptions from './UserProfileOptions';

it('renders', () => {
  render(<UserProfileOptions />);

  expect(screen.getAllByRole('button')).not.toBeNull();
});
