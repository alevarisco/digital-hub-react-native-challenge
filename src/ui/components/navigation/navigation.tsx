import * as React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { withTranslation } from 'react-i18next';

const Tab = createBottomTabNavigator();

function NavigationMenu(props: any) {
  return (
    <NavigationContainer>
        <Tab.Navigator>
        {props.views && props.views.map((v: any, i: number) => {
            return (
                <Tab.Screen
                    name={props.t(v.title)}
                    component={

                        v.view
                    }
                    key={i}
                    options={{
                        tabBarItemStyle: {
                            display: !v.show ? 'none' : 'flex',
                        },
                        tabBarLabelStyle: {
                            color: '#8a8a89',
                        },
                        tabBarIcon: ({ color, focused }) => (
                        focused ?
                        <Image source={v.iconSelected} />
                        :
                        <Image source={v.iconUnselected} />
                        ),
                    }}
                />
            );
        })}
    </Tab.Navigator>
  </NavigationContainer>

  );
}

export default withTranslation('ns')(NavigationMenu);

