import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import AppNav from '../../components/AppNav';

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

it('renders correct nav text', () => {
  act(() => {
    render(
      <>
        <AppNav />
        <AppNav navText="Test" />
      </>,
      container,
    );
  });

  const navs = container.querySelectorAll('.app-nav');

  expect(navs[0].querySelector('.app-nav-text').innerHTML).toBe('Nav Text');
  expect(navs[1].querySelector('.app-nav-text').innerHTML).toBe('Test');
});
