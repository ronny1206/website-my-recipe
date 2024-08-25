import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Navbar from './Navbar';

test('renders the navbar title "My Recipe"', () => {
  render(<Navbar search={() => {}} />);

  // Check that the title "My Recipe" is rendered correctly
  const title = screen.getByTestId('my-recipe');
  expect(title).toBeInTheDocument();
  expect(title).toHaveTextContent('My Recipe');
});

test('renders the search form and handles input and submit', () => {
  const mockSearch = jest.fn(); // Create a mock function for search
  render(<Navbar search={mockSearch} />);

  // Check that the form is rendered correctly
  const form = screen.getByTestId('form-search');
  expect(form).toBeInTheDocument();

  // Find the input field and button
  const input = screen.getByPlaceholderText('Recipe Name');
  const button = screen.getByRole('button', { name: /search/i });

  // Simulate typing into the input field
  fireEvent.change(input, { target: { value: 'Pizza' } });
  expect(input.value).toBe('Pizza'); // Verify that the input value is updated

  // Simulate form submission by clicking the search button
  fireEvent.click(button);

  // Verify that the mock search function was called with the correct input
  expect(mockSearch).toHaveBeenCalledWith('Pizza');

  // Verify that the input field is cleared after submission
  expect(input.value).toBe('');
});
