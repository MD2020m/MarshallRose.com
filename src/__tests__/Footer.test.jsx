import { render, screen } from '@testing-library/react';
import Footer from '../Components/Footer';

describe('Footer', () => {
    test('renders without crashing', () => {
        render(<Footer storeName='MarshallRose' info='sample info' content='sample content'/>);
    });

    test('displays content correctly', () => {
        render(<Footer storeName='MarshallRose' info='sample info' content='sample content'/>);
        
        expect(screen.getByText('MarshallRose')).toBeInTheDocument();
        expect(screen.getByText('sample info')).toBeInTheDocument();
        expect(screen.getByText('sample content')).toBeInTheDocument();
    })
})