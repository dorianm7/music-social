import React from 'react';
import { render, screen } from '@testing-library/react';
import SignInForm from './SignInForm';

it('renders', () => {
  render(<SignInForm />);

  expect(screen.getByLabelText('Email')).not.toBeNull();
});
