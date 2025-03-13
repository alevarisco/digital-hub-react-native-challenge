import * as React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

//@ts-ignore
import IconHome from '../../../../assets/images/icon_home.png';
//@ts-ignore
import IconHomeSelected from '../../../../assets/images/icon_home_selected.png';

const Tab = createBottomTabNavigator();

// function HomeScreen() {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text>Home Screen</Text>
//       </View>
//     );
//   }

//   function SettingsScreen() {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text>Settings Screen</Text>
//       </View>
//     );
//   }

export default function NavigationMenu(props: any) {
  return (
    <NavigationContainer>
        <Tab.Navigator
        // screenOptions={({ route }) => ({
        //   tabBarIcon: ({ focused, color, size }) => {
            // let iconName;

            // if (route.name === 'Home') {
            //   iconName = focused ? 'ios-home' : 'ios-home-outline';
            // } else if (route.name === 'Settings') {
            //   iconName = focused ? 'ios-settings' : 'ios-settings-outline';
            // }

            // // You can return any component that you like here!
            // return <Ionicons name={iconName} size={size} color={color} />;
        //   },
        //   tabBarActiveTintColor: 'tomato',
        //   tabBarInactiveTintColor: 'gray',
        // })}
    >
        {props.views && props.views.map((v: any, i: number) => {
            return (
                <Tab.Screen
                    name={v.title} 
                    component={v.view} 
                    key={i}
                    options={{
                        // unmountOnBlur: true,
                        // title: 'Home',
                        tabBarLabelStyle: {
                        color: '#8a8a89'
                        },
                        tabBarIcon: ({ color, focused }) => (
                        focused ? 
                        <Image source={v.iconSelected} /> 
                        : 
                        <Image source={v.iconUnselected} />
                        ),
                    }}
                />
            )
        })}
        {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
    </Tab.Navigator>
  </NavigationContainer>

  );
}
