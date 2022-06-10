import React from 'react';
import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import styles from './styles';

import logo from '../../assets/logo/logobiosscoopkaartjes.png';

export default function RegisterScreen(props) {
  const handleRegister = () => {
    props.navigation.navigate('Login');
  };

  const handleLogin = () => {
    props.navigation.navigate('Login');
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <Image style={styles.logo} source={logo} />
        <Text style={styles.signin}>Sign Up</Text>
        <Text style={styles.tagline}>Fill your additional details</Text>
        <View style={styles.inputwrapper}>
          <View>
            <Text style={styles.inputlabel}>First Name</Text>
            <TextInput
              style={styles.input1}
              placeholder="Write your first name"
            />
          </View>
          <View>
            <Text style={styles.inputlabel}>Last Name</Text>
            <TextInput
              style={styles.input1}
              placeholder="Write your last name"
            />
          </View>
          <View>
            <Text style={styles.inputlabel}>Phone Number</Text>
            <TextInput
              style={styles.input1}
              placeholder="Write your phone number"
            />
          </View>
          <View>
            <Text style={styles.inputlabel}>Email</Text>
            <TextInput style={styles.input1} placeholder="Write your email" />
          </View>
          <View>
            <Text style={styles.inputlabel2}>Password</Text>
            <TextInput
              style={styles.input2}
              placeholder="Write your password"
            />
          </View>
          <TouchableOpacity style={styles.button} onPress={handleRegister}>
            <Text style={styles.buttontext}>Sign Up</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.reset}>
          <Text style={styles.resettext}>
            Already have account ?{' '}
            <Text style={styles.innerText} onPress={handleLogin}>
              Sign In
            </Text>
          </Text>
        </View>
      </View>

      {/* <Button title="Login" color="red" onPress={handleLogin} /> */}
    </View>
  );
}
