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
      <Stack.Screen component={Login} name="Login" />
      <Stack.Screen component={Register} name="Register" />
      <Stack.Screen
        component={ConfirmResetPassword}
        name="ConfirmResetPassword"
      />
      <Stack.Screen component={ResetPassword} name="ResetPassword" />
    </Stack.Navigator>
  );
}
