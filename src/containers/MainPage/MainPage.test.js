import React from 'react';
import { render, screen } from '@testing-library/react';
import MainPage from './MainPage';

it('renders', () => {
  render(<MainPage />);

  expect(screen.getByRole('heading', { level: 1 })).not.toBeNull();
});
