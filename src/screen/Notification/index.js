import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import Notification from '../../utils/notif';

export default function NotificationScreen(props) {
  const handleClickReminder = () => {
    console.log('Clicked');
    // [Without Schedule]
    // Notification.reminderProductNotification();

    // [With Schedule]
    const setNotification = {
      title: 'Product',
      message: 'You can buy this product',
      date: new Date(Date.now() + 5 * 1000),
    };
    console.log(setNotification);
    Notification.scheduleProductNotification(setNotification);
  };

  return (
    <View style={styles.container}>
      <Text>Notification</Text>
      <Button title="remainder-product" onPress={handleClickReminder} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
