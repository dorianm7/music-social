import React from 'react';
import { render, screen } from '@testing-library/react';
import SignUpModalContents from './SignUpModalContents';

it('renders', () => {
  render(<SignUpModalContents />);

  expect(screen.getAllByRole('button')).not.toBeNull();
});
