import React from 'react';
import { render, screen } from '@testing-library/react';
import InAppPage from './InAppPage';

it('renders', () => {
  render(<InAppPage />);

  expect(screen.getByRole('heading', { level: 1 })).not.toBeNull();
});
