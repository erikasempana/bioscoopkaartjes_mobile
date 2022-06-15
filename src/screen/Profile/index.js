import React from 'react';
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';

import User from '../../assets/images/user1.jpg';
import Footer from '../../components/Footer';

export default function Profile(props) {
  return (
    <ScrollView>
      <View style={styles.wrapper}>
        <View style={styles.container}>
          <View style={styles.card}>
            <Text style={styles.title}>INFO</Text>
            <Image style={styles.UserImage} source={User} />
            <Text style={styles.userName}>Jonas El Rodriguez</Text>
            <Text style={styles.userDetail}>Moviegoers</Text>
            <View style={styles.lineStyle} />
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Logout</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.titleMenu}>Account Settings</Text>
          <View style={styles.card}>
            <Text style={styles.titleMenu}>Details Information</Text>
            <View style={styles.lineStyle1} />
            <View style={styles.inputWrapper}>
              <Text style={styles.inputlabel}>Full Name</Text>
              <TextInput
                style={styles.input}
                placeholder="Jonas El Rodriguez"
              />
            </View>
            <View style={styles.inputWrapper}>
              <Text style={styles.inputlabel}>Email</Text>
              <TextInput
                style={styles.input}
                placeholder="jonasrodri123@gmail.com"
              />
            </View>
            <View style={styles.inputWrapper}>
              <Text style={styles.inputlabel}>Phone Number</Text>
              <Text style={styles.prefix}>+62 </Text>
              <TextInput style={styles.input1} placeholder="81445687121" />
            </View>
          </View>
          <TouchableOpacity style={styles.buttonUpdate}>
            <Text style={styles.buttonUpdateText}>Update changes</Text>
          </TouchableOpacity>
          <View style={styles.card}>
            <Text style={styles.titleMenu}>Account and Privacy</Text>
            <View style={styles.lineStyle1} />
            <View style={styles.inputWrapper}>
              <Text style={styles.inputlabel}>New Password</Text>
              <TextInput style={styles.input} placeholder="••••••••••" />
            </View>
            <View style={styles.inputWrapper}>
              <Text style={styles.inputlabel}>New Password</Text>
              <TextInput style={styles.input} placeholder="••••••••••" />
            </View>
          </View>
          <TouchableOpacity style={styles.buttonUpdate}>
            <Text style={styles.buttonUpdateText}>Update changes</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Footer />
    </ScrollView>
  );
}
