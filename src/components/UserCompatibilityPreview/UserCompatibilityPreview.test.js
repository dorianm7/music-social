import React from 'react';
import { render, screen } from '@testing-library/react';
import UserCompatibilityPreview from './UserCompatibilityPreview';

it('renders', () => {
  render(<UserCompatibilityPreview />);

  expect(screen.getByText('Username')).not.toBeNull();
});
