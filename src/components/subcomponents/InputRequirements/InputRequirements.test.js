import React from 'react';
import { render, screen } from '@testing-library/react';
import InputRequirements from './InputRequirements';

it('renders', () => {
  render(<InputRequirements showRequirements />);

  expect(screen.getByRole('button')).not.toBeNull();
});
