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
import DataDetail from './ui/pages/dataList/dataDetail';
import DataForm from './ui/pages/dataList/dataForm';
import Settings from './ui/pages/settings/settings';
import Geolocation from './ui/pages/geolocalization/geolocalization';

import { Provider } from 'react-redux';
import {  store } from './ui/redux/store';

export default function App() {

  const views = [
    {
      id: 0,
      title: 'HOME.TAB_TITLE',
      name: 'Home',
      iconUnselected: IconHome,
      iconSelected: IconHomeSelected,
      view: Home,
      show: true,
    },
    {
      id: 1,
      title: 'DATA_LIST.TAB_TITLE',
      name: 'DataList',
      iconUnselected: IconUsers,
      iconSelected: IconUsersSelected,
      view: DataList,
      show: true,
    },
    {
      id: 2,
      title: 'GEOLOCATION.TAB_TITLE',
      name: 'Geolocation',
      iconUnselected: IconGeolocation,
      iconSelected: IconGeolocationSelected,
      view: Geolocation,
      show: true,
    },
    {
      id: 3,
      title: 'SETTINGS.TAB_TITLE',
      name: 'Settings',
      iconUnselected: IconSettings,
      iconSelected: IconSettingsSelected,
      view: Settings,
      show: true,
    },
    {
      id: 4,
      title: 'DATA_DETAIL.TAB_TITLE',
      name: 'Detail',
      iconUnselected: IconSettings,
      iconSelected: IconSettingsSelected,
      view: DataDetail,
      show: false,
    },
    {
      id: 5,
      title: 'DATA_ADD.TAB_TITLE',
      name: 'Form',
      iconUnselected: IconSettings,
      iconSelected: IconSettingsSelected,
      view: DataForm,
      show: false,
    },
  ];

  return (
    <Provider store={store}>
      <NavigationMenu views={views} />
    </Provider>
  );
}
