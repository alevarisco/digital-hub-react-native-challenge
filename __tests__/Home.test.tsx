import { Provider } from 'react-redux';
import { render } from '@testing-library/react-native';
import Home from '../src/ui/pages/home/home';
import { store } from '../src/ui/redux/store';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

describe('Home View', () => {

    const defaultProps = {
        onPress: jest.fn(),
      };

    const HomeView = render(
        <Provider store={store}>
            <NavigationContainer>
                <Home />
            </NavigationContainer>
        </Provider>
    );

    it('renders correctly home', () => {
        const { getByTestId } = HomeView;
        // Verifica el contenedor
        expect(getByTestId('home-view')).toBeTruthy();
    });

    // it('onpress renders correctly home', () => {
    //     const { getByTestId } = HomeView;
    //     expect(getByTestId('home-view')).toBeTruthy();
    //     const onPress1 = getByTestId('home-view-click-1');
    //     const fire = fireEvent.press(onPress1);
    //     // expect(defaultProps.onPress).toHaveBeenCalled();
    //     // const coord2 = getByTestId('content-value-1').children;
    //     // expect(Number(coord1) && (Number(coord1) > 0 || Number(coord1) < 0)).toBe(true);
    //     // expect(Number(coord2) && (Number(coord2) > 0 || Number(coord2) < 0)).toBe(true);
    // });
});
