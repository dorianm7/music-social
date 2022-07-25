import React from 'react';
import { render, screen } from '@testing-library/react';
import { ExpandedOptions } from './ExpandedOptions';

it('renders', () => {
  render(<ExpandedOptions />);

  expect(screen.getByRole('list')).not.toBeNull();
});
