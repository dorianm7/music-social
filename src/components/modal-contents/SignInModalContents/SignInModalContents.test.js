import React from 'react';
import { render, screen } from '@testing-library/react';
import SignInModalContents from './SignInModalContents';

it('renders', () => {
  render(<SignInModalContents />);

  expect(screen.getAllByRole('button')).not.toBeNull();
});
