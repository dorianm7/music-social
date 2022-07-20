import React from 'react';
import { render, screen } from '@testing-library/react';
import Select from './Select';

it('renders', () => {
  render(<Select />);

  expect(screen.getAllByRole('button')).not.toBeNull();
});
