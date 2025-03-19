
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import TextArea from '../src/ui/components/text-area/text-area';

describe('Text-Area Component', () => {
    const defaultProps = {
      value: 'Initial Value\nSecond Line',
      title: 'Enter text here',
      onChangeText: jest.fn(),
    };

    it('renders correctly with initial value and placeholder', () => {
        const { getByPlaceholderText, getByDisplayValue } = render(
            <TextArea {...defaultProps} />
          );

          // Verifica que el contenedor se renderice (usamos getByDisplayValue para el TextInput)
          expect(getByDisplayValue('Initial Value\nSecond Line')).toBeTruthy();
          // Verifica que el placeholder sea correcto
          expect(getByPlaceholderText('Enter text here')).toBeTruthy();
          // Verifica que sea multiline
          expect(getByDisplayValue('Initial Value\nSecond Line')).toHaveProp('multiline', true);
          // Verifica el número de líneas
          expect(getByDisplayValue('Initial Value\nSecond Line')).toHaveProp('numberOfLines', 5);
    });

    it('calls onChangeText when text changes', () => {
        const onChangeTextMock = jest.fn();
        const { getByDisplayValue } = render(
          <TextArea {...defaultProps} onChangeText={onChangeTextMock} />
        );

        const newText = 'New Line 1\nNew Line 2';
        fireEvent.changeText(getByDisplayValue('Initial Value\nSecond Line'), newText);

        expect(onChangeTextMock).toHaveBeenCalledTimes(1);
        expect(onChangeTextMock).toHaveBeenCalledWith(newText);
      });
});
