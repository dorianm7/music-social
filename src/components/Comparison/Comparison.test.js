import React from 'react';
import { render, screen } from '@testing-library/react';
import Comparison from './Comparison';

it('renders', () => {
  render(<Comparison />);

  expect(screen.getByText('User1')).not.toBeNull();
});
