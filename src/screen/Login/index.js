import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import axios from '../../utils/axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  ToastAndroid,
} from 'react-native';
import styles from './styles';

import logo from '../../assets/logo/logobiosscoopkaartjes.png';
import {GetUserById} from '../../stores/actions/user';

function LoginScreen(props) {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const handleLogin = async () => {
    try {
      console.log(form);
      const result = await axios.post('auth/login', form);
      await AsyncStorage.setItem('id', result.data.data.id);
      await AsyncStorage.setItem('token', result.data.data.token);
      await AsyncStorage.setItem('refreshToken', result.data.data.refreshToken);
      await dispatch(GetUserById(result.data.data.id));

      ToastAndroid.show(result.data.msg, ToastAndroid.SHORT);
      props.navigation.navigate('AppScreen', {
        screen: 'Home',
      });
    } catch (error) {
      console.log(error.response);
      ToastAndroid.show(error.response.data.msg, ToastAndroid.SHORT);
    }
  };

  const handleReset = () => {
    setForm({
      email: '',
      password: '',
    });
  };

  const handleChangeForm = (text, name) => {
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
    <ScrollView>
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
                secureTextEntry={true}
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
    </ScrollView>
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
