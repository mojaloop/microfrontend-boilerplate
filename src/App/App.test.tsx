import React from 'react';
import { render } from 'test-utils';
import App from './App';

test('renders the menu', () => {
  const { container } = render(<App />);
  const tabs = container.querySelectorAll('.rc-tabs__tab');
  expect(Array.from(tabs)).not.toHaveLength(0);
});
