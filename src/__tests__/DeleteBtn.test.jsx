import { render, screen, fireEvent } from '@testing-library/react';
import DeleteBtn from '../Components/DeleteBtn';

describe('DeleteBtn', () => {

    const mockProduct = {
        productId: 42,
        name: 'sample pants'
    };

    const mockDeleteProduct = vi.fn();

    test('renders delete button', () => {
        render(
            <DeleteBtn product={mockProduct} deleteProduct={mockDeleteProduct} />
        );

        const button = screen.getByRole('button');

        expect(button).toBeInTheDocument();
    });

    test('displays correct button text', () => {
        render(<DeleteBtn product={mockProduct} deleteProduct={mockDeleteProduct} />);

        expect(screen.getByText('Delete')).toBeInTheDocument();
    });

    test('calls deleteProduct with correct productId when clicked', () => {
        render(<DeleteBtn product={mockProduct} deleteProduct={mockDeleteProduct} />);

        const button = screen.getByRole('button');

        fireEvent.click(button);

        expect(mockDeleteProduct).toHaveBeenCalledTimes(1);
        expect(mockDeleteProduct).toHaveBeenCalledWith(mockProduct.productId);

    });
});