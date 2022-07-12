import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { ExpandedOptions } from '../../components/subcomponents/ExpandedOptions';

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
              <span>i</span>
            </li>
            <li>i</li>
          </ul>]}
        />
        <ExpandedOptions title="My Title" />
      </>,
      container,
    );
  });

  const expandedOptionsAr = container.querySelectorAll('.expanded-options');

  expect(expandedOptionsAr[0].querySelectorAll('.options').length).toBe(3);
  expect(expandedOptionsAr[1].querySelectorAll('.options').length).toBe(1);
  expect(expandedOptionsAr[2].querySelectorAll('.options').length).toBe(2);
  expect(expandedOptionsAr[3].querySelectorAll('.options').length).toBe(3);
});
