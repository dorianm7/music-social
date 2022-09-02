import React from 'react';
import { render, screen } from '@testing-library/react';
import Tabs from './Tabs';

it('renders', () => {
  render(<Tabs role="tablist" />);

  expect(screen.getByRole('tablist')).not.toBeNull();
});
