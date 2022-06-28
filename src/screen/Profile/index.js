import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import axios from '../../utils/axios';
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
  Alert,
  Modal,
  Pressable,
} from 'react-native';
import styles from './styles';

// import User from '../../assets/images/user1.jpg';
import Footer from '../../components/Footer';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {UpdatePassword, UpdateProfile} from '../../stores/actions/user';
import Icon from 'react-native-vector-icons/Feather';
// import ModalUpdateImage from '../../components/Modal.js';

export default function Profile(props) {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.data);
  const refreshToken = useSelector(
    state => state.loginReducer.data.refreshToken,
  );
  const [modalVisible, setModalVisible] = useState(false);
  const [form, setForm] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  });
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    noTelp: '',
  });
  const [image, setImage] = useState({
    image: '',
  });

  const handleLogout = async () => {
    try {
      alert('Logout');
      await AsyncStorage.clear();
      const body = {
        refreshToken: refreshToken,
      };
      await axios.post('auth/logout', body);
      props.navigation.navigate('AuthScreen', {
        screen: 'Login',
      });
    } catch (error) {}
  };

  const handleChangeForm = (text, name) => {
    // e.target.value || e.target.name;
    console.log('change password');
    setForm({...form, [name]: text});
  };

  const handleChangeUser = (text, name) => {
    // e.target.value || e.target.name;
    console.log('change user');
    setUser({...user, [name]: text});
  };

  const handleUpdatePassword = async () => {
    try {
      // const id = profile.id;
      console.log(form);
      const result = await dispatch(UpdatePassword(form));
      console.log('result Password', result);
      ToastAndroid.show(result.action.payload.data.msg, ToastAndroid.SHORT);
    } catch (error) {
      console.log(error);
      ToastAndroid.show(error.response.data.msg, ToastAndroid.SHORT);
    }
  };
  const handleUpdateProfile = async () => {
    try {
      const id = profile.id;
      console.log(profile);
      const result = await dispatch(UpdateProfile(id, user));
      ToastAndroid.show(result.action.payload.data.msg, ToastAndroid.SHORT);
    } catch (error) {
      console.log(error);
      ToastAndroid.show(error.response.data.msg, ToastAndroid.SHORT);
    }
  };

  const handleUpdateImage = () => {
    try {
      console.log('GANTI FOTO YUK');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <ScrollView>
      <View style={styles.wrapper}>
        <View style={styles.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              setModalVisible(!modalVisible);
            }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>Change Image ?</Text>
                <Pressable
                  style={[styles.buttonModal, styles.buttonModalClose]}
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Text style={styles.textStyle}>Hide Modal</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
        </View>
        <View style={styles.container}>
          <View style={styles.card}>
            <Text style={styles.title}>INFO</Text>
            <TouchableOpacity
              onPress={() => setModalVisible(true)}
              onChangeText={text => handleChangeForm(text, 'image')}>
              <Image
                style={styles.UserImage}
                source={{
                  uri: `https://res.cloudinary.com/erikasempana/image/upload/v1655692721/${profile.image}`,
                }}
              />
            </TouchableOpacity>
            <Text style={styles.userName}>
              {profile.firstName + profile.lastName}
            </Text>
            <Text style={styles.userDetail}>Moviegoers</Text>
            <View style={styles.lineStyle} />
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText} onPress={handleLogout}>
                Logout
              </Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.titleMenu}>Account Settings</Text>
          <View style={styles.card}>
            <Text style={styles.titleMenu}>Details Information</Text>
            <View style={styles.lineStyle1} />
            <View style={styles.inputWrapper}>
              <Text style={styles.inputlabel}>First Name</Text>
              <TextInput
                style={styles.input}
                // editable={false}
                selectTextOnFocus={false}
                placeholder={profile.firstName}
                onChangeText={text => handleChangeUser(text, 'firstName')}
              />
            </View>
            <View style={styles.inputWrapper}>
              <Text style={styles.inputlabel}>Last Name</Text>
              <TextInput
                style={styles.input}
                // editable={false}
                selectTextOnFocus={false}
                placeholder={profile.lastName}
                onChangeText={text => handleChangeUser(text, 'lastName')}
              />
            </View>
            <View style={styles.inputWrapper}>
              <Text style={styles.inputlabel}>Email</Text>
              <TextInput
                editable={false}
                selectTextOnFocus={false}
                style={styles.input}
                placeholder={profile.email}
              />
            </View>
            <View style={styles.inputWrapper}>
              <Text style={styles.inputlabel}>Phone Number</Text>
              <View style={styles.prefix}>
                <Icon color={'grey'} size={15} name="phone" />
              </View>
              <TextInput
                style={styles.input1}
                placeholder={profile.noTelp}
                onChangeText={text => handleChangeUser(text, 'noTelp')}
              />
            </View>
          </View>
          <TouchableOpacity
            style={styles.buttonUpdate}
            onPress={handleUpdateProfile}>
            <Text style={styles.buttonUpdateText}>Update changes</Text>
          </TouchableOpacity>
          <View style={styles.card}>
            <Text style={styles.titleMenu}>Account and Privacy</Text>
            <View style={styles.lineStyle1} />
            <View style={styles.inputWrapper}>
              <Text style={styles.inputlabel}>Password</Text>
              <TextInput
                secureTextEntry={true}
                style={styles.input}
                placeholder={form.oldPassword ? form.oldPasswowrd : ''}
                onChangeText={text => handleChangeForm(text, 'oldPassword')}
              />
            </View>
            <View style={styles.inputWrapper}>
              <Text style={styles.inputlabel}>New Password</Text>
              <TextInput
                secureTextEntry={true}
                style={styles.input}
                placeholder={form.newPassword ? form.newPassword : ''}
                onChangeText={text => handleChangeForm(text, 'newPassword')}
              />
            </View>
            <View style={styles.inputWrapper}>
              <Text style={styles.inputlabel}>Confirm</Text>
              <TextInput
                secureTextEntry={true}
                style={styles.input}
                placeholder={form.confirmPassword ? form.confirmPassword : ''}
                onChangeText={text => handleChangeForm(text, 'confirmPassword')}
              />
            </View>
          </View>
          <TouchableOpacity
            style={styles.buttonUpdate}
            // onPress={
            //   form.oldPassword && form.newPassword && form.confirmPassword
            //     ? handleUpdatePassword
            //     : alert('fill your password')
            // }
            onPress={handleUpdatePassword}>
            <Text style={styles.buttonUpdateText}>Update changes</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Footer {...props} />
    </ScrollView>
  );
}
