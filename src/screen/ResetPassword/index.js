import React from 'react';
import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import styles from './styles';

import logo from '../../assets/logo/logobiosscoopkaartjes.png';

export default function ResetPassword(props) {
  const handleReset = () => {
    props.navigation.navigate('Login');
  };

  return (
    // <View style={{backgroundColor: 'blue'}}

    <View style={styles.wrapper}>
      <View style={styles.container}>
        <Image style={styles.logo} source={logo} />
        <Text style={styles.signin}>Set Password</Text>
        <Text style={styles.tagline}>set your new password</Text>
        <View style={styles.inputwrapper}>
          <View>
            <Text style={styles.inputlabel}>Password</Text>
            <TextInput
              secureTextEntry={true}
              style={styles.input1}
              placeholder="Write your password"
            />
          </View>
          <View>
            <Text style={styles.inputlabel}>Confirm Password</Text>
            <TextInput
              secureTextEntry={true}
              style={styles.input1}
              placeholder="Write your confirm password"
            />
          </View>
          <TouchableOpacity style={styles.button} onPress={handleReset}>
            <Text style={styles.buttontext}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* <Button title="Login" color="red" onPress={handleLogin} /> */}
    </View>
  );
}
