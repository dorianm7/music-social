import React from 'react';
import { render, screen } from '@testing-library/react';
import AnchorButton from './AnchorButton';

it('renders', () => {
  render(<AnchorButton />);

  expect(screen.getByText('Anchor Button')).not.toBeNull();
});
