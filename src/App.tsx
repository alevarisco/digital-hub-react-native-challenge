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
import Geolocation from './ui/pages/geolocation/geolocation';

export default function App() {

  const views = [
    {
      id: 0,
      title: 'Home',
      iconUnselected: IconHome,
      iconSelected: IconHomeSelected,
      view: Home,
    },
    {
      id: 1,
      title: 'Data List',
      iconUnselected: IconUsers,
      iconSelected: IconUsersSelected,
      view: DataList,
    },
    {
      id: 2,
      title: 'Geolocation',
      iconUnselected: IconGeolocation,
      iconSelected: IconGeolocationSelected,
      view: Geolocation,
    },
    {
      id: 3,
      title: 'Settings',
      iconUnselected: IconSettings,
      iconSelected: IconSettingsSelected,
      view: Settings,
    },
  ];

  return (
      <NavigationMenu views={views} />
  );
}
