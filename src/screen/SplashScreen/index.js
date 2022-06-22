import React, {useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import SScreen from '../../assets/logo/splashScreen.png';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SplashScreen(props) {
  useEffect(() => {
    checkToken();
  }, []);

  const checkToken = async () => {
    const token = await AsyncStorage.getItem('token');

    setTimeout(() => {
      if (token) {
        props.navigation.replace('AppScreen');
      } else {
        props.navigation.replace('AuthScreen');
      }
    }, 1000);
  };

  return (
    <View
      style={{
        display: 'flex',
        backgroundColour: '#DEDEDE',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '40%',
      }}>
      <Image
        source={SScreen}
        style={{width: '70%', height: '70%', resizeMode: 'contain'}}
      />
    </View>
  );
}
