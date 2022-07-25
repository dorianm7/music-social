import React from 'react';
import { render, screen } from '@testing-library/react';
import BasicButton from './BasicButton';

it('renders', () => {
  render(<BasicButton />);

  expect(screen.getByRole('button')).not.toBeNull();
});
