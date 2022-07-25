import React from 'react';
import { render, screen } from '@testing-library/react';
import UserImages from './UserImages';

it('renders', () => {
  render(<UserImages />);

  expect(screen.getByRole('list')).not.toBeNull();
});
