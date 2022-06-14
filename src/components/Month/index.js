import React from 'react';
import styles from './styles';
import {Text, TouchableHighlight, TouchableOpacity, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

export default function Month(props) {
  const monthList = [
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
  ];

  var [isPress, setIsPress] = React.useState(false);
  var touchButton = {
    activeOpacity: 1,
    underlayColor: '#5F2EEA',
    style: isPress ? styles.monthButtonPress : styles.monthButtonNormal, // <-- but you can still apply other style changes
    onHideUnderlay: () => setIsPress(false),
    onShowUnderlay: () => setIsPress(true),
    // onPress: () => console.log('HELLO'), // <-- "onPress" is apparently required
  };
  var touchText = {
    style: isPress ? styles.monthTextPress : styles.monthTextNormal, // <-- but you can still apply other style changes
    onHideUnderlay: () => setIsPress(false),
    onShowUnderlay: () => setIsPress(true),
  };

  const handlePressButton = () => {
    if (isPress === true) {
      touchButton;
    }
  };

  const handlePressText = () => {
    touchText;
  };

  return (
    <ScrollView horizontal={true}>
      <View style={styles.container}>
        {monthList.map(item => (
          <TouchableHighlight
            {...touchButton}
            key={item.id}
            onPress={handlePressButton}>
            <Text {...touchText} onPress={handlePressText}>
              {item.month}
            </Text>
          </TouchableHighlight>
        ))}
      </View>
    </ScrollView>
  );
}
