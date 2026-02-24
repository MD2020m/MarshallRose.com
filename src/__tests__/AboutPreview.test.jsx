import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AboutPreview from '../Components/AboutPreview';

describe('AboutPreview', () => {
    test('renders without crashing', () => {
        render(
            <MemoryRouter>
                <AboutPreview />
            </MemoryRouter>
        );
    });

    test('displays information correctly', () => {
        render(
            <MemoryRouter>
                <AboutPreview />
            </MemoryRouter>
        );

        expect(screen.getByText(
            'Thanks for shopping with us'
        )).toBeInTheDocument();
    })
})