import React from 'react';
import { render, screen } from '@testing-library/react';
import IconButton from './IconButton';

it('renders', () => {
  render(<IconButton />);

  expect(screen.getByRole('button')).not.toBeNull();
});
