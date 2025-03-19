import { Provider } from 'react-redux';
import { render} from '@testing-library/react-native';
import DataList from '../src/ui/pages/dataList/dataList';
import { store } from '../src/ui/redux/store';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

describe('DataList View', () => {

    const DataListView = render(
        <Provider store={store}>
            <NavigationContainer>
                <DataList />
            </NavigationContainer>
        </Provider>
    );

    it('renders correctly dataList', () => {
        const { getByTestId } = DataListView;
        // Verifica el contenedor
        expect(getByTestId('datalist-view')).toBeTruthy();
    });
});
