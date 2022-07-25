import React from 'react';
import { render, screen } from '@testing-library/react';
import FloatingRemoveButton from './FloatingRemoveButton';

it('renders', () => {
  render(<FloatingRemoveButton />);

  expect(screen.getByRole('button')).not.toBeNull();
});
