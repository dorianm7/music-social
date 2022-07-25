import React from 'react';
import { render, screen } from '@testing-library/react';
import UserPreview from './UserPreview';

it('renders', () => {
  render(<UserPreview />);

  expect(screen.getByAltText('Default Image')).not.toBeNull();
});
