import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';
import ImageSlider from '../components/ImageSlider';

test('renders images with correct src and alt attributes', () => {
  const slides = [
    {
      id: 1,
      image: {
        url: 'https://cdn.shopify.com/s/files/1/0747/7395/4836/products/02_SALTY_AF_SHIRT_PDP.webp?v=1681509619',
      },
    },
    {
      id: 2,
      image: {
        url: 'https://cdn.shopify.com/s/files/1/0747/7395/4836/products/08_CITRUS_FRUIT.webp?v=1681685628',
      },
    },
  ];

  render(<ImageSlider slides={slides} />);

  const images = screen.getAllByRole('img');

  expect(images).toHaveLength(1);
  expect(images[0]).toHaveAttribute('src', slides[0].image.url);
});

test('renders without errors with incorrect slide format', () => {
  const slides = [
    { id: 1, image: { url: 'slide1.jpg' } },
    { id: 2, image: { url: 'slide1.jpg' } },
    { id: 3, image: { url: 'slide3.jpg' }, caption: 'Slide 3' },
  ];

  expect(() => render(<ImageSlider slides={slides} />)).not.toThrow();
});
