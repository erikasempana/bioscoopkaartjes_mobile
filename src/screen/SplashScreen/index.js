import React, {useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import SScreen from '../../assets/logo/splashScreen.png';

export default function SplashScreen(props) {
  useEffect(() => {
    const token = false;
    setTimeout(() => {
      if (token) {
        props.navigation.navigate('AppScreen');
      } else {
        props.navigation.navigate('AuthScreen');
      }
    }, 1000);
  });

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
