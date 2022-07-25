import React from 'react';
import { render, screen } from '@testing-library/react';
import AfterReportModalContents from './AfterReportModalContents';

it('renders', () => {
  render(<AfterReportModalContents />);

  expect(screen.getByText('Thank you for submitting your report')).not.toBeNull();
});
