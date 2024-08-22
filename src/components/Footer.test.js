import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Footer from './Footer';

test('renders the footer text', () => {
  render(<Footer />);

  // Check that the footer text is rendered correctly
  const footerText = screen.getByTestId('footer-text');
  expect(footerText).toBeInTheDocument();
  expect(footerText).toHaveTextContent('© 2024 Company, Inc. All rights reserved.');
});

test('renders the Facebook link with the correct href', () => {
  render(<Footer />);

  // Check that the Facebook link is rendered and has the correct href
  const facebookLink = screen.getByTestId('link-facebook');
  expect(facebookLink).toBeInTheDocument();
  expect(facebookLink).toHaveAttribute('href', 'https://facebook.com');
});

test('renders the X (Twitter) link with the correct href', () => {
  render(<Footer />);

  // Check that the X (formerly Twitter) link is rendered and has the correct href
  const xLink = screen.getByTestId('link-x');
  expect(xLink).toBeInTheDocument();
  expect(xLink).toHaveAttribute('href', 'https://x.com');
});

test('renders the Instagram link with the correct href', () => {
  render(<Footer />);

  // Check that the Instagram link is rendered and has the correct href
  const instagramLink = screen.getByTestId('link-instagram');
  expect(instagramLink).toBeInTheDocument();
  expect(instagramLink).toHaveAttribute('href', 'https://instagram.com/');
});
