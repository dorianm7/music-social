import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import SignedInNav from '../../components/SignedInNav';

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
        <SignedInNav />
        <SignedInNav navText="Test" />
      </>,
      container,
    );
  });

  const navs = container.querySelectorAll('.signed-in-nav');

  expect(navs[0].querySelector('.signed-in-nav-text').innerHTML).toBe('Nav Text');
  expect(navs[1].querySelector('.signed-in-nav-text').innerHTML).toBe('Test');
});
