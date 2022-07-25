import React from 'react';
import { render, screen } from '@testing-library/react';
import SignUpForm from './SignUpForm';

it('renders', () => {
  render(<SignUpForm />);

  expect(screen.getByLabelText('Email')).not.toBeNull();
});
