import React from 'react';
import { render, screen } from '@testing-library/react';
import CompareLibraryPage from './CompareLibaryPage';

it('renders', () => {
  render(<CompareLibraryPage />);

  expect(screen.getByRole('heading', { level: 1 })).not.toBeNull();
});
