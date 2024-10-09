import { render, screen } from '@testing-library/react';
import ProductBox from './ProductBox';

test('renderiza ProductBox correctamente', () => {
  const product = { id: 1, name: 'Producto 1', image: 'image.jpg' };
  render(<ProductBox product={product} addToCart={() => {}} />);
  const productName = screen.getByText(/Producto 1/i);
  expect(productName).toBeInTheDocument();
});
