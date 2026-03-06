import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from '../Components/Header';
import { WishlistProvider } from '../Contexts/WishlistContext';
import { AuthProvider } from '../Contexts/AuthContext';

describe('Header', () => {
    test('renders without crashing', () => {
        render(
            <MemoryRouter>
                <WishlistProvider>
                    <AuthProvider>
                        <Header storeName='Marshall Rose' headerMessage='sample'/>
                    </AuthProvider>
                </WishlistProvider>
            </MemoryRouter>
        );
    });

    test('displays content correctly', () => {
        render(
            <MemoryRouter>
                <WishlistProvider>
                    <AuthProvider>
                        <Header storeName='Marshall Rose' headerMessage='sample'/>
                    </AuthProvider>
                </WishlistProvider>
            </MemoryRouter>
        );

        expect(screen.getByText('Marshall Rose')).toBeInTheDocument();
        expect(screen.getByText('sample')).toBeInTheDocument();
        expect(screen.getByText('About')).toBeInTheDocument();
        expect(screen.getByText('Products')).toBeInTheDocument();
        expect(screen.getByText('Home')).toBeInTheDocument();
    });
});