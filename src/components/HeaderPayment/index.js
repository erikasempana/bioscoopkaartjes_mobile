import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

export default function HeaderPayment(props) {
  const totalPayment = props.route.params.totalPayment;

  const convertToRupiah = angka => {
    var rupiah = '';
    var angkarev = angka.toString().split('').reverse().join('');
    for (var i = 0; i < angkarev.length; i++) {
      if (i % 3 === 0) {
        rupiah += angkarev.substr(i, 3) + '.';
      }
    }
    return (
      'Rp ' +
      rupiah
        .split('', rupiah.length - 1)
        .reverse()
        .join('')
    );
  };
  return (
    <View style={styles.wrapper}>
      <View style={styles.card}>
        <View style={styles.totalWrapper}>
          <Text style={styles.totalName}>Total Payment</Text>
          <Text style={styles.totalValue}>{convertToRupiah(totalPayment)}</Text>
        </View>
      </View>
    </View>
  );
}
