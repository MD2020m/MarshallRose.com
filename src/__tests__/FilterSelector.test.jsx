import { render, screen } from '@testing-library/react';
import FilterSelector from '../Components/FilterSelector';

vi.mock('../Components/FilterSelectBtn', () => {
    return {
        default: ({ category }) => <div data-testid="filter-btn">{category}</div>
    };
});

describe('FilterSelector', () => {
    let categories;
    let addFilterMock;
    let removeFilterMock;
    let filter;

    beforeEach(() => {
        categories = ['Shirts', 'Pants', 'Jackets'];
        addFilterMock = vi.fn();
        removeFilterMock = vi.fn();
        filter = [];
    });

    test('renders heading correctly', () => {
        render( <FilterSelector categories={categories} addFilter={addFilterMock}
            removeFilter={removeFilterMock} filter={filter} />
        );

        expect(screen.getByText('Filter by category')).toBeInTheDocument();
    });
    
    test('renders the correct number of FilterSelectBtn components', () => {
        render( <FilterSelector categories={categories} addFilter={addFilterMock}
            removeFilter={removeFilterMock} filter={filter} />
        );

        const buttons = screen.getAllByTestId('filter-btn');
        expect(buttons).toHaveLength(categories.length);
    });

});