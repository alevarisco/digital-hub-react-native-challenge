import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Table from '../src/ui/components/table/table';


describe('Table Component', () => {
    const defaultProps = {
        headers: [
          { header: 'Name' },
          { header: 'Country' },
          { header: 'Type' },
        ],
        datas: [
          {
            nombre: 'John Doe',
            pais: 'USA',
            tipo: 'Developer',
          },
          {
            nombre: 'Jane Smith',
            pais: 'Canada',
            tipo: 'Designer',
          },
        ],
        onHeaderSelect: jest.fn(),
        onSelect: jest.fn(),
        onPressEdit: jest.fn(),
        onPressDelete: jest.fn(),
        prevPage: jest.fn(),
        nextPage: jest.fn(),
    };

    it('renders correctly with headers and data', () => {
        const { getByText, getAllByText, getByTestId } = render(<Table {...defaultProps} />);

        // Verifica que el contenedor principal se renderice
        expect(getByTestId('table')).toBeTruthy();
        // Verifica los encabezados
        expect(getAllByText(/Name|Country|Type/)).toHaveLength(3);
        // Verifica los datos
        expect(getByText('John Doe')).toBeTruthy();
        expect(getByText('USA')).toBeTruthy();
        expect(getByText('Developer')).toBeTruthy();
        expect(getByText('Jane Smith')).toBeTruthy();
        expect(getByText('Canada')).toBeTruthy();
        expect(getByText('Designer')).toBeTruthy();
        // Verifica los botones de paginación
        expect(getByText('COMPONENTS.TABLE.BTN_PREV')).toBeTruthy();
        expect(getByText('COMPONENTS.TABLE.BTN_NEXT')).toBeTruthy();
      });

    it('calls onHeaderSelect when header is pressed', () => {
        const { getByText } = render(<Table {...defaultProps} />);
        fireEvent.press(getByText('Name'));
        expect(defaultProps.onHeaderSelect).toHaveBeenCalledTimes(1);
        expect(defaultProps.onHeaderSelect).toHaveBeenCalledWith({ header: 'Name' });
    });

    it('calls onSelect when row is pressed', () => {
        const { getByText } = render(<Table {...defaultProps} />);
        fireEvent.press(getByText('John Doe'));
        expect(defaultProps.onSelect).toHaveBeenCalledTimes(1);
        expect(defaultProps.onSelect).toHaveBeenCalledWith(defaultProps.datas[0]);
    });

    it('calls onPressEdit when edit button is pressed', () => {
        const { getByTestId } = render(<Table {...defaultProps} />);
        fireEvent.press(getByTestId('edit-button-0'));
        expect(defaultProps.onPressEdit).toHaveBeenCalledTimes(1);
        expect(defaultProps.onPressEdit).toHaveBeenCalledWith(defaultProps.datas[0]);
    });

    it('calls onPressDelete when delete button is pressed', () => {
        const { getByTestId } = render(<Table {...defaultProps} />);
        fireEvent.press(getByTestId('delete-button-0'));
        expect(defaultProps.onPressDelete).toHaveBeenCalledTimes(1);
        expect(defaultProps.onPressDelete).toHaveBeenCalledWith(defaultProps.datas[0]);
    });

    it('renders headers only when datas is empty', () => {
        const { getAllByText, queryByText } = render(
          <Table {...defaultProps} datas={[]} />
        );
        expect(getAllByText(/Name|Country|Type/)).toHaveLength(3);
        expect(queryByText('John Doe')).toBeNull();
    });

    it('does not fail without headers', () => {
        const { queryByText } = render(<Table {...defaultProps} headers={null} datas={defaultProps.datas} />);
        expect(queryByText('Name')).toBeNull();
    });

    it('calls prevPage and nextPage when buttons are pressed', () => {
        const { getByText } = render(<Table {...defaultProps} />);
        fireEvent.press(getByText('COMPONENTS.TABLE.BTN_PREV'));
        fireEvent.press(getByText('COMPONENTS.TABLE.BTN_NEXT'));
        expect(defaultProps.prevPage).toHaveBeenCalledTimes(1);
        expect(defaultProps.nextPage).toHaveBeenCalledTimes(1);
    });
});
