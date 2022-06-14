import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Feather';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

import Home from '../screen/Home';

import DrawerContent from '../components/DrawerContent';
import Header from '../components/Header';
import ViewAll from '../screen/ViewAll';

function HomeNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={Home}
        name="Home"
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={ViewAll}
        name="ViewAll"
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
// Hanya untuk Screen Cabang page drawer di page yg sama
// function ProfileNavigator() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         component={Profile}
//         name="Home"
//         options={{headerShown: false}}
//       />
//     </Stack.Navigator>
//   );
// }

export default function AppNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{drawerPosition: 'right'}}
      drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen
        component={HomeNavigator}
        name="HomeNavigator"
        options={{
          title: 'Home',
          header: props => <Header {...props} />,
          drawerIcon: ({size, color}) => {
            <Icon name="home" size={size} color={color} />;
          },
        }}
      />
      {/* Hanya untuk Screen Cabang page drawer di page yg sama */}
      {/* <Drawer.Screen
        component={ProfileNavigator}
        name="ProfileNavigator"
        options={{
          title: 'Profile',
          drawerIcon: ({size, color}) => {
            <Icon name="user" size={size} color={color} />;
          },
        }}
      /> */}
    </Drawer.Navigator>
  );
}
