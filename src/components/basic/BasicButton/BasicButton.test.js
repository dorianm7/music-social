import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import BasicButton from '../../components/basic/BasicButton';

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

it('renders correct default text', () => {
  act(() => {
    render(<BasicButton />, container);
  });

  expect(container.querySelector('.basic-button').innerHTML).toBe('Text');
});

it('renders correct text', () => {
  const testText = 'Test Text';
  act(() => {
    render(<BasicButton text={testText} />, container);
  });

  expect(container.querySelector('.basic-button').innerHTML).toBe(testText);
});
