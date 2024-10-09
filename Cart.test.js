import { render, screen } from '@testing-library/react';
import Cart from './Cart';

test('renderiza Carrito vacío correctamente', () => {
  render(<Cart cartItems={[]} removeFromCart={() => {}} />);
  const emptyCart = screen.getByText(/El carrito está vacío/i);
  expect(emptyCart).toBeInTheDocument();
});
