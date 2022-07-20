import React from 'react';
import { render, screen } from '@testing-library/react';
import TextInput from './TextInput';

it('renders', () => {
  render(<TextInput />);

  expect(screen.getByRole('textbox')).not.toBeNull();
});
