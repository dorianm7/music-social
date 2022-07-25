import React from 'react';
import { render, screen } from '@testing-library/react';
import PercentGauge from './PercentGauge';

it('renders', () => {
  render(<PercentGauge text="50" />);

  expect(screen.getByText('50')).not.toBeNull();
});
