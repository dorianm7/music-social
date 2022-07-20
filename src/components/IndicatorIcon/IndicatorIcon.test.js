import React from 'react';
import { render, screen } from '@testing-library/react';
import IndicatorIcon from './IndicatorIcon';

it('renders', () => {
  render(<IndicatorIcon />);

  expect(screen.getByRole('button')).not.toBeNull();
});
