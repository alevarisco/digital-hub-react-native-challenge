import { render} from '@testing-library/react-native';
import { Provider } from 'react-redux';
import Settings from '../src/ui/pages/settings/settings';
import {  store } from '../src/ui/redux/store';
import React from 'react';


describe('Settings Component', () => {

    const SettingsView = render(
        <Provider store={store}>
            <Settings />
        </Provider>
    );

    it('renders correctly with default state', () => {
        const { getByTestId, getByText } = SettingsView;
        // Verifica el contenedor y el título
        expect(getByTestId('settings-view')).toBeTruthy();
        expect(getByText('SETTINGS.TITLE_PAGE')).toBeTruthy();
        // // Verifica el subtítulo y el interruptor (Switch)
        expect(getByText('SETTINGS.SUBTITLE_PAGE')).toBeTruthy();
        expect(getByTestId('settings-view-switch')).toBeTruthy();
      });
});
