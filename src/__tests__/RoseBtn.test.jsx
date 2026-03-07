import { render, screen, fireEvent } from '@testing-library/react';
import RoseBtn from '../Components/RoseBtn';

describe('RoseBtn', () => {
    let selectRosesMock;
    let newReview;

    beforeEach(() => {
        selectRosesMock = vi.fn();
        newReview = { roses: 3 };
    });

    test('renders the button', () => {
        render(<RoseBtn newReview={newReview} selectRose={selectRosesMock} roses={2} />);
        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
    });

    test('applies selected class if newReview.roses >= roses', () => {
        render(<RoseBtn newReview={newReview} selectRoses={selectRosesMock} roses={2} />);
        const button = screen.getByRole('button');
        expect(button).toHaveClass('selected');
    });

    test('does not apply selected class if newReview.roses < roses', () => {
        render(<RoseBtn newReview={newReview} selectRoses={selectRosesMock} roses={4} />);
        const button = screen.getByRole('button');
        expect(button).not.toHaveClass('selected');
    });

    test('clicking the button calls selectRoses with correct nubber', () => {
        render(<RoseBtn newReview={newReview} selectRoses={selectRosesMock} roses={5} />);
        const button = screen.getByRole('button');
        fireEvent.click(button);
        expect(selectRosesMock).toHaveBeenCalledTimes(1);
        expect(selectRosesMock).toHaveBeenCalledWith(5);
    });
})