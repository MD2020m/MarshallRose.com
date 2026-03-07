import { render, screen } from '@testing-library/react';
import About from '../Pages/About';

describe('About', () => {

    test('renders the correct content', () => {
        render(<About />);
        const header = screen.getByText('Welcome to Marshall Rose');
        const sectionHeaderOne = screen.getByText(/How it Started/i);
        const sectionHeaderTwo = screen.getByText(/How it's Going/i);
        const emphasisHeader = screen.getByText(/So here, you can shop differently/i);

        expect(header).toBeInTheDocument();
        expect(sectionHeaderOne).toBeInTheDocument();
        expect(sectionHeaderTwo).toBeInTheDocument();
        expect(emphasisHeader).toBeInTheDocument(0);
    })
})