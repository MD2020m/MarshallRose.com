import { render, screen } from '@testing-library/react';
import ProductCard from '../Components/ProductCard';
import { WishlistProvider } from '../Contexts/WishlistContext';
import { MemoryRouter } from 'react-router-dom';

describe('ProductCard', () => {
    
    const sampleProduct = {
        productId: 0,
        name: 'sample shirt',
        description: 'A good shirt to sample',
        category: 'shirts',
        availableFabrics: {fabrics: ['cotton']},
        availableDetails: {details: ['embroidery']},
        price: 25.00
    };

    test('renders without crashing', () => {
        render(
            <MemoryRouter>
                <WishlistProvider>
                    <ProductCard product={sampleProduct} />
                </WishlistProvider>
            </MemoryRouter>);
    }); 

    test('displays information correctly', () => {
        render(
            <MemoryRouter>
                <WishlistProvider>
                    <ProductCard product={sampleProduct} />
                </WishlistProvider>
            </MemoryRouter>);

        expect(screen.getByText('sample shirt')).toBeInTheDocument();
        expect(screen.getByText('25')).toBeInTheDocument();
    })
})