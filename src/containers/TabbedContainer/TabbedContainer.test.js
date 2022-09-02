import React from 'react';
import { render, screen } from '@testing-library/react';
import TabbedContainer from './TabbedContainer';

it('renders', () => {
  render(<TabbedContainer />);

  expect(screen.getByRole('tablist')).not.toBeNull();
});
