import React from 'react';
import { render, screen } from '@testing-library/react';
import ConfirmEmailModalContents from './ConfirmEmailModalContents';

it('renders', () => {
  render(<ConfirmEmailModalContents />);

  expect(screen.getByRole('button')).not.toBeNull();
});
