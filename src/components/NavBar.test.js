import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Navbar from './Navbar';

test('renders the navbar title "My Recipe"', () => {
  render(<Navbar search={() => {}} />);

  // Check that the title "My Recipe" is rendered correctly
  const title = screen.getByTestId('my-recipe');
  expect(title).toBeInTheDocument();
  expect(title).toHaveTextContent('My Recipe');
});

test('renders the search form', () => {
  render(<Navbar search={() => {}} />);

  // Check that the form is rendered correctly
  const form = screen.getByTestId('form-search');
  expect(form).toBeInTheDocument();

  // Check that the input field and button are present
  const input = screen.getByPlaceholderText('Recipe Name');
  expect(input).toBeInTheDocument();

  const button = screen.getByRole('button', { name: /search/i });
  expect(button).toBeInTheDocument();
});
