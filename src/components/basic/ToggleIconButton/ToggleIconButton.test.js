import React from 'react';
import { render, screen } from '@testing-library/react';
import ToggleIconButton from './ToggleIconButton';

it('renders', () => {
  render(<ToggleIconButton />);

  expect(screen.getByRole('button')).not.toBeNull();
});
