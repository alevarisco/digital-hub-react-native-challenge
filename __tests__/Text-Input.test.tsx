
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import TextInput from '../src/ui/components/text-input/text-input';

describe('Text-Input Component', () => {
    const defaultProps = {
        value: 'Initial Value',
        title: 'Enter text',
        onChangeText: jest.fn(),
      };

    it('renders correctly with initial value and placeholder', () => {
        const { getByPlaceholderText, getByDisplayValue } = render(
            <TextInput {...defaultProps} />
          );

          // Verifica que el contenedor se renderice (usamos getByDisplayValue para el TextInput)
          expect(getByDisplayValue('Initial Value')).toBeTruthy();
          // Verifica que el placeholder sea correcto
          expect(getByPlaceholderText('Enter text')).toBeTruthy();
    });

    it('calls onChangeText when text changes', () => {
        const onChangeTextMock = jest.fn();
        const { getByDisplayValue } = render(
          <TextInput {...defaultProps} onChangeText={onChangeTextMock} />
        );

        const newText = 'New Value';
        fireEvent.changeText(getByDisplayValue('Initial Value'), newText);

        expect(onChangeTextMock).toHaveBeenCalledTimes(1);
        expect(onChangeTextMock).toHaveBeenCalledWith(newText);
      });
});
