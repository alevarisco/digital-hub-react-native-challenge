import { Provider } from 'react-redux';
import { render } from '@testing-library/react-native';
import Home from '../src/ui/pages/home/home';
import { store } from '../src/ui/redux/store';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

describe('Home View', () => {

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

});
