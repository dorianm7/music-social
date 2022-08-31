import React from 'react';
import { render, screen } from '@testing-library/react';
import SignInModal from './SignInModal';

it('renders', () => {
  render(<SignInModal open />);

  expect(screen.getByRole('heading')).not.toBeNull();
});
