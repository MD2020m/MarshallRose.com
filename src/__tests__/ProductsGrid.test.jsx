import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ProductsGrid from '../Components/ProductsGrid';
import { WishlistProvider } from '../Contexts/WishlistContext';

describe('ProductsGrid', () => {
    const products = [
        {
            productId: 0,
            name: 'sample shirt',
            descriptions: 'a shirt for sampling',
            category: 'shirts'
        },
        {
            productId: 1,
            name: 'sample shorts',
            description: 'perfect shorts for sampling',
            category: 'shorts'
        },
        {
            productId: 2,
            name: 'sample pants',
            description: 'pants for the test',
            category: 'pants'
        }
    ];

    test('renders without crashing', () => {
        render(
            <MemoryRouter>
                <WishlistProvider>
                    <ProductsGrid products={products} />
                </WishlistProvider>
            </MemoryRouter>
        );
    });

    test('displays content correctly', () => {
        render(
            <MemoryRouter>
                <WishlistProvider>
                    <ProductsGrid products={products} />
                </WishlistProvider>
            </MemoryRouter>
        );

        expect(screen.getByText('sample shirt')).toBeInTheDocument();
        expect(screen.getByText('sample shorts')).toBeInTheDocument();
        expect(screen.getByText('sample pants')).toBeInTheDocument();
    });
});