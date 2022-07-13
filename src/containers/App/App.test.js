import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import App from './App';

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

it('renders learn react link', () => {
  act(() => {
    render(<App />, container);
  });

  expect(container.querySelector('[data-testid="App-link"]').innerHTML).toBe('Learn React');
});
