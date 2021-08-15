import React from 'react';
import { render } from '@testing-library/react';

import { App } from './App';

const setup = () => render(<App />);

describe('App test', () => {
  test('snapshot', () => {
    const { asFragment } = setup();

    expect(asFragment()).toMatchSnapshot();
  });

  test('content', () => {
    const { getByText } = setup();

    expect(getByText('React App')).not.toBeNull();
  });
});
