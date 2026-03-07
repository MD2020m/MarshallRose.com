import { render, screen } from '@testing-library/react';
import CartPage from '../Pages/CartPage';

vi.mock('../Components/ProductsGrid', () => ({
    default: ({ products }) => (
        <div data-testid="products-grid">
            {products.map(p => (
                <span key={p.productId}>{p.name}</span>
            ))}
        </div>
    )
}));

describe('CartPage', () => {
    let cart;
    let cartCount;

    beforeEach(() => {
        cart = [
            {product: {productId: 1, name: 'shirt', price: 100}},
            {product: {productId: 2, name: 'pants', price: 20}}
        ];

        cartCount = cart.length;

    });

    test('renders the shopping cart header', () => {
        render(<CartPage cart={cart} cartCount={cartCount} />);
        expect(screen.getByText('Shopping Cart')).toBeInTheDocument();
    });

    test('shows empty cart message when cartCount is 0', () => {
        render(<CartPage cart={[]} cartCount={0} />);
        expect(screen.getByText('Your cart is empty')).toBeInTheDocument();
    });

    test('displays total price when cart has items', () => {
        render(<CartPage cart={cart} cartCount={cartCount} />);

        expect(screen.getByText(/Total: \$120/i)).toBeInTheDocument();
    });
    
})