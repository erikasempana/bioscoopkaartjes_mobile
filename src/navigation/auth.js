import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import Login from '../screen/Login';
import Register from '../screen/Register';
import ConfirmResetPassword from '../screen/ConfirmResetPassword';
import ResetPassword from '../screen/ResetPassword';

export default function AuthNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={Login}
        name="Login"
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={Register}
        name="Register"
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={ConfirmResetPassword}
        name="ConfirmResetPassword"
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={ResetPassword}
        name="ResetPassword"
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
