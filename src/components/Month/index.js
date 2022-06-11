import React from 'react';
import styles from './styles';
import {Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

export default function Month(props) {
  //   const month = [
  //     January,
  //     February,
  //     March,
  //     April,
  //     Mey,
  //     June,
  //     July,
  //     August,
  //     September,
  //     October,
  //     November,
  //     December,
  //   ];

  return (
    <ScrollView horizontal={true}>
      <View style={styles.container}>
        {/* {month.map(item => (
          <Text>{month}</Text>
        ))} */}
      </View>
    </ScrollView>
  );
}
