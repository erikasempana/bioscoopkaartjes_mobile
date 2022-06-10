import React from 'react';
import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import styles from './styles';

import logo from '../../assets/logo/logobiosscoopkaartjes.png';

export default function ConfirmResetPassword(props) {
  const handleConfirmEmail = () => {
    props.navigation.navigate('ResetPassword');
  };

  return (
    // <View style={{backgroundColor: 'blue'}}

    <View style={styles.wrapper}>
      <View style={styles.container}>
        <Image style={styles.logo} source={logo} />
        <Text style={styles.signin}>Forgot Password</Text>
        <Text style={styles.tagline}>
          we'll send a link to your email shortly
        </Text>
        <View style={styles.inputwrapper}>
          <View>
            <Text style={styles.inputlabel}>Email</Text>
            <TextInput style={styles.input1} placeholder="Write your email" />
          </View>

          <TouchableOpacity style={styles.button} onPress={handleConfirmEmail}>
            <Text style={styles.buttontext}>Send</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* <Button title="Login" color="red" onPress={handleLogin} /> */}
    </View>
  );
}
