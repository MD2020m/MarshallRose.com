import { render, screen, fireEvent } from '@testing-library/react';
import DetailSelectBtn from '../Components/DetailSelectBtn';

describe('DetailSelectBtn', () => {
    
    const detail = 'Embroidery';
    let selectDetailMock;
    let removeDetailMock;
    let customOptions;

    beforeEach(() => {
        selectDetailMock = vi.fn();
        removeDetailMock = vi.fn();
        customOptions = { details: [] };
    });

    test('renders the button with correct text', () => {
        render(<DetailSelectBtn detail={detail} selectDetail={selectDetailMock} 
                removeDetail={removeDetailMock} customOptions={customOptions} />);

        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
        expect(button).toHaveTextContent(detail);
        expect(button).not.toHaveClass('selected');
    });

    test('calls selectDetail when clicked if detail is not selected', () => {
            render(<DetailSelectBtn detail={detail} selectDetail={selectDetailMock} 
                removeDetail={removeDetailMock} customOptions={customOptions} />);

            const button = screen.getByRole('button');
            fireEvent.click(button);

            expect(selectDetailMock).toHaveBeenCalledTimes(1);
            expect(selectDetailMock).toHaveBeenCalledWith(detail);
            expect(removeDetailMock).not.toHaveBeenCalled();
    });

    test('applies seleceted class and calls removeDetail if detail is selected', () => {
        customOptions.details = [detail];

        render(<DetailSelectBtn detail={detail} selectDetail={selectDetailMock} 
            removeDetail={removeDetailMock} customOptions={customOptions} />);

        const button = screen.getByRole('button');

        expect(button).toHaveClass('selected');

        fireEvent.click(button);

        expect(removeDetailMock).toHaveBeenCalledTimes(1);
        expect(removeDetailMock).toHaveBeenCalledWith(detail);
        expect(selectDetailMock).not.toHaveBeenCalled();
    })

})