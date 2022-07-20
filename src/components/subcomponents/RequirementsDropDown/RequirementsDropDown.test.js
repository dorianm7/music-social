import React from 'react';
import { render, screen } from '@testing-library/react';
import { RequirementsDropDown } from './RequirementsDropDown';

it('renders', () => {
  render(<RequirementsDropDown />);

  expect(screen.getByRole('button')).not.toBeNull();
});
