import React, {useState} from 'react';
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
import axios from '../../utils/axios';

import logo from '../../assets/logo/logobiosscoopkaartjes.png';

export default function RegisterScreen(props) {
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    noTelp: '',
    email: '',
    password: '',
  });

  const handleRegister = async () => {
    try {
      // console.log(form);
      if (
        form.firstName === '' ||
        form.lastName === '' ||
        form.noTelp === '' ||
        form.email === '' ||
        form.password === ''
      ) {
        alert('your detail form can not empty');
      } else {
        const result = await axios.post('auth/register', form);
        // console.log('result', result.data);
        ToastAndroid.show('succes register', ToastAndroid.SHORT);
        props.navigation.navigate('Login');
      }
    } catch (error) {
      console.log(error);
      ToastAndroid.show(error.response.data.msg, ToastAndroid.SHORT);
      setForm({
        firstName: '',
        lastName: '',
        noTelp: '',
        email: '',
        password: '',
      });
    }
  };

  const handleChangeForm = (text, name) => {
    // e.target.value || e.target.name;
    setForm({...form, [name]: text});
  };

  const handleLogin = () => {
    props.navigation.navigate('Login');
  };

  return (
    <ScrollView>
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
                placeholderTextColor={'rgba(160, 163, 189, 1)'}
                placeholder="Write your first name"
                onChangeText={text => handleChangeForm(text, 'firstName')}
              />
            </View>
            <View>
              <Text style={styles.inputlabel}>Last Name</Text>
              <TextInput
                style={styles.input1}
                placeholderTextColor={'rgba(160, 163, 189, 1)'}
                placeholder="Write your last name"
                onChangeText={text => handleChangeForm(text, 'lastname')}
              />
            </View>
            <View>
              <Text style={styles.inputlabel}>Phone Number</Text>
              <TextInput
                style={styles.input1}
                placeholderTextColor={'rgba(160, 163, 189, 1)'}
                placeholder="Write your phone number"
                onChangeText={text => handleChangeForm(text, 'noTelp')}
              />
            </View>
            <View>
              <Text style={styles.inputlabel}>Email</Text>
              <TextInput
                style={styles.input1}
                placeholderTextColor={'rgba(160, 163, 189, 1)'}
                placeholder="Write your email"
                onChangeText={text => handleChangeForm(text, 'email')}
              />
            </View>
            <View>
              <Text style={styles.inputlabel2}>Password</Text>
              <TextInput
                secureTextEntry={true}
                style={styles.input2}
                placeholderTextColor={'rgba(160, 163, 189, 1)'}
                placeholder="Write your password"
                onChangeText={text => handleChangeForm(text, 'password')}
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
    </ScrollView>
  );
}
