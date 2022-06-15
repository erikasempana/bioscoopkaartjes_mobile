import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

export default function HeaderProfile(props) {
  return (
    <View style={styles.wapper}>
      <View style={styles.card}>
        <View style={styles.totalWrapper}>
          <Text style={styles.totalName}>Details Account</Text>
          <Text style={styles.totalName}>Order History</Text>
        </View>
      </View>
    </View>
  );
}
