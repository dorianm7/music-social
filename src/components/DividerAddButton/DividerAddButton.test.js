import React from 'react';
import { render, screen } from '@testing-library/react';
import DividerAddButton from './DividerAddButton';

it('renders', () => {
  render(<DividerAddButton />);

  expect(screen.getByRole('button')).not.toBeNull();
});
