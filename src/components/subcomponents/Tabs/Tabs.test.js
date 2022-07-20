import React from 'react';
import { render, screen } from '@testing-library/react';
import Tabs from './Tabs';

it('renders', () => {
  render(<Tabs />);

  expect(screen.getByRole('list')).not.toBeNull();
});
