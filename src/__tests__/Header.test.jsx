import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from '../Components/Header';

describe('Header', () => {
    test('renders without crashing', () => {
        render(
            <MemoryRouter>
                <Header storeName='Marshall Rose' headerMessage='sample'/>
            </MemoryRouter>
        );
    });

    test('displays content correctly', () => {
        render(
            <MemoryRouter>
                <Header storeName='Marshall Rose' headerMessage='sample'/>
            </MemoryRouter>
        );

        expect(screen.getByText('Marshall Rose')).toBeInTheDocument();
        expect(screen.getByText('sample')).toBeInTheDocument();
        expect(screen.getByText('About')).toBeInTheDocument();
        expect(screen.getByText('Products')).toBeInTheDocument();
        expect(screen.getByText('Home')).toBeInTheDocument();
    });
});