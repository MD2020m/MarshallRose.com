import { render, screen, fireEvent } from '@testing-library/react';
import AdminPage from '../Pages/AdminPage';

vi.mock('../Contexts/AuthContext', () => ({
    useAuth: vi.fn()
}));

vi.mock('react-router-dom', () => ({
    Navigate: ({ to }) => <div data-testid="navigate">Redirect to {to}</div>
}));

vi.mock('../Components/DeleteBtn', () => ({
    default: ({ product }) => <div data-testid="delete-btn">{product.name}</div>
}));



import { useAuth } from '../Contexts/AuthContext';
import { createProduct } from '../../api-service';
import { MemoryRouter } from 'react-router';



describe('AdminPage', () => {
    let products;

    beforeEach(() => {
        vi.clearAllMocks();

        products = [
            { productId: 1, name: 'sample shirt' },
            { productId: 2, name: 'sample pants' }
        ];
    });

    test('redirects to home if user is not admin', () => {
        useAuth.mockReturnValue({
            hasRole: () => false
        });

        render(
            <MemoryRouter>
                <AdminPage products={products} />
            </MemoryRouter>);

        const redirect = screen.getByTestId('navigate');
        expect(redirect).toBeInTheDocument();
        expect(redirect).toHaveTextContent('Redirect to /');
    });

    test('renders admin dashboard if use is admin', () => {
        useAuth.mockReturnValue({
            hasRole: () => true
        });

        render(
            <MemoryRouter>
                <AdminPage products={products} />
            </MemoryRouter>
        );

        expect(screen.getByText('Admin Dashboard')).toBeInTheDocument();
    });

    test('renders all products with DeleteBtn', () => {
        useAuth.mockReturnValue({
            hasRole: () => true
        });

        render(
            <MemoryRouter>
                <AdminPage products={products} />
            </MemoryRouter>
        );

        const deleteBtns = screen.getAllByTestId('delete-btn');
        expect(deleteBtns).toHaveLength(products.length);

        expect(deleteBtns[0]).toHaveTextContent('sample shirt');
        expect(deleteBtns[1]).toHaveTextContent('sample pants');
    });

    test('updates form inputs correctly', () => {
        useAuth.mockReturnValue({
            hasRole: () => true
        });

        render(
            <MemoryRouter>
                <AdminPage products={products} />
            </MemoryRouter>);

        const nameInput = screen.getByLabelText('Name');
        const descriptionInput = screen.getByLabelText('Description');
        const categoryInput = screen.getByLabelText('Category');
        const priceInput = screen.getByLabelText('Price');

        fireEvent.change(nameInput, {target: {value: 'New shirt'}});
        fireEvent.change(descriptionInput, {target: {value: 'a new shirt perfect for tests'}});
        fireEvent.change(categoryInput, {target: {value: 'test'}});
        fireEvent.change(priceInput, {target: {value: 50}});

        expect(nameInput.value).toBe('New shirt');
        expect(descriptionInput.value).toBe('a new shirt perfect for tests');
        expect(categoryInput.value).toBe('test');
        expect(priceInput.value).toBe('50');
    });

})