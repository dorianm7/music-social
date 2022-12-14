import React from 'react';
import { render, screen } from '@testing-library/react';
import SettingsPageContents from './SettingsPageContents';

it('renders', () => {
  render(<SettingsPageContents />);

  expect(screen.getAllByRole('button')).not.toBeNull();
});
