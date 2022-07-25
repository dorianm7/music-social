import React from 'react';
import { render, screen } from '@testing-library/react';
import SignUpModal from './SignUpModal';

it('renders', () => {
  render(<SignUpModal />);

  expect(screen.getByRole('heading')).not.toBeNull();
});
