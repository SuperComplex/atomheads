import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/The FREE, infinitely Inclusive, & Carbon Neutral NFT/i);
  expect(linkElement).toBeInTheDocument();
});
