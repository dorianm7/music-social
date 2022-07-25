import React from 'react';
import { render, screen } from '@testing-library/react';
import ExpandableButton from './ExpandableButton';

it('renders', () => {
  render(<ExpandableButton />);

  expect(screen.getAllByRole('button')).not.toBeNull();
});
