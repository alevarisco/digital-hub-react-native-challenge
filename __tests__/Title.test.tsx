import React from 'react';
import { render } from '@testing-library/react-native';
import Title from '../src/ui/components/title/title';
import { TouchableOpacity, Text } from 'react-native';

describe('Title Component', () => {
    const defaultProps = {
        title: 'Test Title',
        onPress: jest.fn(),
      };
      const MockButton = () => <TouchableOpacity testID="mock-button"><Text>Mock Button</Text></TouchableOpacity>;

      it('renders correctly with title only', () => {
        const { getByTestId, getByText } = render(<Title {...defaultProps} />);
         // Verifica que el contenedor principal se renderice
        expect(getByTestId('title')).toBeTruthy();
        // Verifica que el título se muestre
        expect(getByText('Test Title')).toBeTruthy();
        // Verifica que no haya botón si no se pasa props.button
        expect(() => getByTestId('mock-button')).toThrow();
      });

      it('renders correctly with title and button', () => {
        const { getByTestId, getByText } = render(
          <Title {...defaultProps} button={<MockButton/>} />
        );

        // Verifica que el contenedor principal se renderice
        expect(getByTestId('title')).toBeTruthy();
        // Verifica que el título se muestre
        expect(getByText('Test Title')).toBeTruthy();
        // Verifica que el botón se renderice
        expect(getByTestId('mock-button')).toBeTruthy();
        expect(getByText('Mock Button')).toBeTruthy();
      });

      it('does not render button when button prop is not provided', () => {
        const { getByText, queryByTestId } = render(<Title {...defaultProps} />);

        // Verifica que el título se muestre
        expect(getByText('Test Title')).toBeTruthy();
        // Verifica que el botón no esté presente
        expect(queryByTestId('mock-button')).toBeNull();
      });

});
