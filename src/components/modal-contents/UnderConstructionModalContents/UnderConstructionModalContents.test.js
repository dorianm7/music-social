import React from 'react';
import { render, screen } from '@testing-library/react';
import UnderConstructionModalContents from './UnderConstructionModalContents';

it('renders', () => {
  render(<UnderConstructionModalContents />);

  expect(screen.getByRole('link')).not.toBeNull();
});
