import  React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { withTranslation } from 'react-i18next';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

function NavigationMenu(props: any) {

  return (
    <NavigationContainer>
        <Tab.Navigator>
            {props.views && props.views.map((v: any, i: number) => {
                return (
                    <Tab.Screen
                        name={v.name}
                        component={v.view}
                        key={i}
                        options={{
                            title: props.t(v.title),
                            headerShown: false,
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

