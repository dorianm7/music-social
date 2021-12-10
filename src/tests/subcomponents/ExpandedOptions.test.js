import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import ExpandedOptions from '../../components/subcomponents/ExpandedOptions';

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

it('renders correct number of options', () => {
  act(() => {
    render(
      <>
        <ExpandedOptions />
        <ExpandedOptions options={['One']} />
        <ExpandedOptions options={[
          'One',
          <ul>
            <li>
              Two
              <p>i</p>
            </li>
            <li>i</li>
          </ul>]}
        />
      </>,
      container,
    );
  });

  const expandedOptionsAr = container.querySelectorAll('.expanded-options');

  expect(expandedOptionsAr[0].children.length).toBe(3);
  expect(expandedOptionsAr[1].children.length).toBe(1);
  expect(expandedOptionsAr[2].children.length).toBe(2);
});
