import React, {useState} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

export default function HeaderProfile(props) {
  const [isPress, setIsPress] = useState(false);

  // console.log(props.route);

  const handleDetail = () => {
    // console.log('profile');
    props.navigation.navigate('Profile');
  };
  const handleOrderHistory = () => {
    // console.log('history');
    props.navigation.navigate('OrderHistory');
  };

  return (
    <View style={styles.wapper}>
      <View style={styles.card}>
        <View style={styles.totalWrapper}>
          <View
            style={
              props.route.name === 'Profile'
                ? styles.underlineActive1
                : styles.underline1
            }>
            <Text
              style={
                props.route.name === 'Profile'
                  ? styles.headerMenuActive
                  : styles.headerMenu
              }
              onPress={handleDetail}>
              Details Account
            </Text>
          </View>
          <View
            style={
              props.route.name === 'OrderHistory'
                ? styles.underlineActive1
                : styles.underline1
            }>
            <Text
              style={
                props.route.name === 'OrderHistory'
                  ? styles.headerMenuActive1
                  : styles.headerMenu1
              }
              onPress={handleOrderHistory}>
              Order History
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
