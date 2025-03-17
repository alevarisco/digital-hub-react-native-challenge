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
    const pressButton = getByTestId('Button');
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

  // it('renders correctly when disabled', () => {
  //   const { getByText } = render(<Button {...defaultProps} disabled={true} style="default" />);

  //   expect(getByText('Click Me')).toBeTruthy();
  //   expect(getByText('Click Me').parent.props.disabled).toBe(true);
  // });

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

//   it('matches snapshot with default style', () => {
//     let tree;
//     act(() => {
//       tree = render(<Button {...defaultProps} style="default" />).toJSON();
//     });

//     expect(tree).toMatchSnapshot();
//   });

//   it('matches snapshot with outline style', () => {
//     let tree;
//     act(() => {
//       tree = render(<Button {...defaultProps} style="outline" />).toJSON();
//     });

//     expect(tree).toMatchSnapshot();
//   });

  // it('matches snapshot when disabled', () => {
  //   let tree;
  //   act(() => {
  //     tree = render(<Button {...defaultProps} disabled={true}  />).toJSON();
  //   });

  //   expect(tree).toMatchSnapshot();
  // });
});
