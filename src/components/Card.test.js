import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Card from './Card';

const el = {
  image: 'https://via.placeholder.com/150',
  name: 'Test Recipe',
  rating: 4.5,
  tags: ['Tag1', 'Tag2', 'Tag3'],
  id: 1
};

test('renders the recipe image with the correct data-testid and attributes', () => {
  render(<Card el={el} />);
  
  const image = screen.getByTestId(`img-recipe-${el.id}`);
  expect(image).toBeInTheDocument();
  expect(image).toHaveAttribute('src', el.image);
  expect(image).toHaveAttribute('alt', el.name);
});

test('renders the recipe title with the correct data-testid and content', () => {
  render(<Card el={el} />);

  const title = screen.getByTestId(`title-recipe-${el.id}`);
  expect(title).toBeInTheDocument();
  expect(title).toHaveTextContent(el.name);
});

test('renders the recipe rating with the correct data-testid and value', () => {
  render(<Card el={el} />);

  const rating = screen.getByTestId(`rating-recipe-${el.id}`);
  expect(rating).toBeInTheDocument();
  expect(rating).toHaveTextContent(el.rating.toString());
});

test('renders the "READ MORE" link with the correct data-testid and href', () => {
  render(<Card el={el} />);

  const link = screen.getByTestId(`link-recipe-${el.id}`);
  expect(link).toBeInTheDocument();
  expect(link).toHaveAttribute('href', `https://dummyjson.com/recipes/${el.id}`);
  expect(link).toHaveTextContent('READ MORE');
});
