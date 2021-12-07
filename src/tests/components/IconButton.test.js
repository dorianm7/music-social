import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import IconButton from '../../components/basic/IconButton';

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

it('renders correct default alt-text', () => {
  act(() => {
    render(<IconButton />, container);
  });

  expect(container.querySelector('img').alt).toBe('Default question mark icon');
});

it('renders correct alt-text', () => {
  const testText = 'New alt';
  act(() => {
    render(<IconButton alt={testText} />, container);
  });

  expect(container.querySelector('img').alt).toBe(testText);
});
