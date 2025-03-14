import React from 'react';
import NavigationMenu from './ui/components/navigation/navigation';

//@ts-ignore
import IconHome from '../assets/images/icon_home.png';
//@ts-ignore
import IconHomeSelected from '../assets/images/icon_home_selected.png';

//@ts-ignore
import IconUsers from '../assets/images/icon_users.png';
//@ts-ignore
import IconUsersSelected from '../assets/images/icon_users_selected.png';

//@ts-ignore
import IconGeolocation from '../assets/images/icon_hand.png';
//@ts-ignore
import IconGeolocationSelected from '../assets/images/icon_hand_selected.png';

//@ts-ignore
import IconSettings from '../assets/images/icon_mi_cuenta.png';
//@ts-ignore
import IconSettingsSelected from '../assets/images/icon_mi_cuenta_selected.png';

import Home from './ui/pages/home/home';
import DataList from './ui/pages/dataList/dataList';
import Settings from './ui/pages/settings/settings';
import Geolocation from './ui/pages/geolocalization/geolocalization';
import { Provider } from 'react-redux';
import {  store } from './ui/redux/store';

export default function App() {

  const views = [
    {
      id: 0,
      title: 'HOME.TAB_TITLE',
      iconUnselected: IconHome,
      iconSelected: IconHomeSelected,
      view: Home,
      show: true,
    },
    {
      id: 1,
      title: 'DATA_LIST.TAB_TITLE',
      iconUnselected: IconUsers,
      iconSelected: IconUsersSelected,
      view: DataList,
      show: true,
    },
    {
      id: 2,
      title: 'GEOLOCATION.TAB_TITLE',
      iconUnselected: IconGeolocation,
      iconSelected: IconGeolocationSelected,
      view: Geolocation,
      show: true,
    },
    {
      id: 3,
      title: 'SETTINGS.TAB_TITLE',
      iconUnselected: IconSettings,
      iconSelected: IconSettingsSelected,
      view: Settings,
      show: true,
    },
    {
      id: 4,
      title: 'Settings Detail',
      iconUnselected: IconSettings,
      iconSelected: IconSettingsSelected,
      view: Settings,
      show: false,
    },
  ];

  return (
    <Provider store={store}>
      <NavigationMenu views={views} />
    </Provider>
  );
}
