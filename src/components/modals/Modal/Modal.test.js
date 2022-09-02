import React from 'react';
import { render, screen } from '@testing-library/react';
import Modal from './Modal';

it('renders', () => {
  render(<Modal open />);

  expect(screen.getByRole('heading')).not.toBeNull();
});
