import React from 'react';
import { render, screen } from '@testing-library/react';
import Toast from './Toast';

it('renders', () => {
  render(<Toast />);

  expect(screen.getByText('Toast message')).not.toBeNull();
});
