import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

export default function HeaderPayment(props) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.card}>
        <View style={styles.totalWrapper}>
          <Text style={styles.totalName}>Total Payment</Text>
          <Text style={styles.totalValue}>$30.00</Text>
        </View>
      </View>
    </View>
  );
}
