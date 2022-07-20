import React from 'react';
import { render, screen } from '@testing-library/react';
import CompareLibraryPageContents from './CompareLibraryPageContents';

it('renders', () => {
  render(<CompareLibraryPageContents />);

  expect(screen.getByText('User 1')).not.toBeNull();
});
