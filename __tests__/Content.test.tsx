import React from 'react';
import { render } from '@testing-library/react-native';
import Content from '../src/ui/components/content/content';


describe('Content Component', () => {
    const defaultProps = {
        text: [
            { title: 'Item 1', value: 'Value 1' },
            { title: 'Item 2', value: null },
            { title: 'Item 3' },
        ],
    };

    it('renders correctly with text array', () => {
        const { getByTestId, getAllByText } = render(<Content {...defaultProps} />);

        // Verifica que el contenedor principal se renderice
        expect(getByTestId('content')).toBeTruthy();
        // Verifica que los títulos se rendericen
        expect(getAllByText(/Item/)).toHaveLength(3); // Item 1, Item 2, Item 3
        // Verifica que los valores se rendericen (incluyendo 'Loading...' para null/undefined)
        expect(getAllByText(/Value|Loading/)).toHaveLength(3);
    });

    it('renders fallback value when value is null or undefined', () => {
        const { getAllByText } = render(<Content {...defaultProps} />);

        // Verifica que 'Loading...' se muestre para Item 2 y Item 3 (dos instancias)
        const loadingElements = getAllByText('Loading...');
        expect(loadingElements).toHaveLength(2); // Esperamos dos elementos con 'Loading...'
    });

    it('does not render anything when text is not provided', () => {
        const { queryByTestId } = render(<Content text={null} />);
        expect(queryByTestId('content')).toBeNull();
    });

    it('renders with dynamic text array', () => {
        const dynamicProps = {
            text: [
                { title: 'Dynamic 1', value: 'Dynamic Value 1' },
                { title: 'Dynamic 2', value: 'Dynamic Value 2' },
            ],
        };
        const { getAllByText } = render(<Content {...dynamicProps} />);
        expect(getAllByText(/Dynamic/)).toHaveLength(4);
    });

    it('renders nothing with empty text array', () => {
        const { queryByTestId, getByText } = render(<Content text={[]} />);
        expect(queryByTestId('content')).toBeTruthy(); // El contenedor sigue existiendo
        expect(() => getByText('Item 1')).toThrow(); // No hay elementos
    });

});
