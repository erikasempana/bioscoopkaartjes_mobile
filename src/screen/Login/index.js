import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import styles from './styles';
import axios from '../../utils/axios';

import logo from '../../assets/logo/logobiosscoopkaartjes.png';

function LoginScreen(props) {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const handleLogin = async () => {
    props.navigation.navigate('AppScreen', {
      screen: 'Home',
    });
    console.log(form);
    const result = await axios.post('auth/login', form);
    console.log(result);
  };

  const handleChangeForm = e => {
    // e.target.value || e.target.name;
    setForm({...form, [name]: text});
  };

  const handleRegister = () => {
    props.navigation.navigate('Register');
  };

  const handleResetNow = () => {
    props.navigation.navigate('ConfirmResetPassword');
  };

  return (
    // <View style={{backgroundColor: 'blue'}}

    <View style={styles.wrapper}>
      <View style={styles.container}>
        <Image style={styles.logo} source={logo} />
        <Text style={styles.signin}>Sign In</Text>
        <Text style={styles.tagline}>
          Sign in with your data that you entered during your registration
        </Text>
        <View style={styles.inputwrapper}>
          <View>
            <Text style={styles.inputlabel}>Email</Text>
            <TextInput
              style={styles.input1}
              placeholder="Write your email"
              onChangeText={text => handleChangeForm(text, 'email')}
            />
          </View>
          <View>
            <Text style={styles.inputlabel2}>Password</Text>
            <TextInput
              style={styles.input2}
              placeholder="Write your password"
              onChangeText={text => handleChangeForm(text, 'password')}
            />
          </View>
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttontext}>Sign In</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.reset}>
          <Text style={styles.resettext}>
            Forgot your password ?{' '}
            <Text style={styles.innerText} onPress={handleResetNow}>
              Reset now
            </Text>
          </Text>
        </View>
        <View style={styles.signup}>
          <Text style={styles.signuptext}>
            Don't have an account ?{' '}
            <Text style={styles.innerText} onPress={handleRegister}>
              Sign Up
            </Text>
          </Text>
        </View>
      </View>

      {/* <Button title="Login" color="red" onPress={handleLogin} /> */}
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: 'blue',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   container2: {
//     backgroundColor: 'red',
//   },
//   textHeader: {
//     color: 'white',
//   },
// });

export default LoginScreen;
