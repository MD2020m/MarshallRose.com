import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ProductsGrid from '../Components/ProductsGrid';

describe('ProductsGrid', () => {
    const products = [
        {
            id: 0,
            name: 'sample shirt',
            descriptions: 'a shirt for sampling',
            category: 'shirts'
        },
        {
            id: 1,
            name: 'sample shorts',
            description: 'perfect shorts for sampling',
            category: 'shorts'
        },
        {
            id: 2,
            name: 'sample pants',
            description: 'pants for the test',
            category: 'pants'
        }
    ];

    test('renders without crashing', () => {
        render(
            <MemoryRouter>
                <ProductsGrid products={products} />
            </MemoryRouter>
        );
    });

    test('displays content correctly', () => {
        render(
            <MemoryRouter>
                <ProductsGrid products={products} />
            </MemoryRouter>
        );

        expect(screen.getByText('sample shirt')).toBeInTheDocument();
        expect(screen.getByText('sample shorts')).toBeInTheDocument();
        expect(screen.getByText('sample pants')).toBeInTheDocument();
    });
});