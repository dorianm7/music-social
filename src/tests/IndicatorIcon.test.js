import React from 'react';
import { render, umountComponentAtNode, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import IndicatorIcon from '../components/IndicatorIcon';

let container = null;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('renders indicator', () => {
  act(() => {
    render(
      <>
        <IndicatorIcon />
        <IndicatorIcon on />
      </>,
      container,
    );
  });

  const icons = container.querySelectorAll('.indicator-icon');

  expect(icons[0].querySelector('.indicator')).toBeNull();
  expect(icons[1].querySelector('.indicator')).not.toBeNull();
});
