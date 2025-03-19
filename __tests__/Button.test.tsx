import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Button from '../src/ui/components/button/button';

jest.mock('react-i18next', () => ({
  withTranslation: () => (Component: any) => (props: any) => (
    <Component {...props} t={(key: any) => key} />
  ),
}));

describe('Button Component', () => {
  const defaultProps = {
    title: 'Click Me',
    onPress: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('calls onPress function when the button is clicked', () => {
    const { getByTestId } = render(<Button onPress={defaultProps.onPress}/>);
    const pressButton = getByTestId('button');
    fireEvent.press(pressButton);
    expect(defaultProps.onPress).toHaveBeenCalled();
  });

  it('renders correctly with outline style', () => {
    const { getByText } = render(<Button {...defaultProps} style="outline" />);

    expect(getByText('Click Me')).toBeTruthy();
  });

  it('renders correctly with noline style', () => {
    const { getByText } = render(<Button {...defaultProps} style="noline" />);

    expect(getByText('Click Me')).toBeTruthy();
  });

  it('calls onPress when pressed', () => {
    const onPressMock = jest.fn();
    const { getByText } = render(<Button {...defaultProps} onPress={onPressMock} style="default" />);

    fireEvent.press(getByText('Click Me'));
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });

  it('does not call onPress when disabled', () => {
    const onPressMock = jest.fn();
    const { getByText } = render(
      <Button {...defaultProps} onPress={onPressMock} disabled={true} style="default" />
    );

    fireEvent.press(getByText('Click Me'));
    expect(onPressMock).not.toHaveBeenCalled();
  });

});
