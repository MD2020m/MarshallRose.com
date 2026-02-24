import {render, screen } from '@testing-library/react';
import ProductCard from '../Components/ProductCard';

describe('ProductCard', () => {
    
    const sampleProduct = {
        id: 0,
        name: 'sample shirt',
        description: 'A good shirt to sample',
        category: 'shirts',
        availableFabrics: {fabrics: ['cotton']},
        availableDetails: {details: ['embroidery']},
        price: 25.00
    };

    test('renders without crashing', () => {
        render(<ProductCard product={sampleProduct} />);
    });

    test('displays information correctly', () => {
        render(<ProductCard product={sampleProduct} />);

        expect(screen.getByText('sample shirt')).toBeInTheDocument();
        expect(screen.getByText('25')).toBeInTheDocument();
    })
})