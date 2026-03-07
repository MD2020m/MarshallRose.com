import { render, screen } from '@testing-library/react';
import ProtectedRoute from '../Components/ProtectedRoute';

vi.mock('../Contexts/AuthContext', () => ({
    useAuth: vi.fn()
}));

vi.mock('react-router-dom', () => ({
    Navigate: ({ to }) => <div data-testid="navigate">Redirect to {to}</div>
}));

import { useAuth } from '../Contexts/AuthContext';

describe('ProtectedRoute', () => {
    const childText = 'Protected Content';

    beforeEach(() => {
        vi.clearAllMocks();
    });

    test('renders children if authenticated', () => {
        useAuth.mockReturnValue({ isAuthenticated: true });

        render(<ProtectedRoute>
            <div>{childText}</div>
        </ProtectedRoute>);

        expect(screen.getByText(childText)).toBeInTheDocument();
        expect(screen.queryByTestId('navigate')).toBeNull();
    });

    test('redirects to /login if not authenticated', () => {
        useAuth.mockReturnValue({ isAuthenticated: false });

        render(<ProtectedRoute>
            <div>{childText}</div>
        </ProtectedRoute>);

        const redirect = screen.getByTestId('navigate');
        expect(redirect).toBeInTheDocument();
        expect(redirect).toHaveTextContent('Redirect to /login');

        expectTypeOf(screen.queryByText(childText)).toBeNull();
    })
})