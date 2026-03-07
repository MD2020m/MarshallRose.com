import { render, screen, fireEvent } from '@testing-library/react';
import FabricSelectBtn from '../Components/FabricSelectBtn';

describe('FabricSelectBtn', () => {

    const fabric = 'Cotton';
    let selectFabricMock;
    let customOptions;

    beforeEach(() => {
        selectFabricMock = vi.fn();
        customOptions = { fabric: null };
    });

    test('renders button with correct text', () => {
        render(<FabricSelectBtn fabric={fabric} selectFabric={selectFabricMock} customOptions={customOptions} />);

        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
        expect(button).toHaveTextContent(fabric);
        expect(button).not.toHaveClass('selected');
    });

    test('calls selectFabric when clicked', () => {
        render(<FabricSelectBtn fabric={fabric} selectFabric={selectFabricMock} customOptions={customOptions} />);

        const button = screen.getByRole('button');
        fireEvent.click(button);

        expect(selectFabricMock).toHaveBeenCalledTimes(1);
        expect(selectFabricMock).toHaveBeenCalledWith(fabric);
    });

    test('applies selected class when fabric is selected', () => {
        customOptions.fabric = fabric;

        render(<FabricSelectBtn fabric={fabric} selectFabric={selectFabricMock} customOptions={customOptions} />);

        const button = screen.getByRole('button');
        expect(button).toHaveClass('selected');
    });
});