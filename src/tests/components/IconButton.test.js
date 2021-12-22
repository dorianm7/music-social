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

it('renders correct height and width', () => {
  const defaultWidth = '20px';
  const defaultHeight = '20px';
  const testWidths = [defaultWidth, '30px', defaultWidth, '30px'];
  const testHeights = [defaultHeight, defaultHeight, '30px', '30px'];
  act(() => {
    render(
      <>
        <IconButton />
        <IconButton iconWidth={testWidths[1]} />
        <IconButton iconHeight={testHeights[2]} />
        <IconButton iconWidth={testWidths[3]} iconHeight={testHeights[3]} />
      </>,
      container,
    );
  });

  const imgEls = container.querySelector('img');
  for (let i = 0; i < imgEls.length; i += 1) {
    expect(imgEls[i].width).toBe(testWidths[i]);
    expect(imgEls[i].height).toBe(testHeights[i]);
  }
});
