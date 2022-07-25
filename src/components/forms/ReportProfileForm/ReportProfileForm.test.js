import React from 'react';
import { render, screen } from '@testing-library/react';
import ReportProfileForm from './ReportProfileForm';

it('renders', () => {
  render(<ReportProfileForm />);

  expect(screen.getAllByRole('button')).not.toBeNull();
});
