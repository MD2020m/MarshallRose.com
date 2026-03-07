import { render, screen, fireEvent } from '@testing-library/react';
import ProductReview from '../Components/ProductReview';
import { postReview } from '../../api-service';

vi.mock('../api/postReview', () => ({
    postReview: vi.fn()
}));

vi.mock('../Components/RoseBtn', () => ({
    default: ({ roses, selectRoses }) => (
        <button data-testid={`rose-btn-${roses}`} onClick={() => selectRoses(roses)}>
            {roses} Roses
        </button>
    )
}));

describe('ProductReview', () => {
    const product = {id: 101, name: 'sample pants' };
    const reviews = [];
    const productReviews = [
        {roses: 5},
        {roses: 3},
        {roses: 4}
    ];

    beforeEach(() => {
        vi.clearAllMocks();
    });

    test('renders headings and submit button', () => {
        render(<ProductReview product={product} reviews={reviews} productReviews={productReviews} />);

        expect(screen.getByText('Leave a Review')).toBeInTheDocument();
        expect(screen.getByText('See what other customers think')).toBeInTheDocument();
        expect(screen.getByText('Submit')).toBeInTheDocument();
    });

    test('displays correct average rating', () => {
        render(<ProductReview product={product} reviews={reviews} productReviews={productReviews} />);
       
        const avgText = screen.getByText(/Average Rating:/i);
        expect(avgText).toHaveTextContent('Average Rating: 4');

    });

    test('displays fallback text if no reviews', () => {
        render(<ProductReview product={product} reviews={reviews} productReviews={[]} />);

        const avgText = screen.getByText(/Average Rating:/i);
        expect(avgText).toHaveTextContent('Average Rating: No reviews yet');        
    });
})