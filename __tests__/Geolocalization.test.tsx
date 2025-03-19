import { Provider } from 'react-redux';
import { render} from '@testing-library/react-native';
import Geolocalization from '../src/ui/pages/geolocalization/geolocalization';
import { store } from '../src/ui/redux/store';
import React from 'react';

describe('Geolocalization View', () => {

    const GeolocalizationView = render(
        <Provider store={store}>
            <Geolocalization />
        </Provider>
    );

    it('renders with localization coords', () => {
        const { getByTestId } = GeolocalizationView;
        // Verifica el contenedor y el título
        expect(getByTestId('geo-view')).toBeTruthy();
        expect(getByTestId('content-value-0')).toBeTruthy();
        const coord1 = getByTestId('content-value-0').children;
        const coord2 = getByTestId('content-value-1').children;
        expect(Number(coord1) && (Number(coord1) > 0 || Number(coord1) < 0)).toBe(true);
        expect(Number(coord2) && (Number(coord2) > 0 || Number(coord2) < 0)).toBe(true);
    });
});
