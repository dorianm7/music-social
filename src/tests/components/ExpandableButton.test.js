import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import ExpandableButton from '../../components/basic/ExpandableButton';

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

it('Opens and closes expanded options', () => {
  act(() => {
    render(<ExpandableButton />, container);
  });

  let expandedOptions = container.querySelector('.expanded-options');
  expect(expandedOptions).toBeNull();

  const iconElem = container.querySelector('.icon-button');
  iconElem.click();

  expandedOptions = container.querySelector('.expanded-options');
  expect(expandedOptions).not.toBeNull();

  iconElem.click();
  expandedOptions = container.querySelector('.expanded-options');
  expect(expandedOptions).toBeNull();
});
