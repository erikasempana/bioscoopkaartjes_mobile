import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Feather';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

import Home from '../screen/Home';

import DrawerContent from '../components/DrawerContent';
import Header from '../components/Header';
import ViewAll from '../screen/ViewAll';
import Profile from '../screen/Profile';
import MovieDetail from '../screen/MovieDetail';
import Order from '../screen/Order';
import Payment from '../screen/Payment';
import TicketResult from '../screen/TicketResult';
import OrderHistory from '../screen/OrderHistory';
import HeaderPayment from '../components/HeaderPayment';
import HeaderProfile from '../components/HeaderProfile';
import Counter from '../screen/Counter';
import ListMovie from '../screen/ListMovie';
import MidtransView from '../screen/MidtransView';
import Notification from '../screen/Notification';

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
      <Stack.Screen
        component={Profile}
        name="Profile"
        options={{header: props => <HeaderProfile {...props} />}}
      />
      <Stack.Screen
        component={OrderHistory}
        name="OrderHistory"
        options={{header: props => <HeaderProfile {...props} />}}
      />
      <Stack.Screen
        component={MovieDetail}
        name="MovieDetail"
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={Order}
        name="Order"
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={Payment}
        name="Payment"
        options={{header: props => <HeaderPayment {...props} />}}
      />
      <Stack.Screen
        component={TicketResult}
        name="TicketResult"
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={Counter}
        name="Counter"
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={ListMovie}
        name="ListMovie"
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={MidtransView}
        name="MidtransView"
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
// Hanya untuk Screen Cabang page drawer di page yg sama
function ViewAllNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={ViewAll}
        name="ViewAll"
        options={{headerShown: false}}
      />
      {/* <Stack.Screen
        component={MovieDetail}
        name="MovieDetail"
        options={{headerShown: false}}
      /> */}
    </Stack.Navigator>
  );
}
function ProfileNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={Profile}
        name="Home"
        options={{header: props => <HeaderProfile {...props} />}}
      />
    </Stack.Navigator>
  );
}
function CounterNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={Counter}
        name="Counter"
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
function ListMovieNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={ListMovie}
        name="ListMovie"
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

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
      <Drawer.Screen
        component={ViewAllNavigator}
        name="ViewAllNavigator"
        options={{
          title: 'ViewAll',
          header: props => <Header {...props} />,
          drawerIcon: ({size, color}) => {
            <MaterialIcon name="local-movies" size={size} color={color} />;
          },
        }}
      />
      <Drawer.Screen
        component={ProfileNavigator}
        name="ProfileNavigator"
        options={{
          title: 'Profile',
          header: props => <Header {...props} />,
          drawerIcon: ({size, color}) => {
            <Icon name="user" size={size} color={color} />;
          },
        }}
      />
      <Drawer.Screen
        component={Notification}
        name="Notification"
        options={{
          title: 'Notification',
          header: props => <Header {...props} />,
          drawerIcon: ({size, color}) => {
            <Icon name="bell" size={size} color={color} />;
          },
        }}
      />
      {/* <Drawer.Screen
        component={CounterNavigator}
        name="CounterNavigator"
        options={{
          title: 'Counter',
          header: props => <Header {...props} />,
          drawerIcon: ({size, color}) => {
            <Icon name="user" size={size} color={color} />;
          },
        }}
      /> */}
      {/* <Drawer.Screen
        component={ListMovieNavigator}
        name="ListMovieNavigator"
        options={{
          title: 'ListMovie',
          header: props => <Header {...props} />,
          drawerIcon: ({size, color}) => {
            <Icon name="user" size={size} color={color} />;
          },
        }}
      /> */}
    </Drawer.Navigator>
  );
}
