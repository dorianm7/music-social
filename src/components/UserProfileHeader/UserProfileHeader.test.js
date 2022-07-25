import React from 'react';
import { render, screen } from '@testing-library/react';
import UserProfileHeader from './UserProfileHeader';

it('renders', () => {
  render(<UserProfileHeader />);

  expect(screen.getByAltText('Username')).not.toBeNull();
});
