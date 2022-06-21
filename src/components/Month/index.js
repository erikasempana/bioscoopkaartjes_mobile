import React, {useState} from 'react';
import styles from './styles';
import {Text, TouchableOpacity, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

export default function Month(props) {
  const [sortMonth, setSortMonth] = useState('');
  const [monthList, setMonthList] = useState([
    {id: 1, month: 'January'},
    {id: 2, month: 'February'},
    {id: 3, month: 'March'},
    {id: 4, month: 'April'},
    {id: 5, month: 'Mey'},
    {id: 6, month: 'June'},
    {id: 7, month: 'July'},
    {id: 8, month: 'August'},
    {id: 9, month: 'September'},
    {id: 10, month: 'October'},
    {id: 11, month: 'November'},
    {id: 12, month: 'December'},
  ]);

  var touchButton = {
    activeOpacity: 1,
    underlayColor: '#5F2EEA',
  };
  const handlePressButton = item => {
    setSortMonth(item.id);
    console.log(item);
  };

  return (
    <ScrollView horizontal={true}>
      <View style={styles.container}>
        {monthList.map((item, idx) => (
          <TouchableOpacity
            {...touchButton}
            key={item.id}
            onPress={() => handlePressButton(item, idx)}
            style={[
              item.id === sortMonth
                ? styles.monthButtonPress
                : styles.monthButtonNormal,
            ]}>
            <Text
              style={[
                item.id === sortMonth
                  ? styles.monthTextPress
                  : styles.monthTextNormal,
              ]}>
              {item.month}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}
