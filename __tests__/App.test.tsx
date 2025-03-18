/**
 * @format
 */

import React from 'react';
import App from '../src/App';
import { render } from '@testing-library/react-native';


test('renders correctly', async () => {
  const app = render(<App />).toJSON();
  expect(app).toBeTruthy();
});
