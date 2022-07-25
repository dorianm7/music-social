import React from 'react';
import { render, screen } from '@testing-library/react';
import DropDown from './DropDown';

it('renders', () => {
  render(<DropDown />);

  expect(screen.getByRole('button')).not.toBeNull();
});
