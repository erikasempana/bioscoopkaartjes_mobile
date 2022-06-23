import React, {useEffect, useState} from 'react';
import {ScrollView, Text, View, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  getBookingByUserId,
  updateStatusBooking,
} from '../../stores/actions/booking';
import styles from './styles';
import dayjs from 'dayjs';

import Footer from '../../components/Footer';

export default function OrderHistory(props) {
  const dispatch = useDispatch();
  const booking = useSelector(state => state.booking.data);
  const profile = useSelector(state => state.loginReducer.data);
  const dataOrderHistory = useSelector(state => state.orderHistory.data.result);
  const [bookingId, setBookingId] = useState('');
  console.log('PROFILE', dataOrderHistory);

  useEffect(() => {
    historyBooking();
  }, []);

  const historyBooking = async () => {
    try {
      console.log('HISTORY BELI TIKET');
      const userId = profile.id;
      await dispatch(getBookingByUserId(userId));
    } catch (error) {
      console.log(error);
    }
  };

  const handleTicket = async () => {
    try {
      const id = booking.id;
      const resultStatus = await dispatch(updateStatusBooking(id));
      setBookingId(resultStatus.action.payload.data.data.id);
      props.navigation.navigate('TicketResult', {bookingId});
    } catch (error) {
      console.log(error);
    }
  };

  const tConvert = time => {
    // Check correct time format and split into components
    time = time
      .toString()
      .match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

    if (time.length > 1) {
      // If time format correct
      time = time.slice(1); // Remove full string match value
      time[5] = +time[0] < 12 ? ' AM' : ' PM'; // Set AM/PM
      time[0] = +time[0] % 12 || 12; // Adjust hours
    }
    return time.join(''); // return adjusted time or original string
  };

  return (
    <ScrollView>
      <View style={styles.wrapper}>
        <View style={styles.container}>
          {dataOrderHistory.map(item => (
            <View key={item.index} style={styles.card}>
              <Text style={styles.cinema}>{}</Text>
              <Text style={styles.schedule}>
                {dayjs(item.dateBooking).format('ddd, MMM D YYYY')} -{' '}
                {tConvert(item.timeBooking)}
              </Text>
              <Text style={styles.movieTitle}>{item.name}</Text>
              <View style={styles.lineStyle} />
              {item.statusUsed === 'active' ? (
                <TouchableOpacity
                  style={styles.buttonUpdate}
                  onPress={handleTicket}>
                  <Text style={styles.buttonUpdateText}>Ticket in active</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  style={styles.buttonUsed}
                  onPress={handleTicket}>
                  <Text style={styles.buttonUsedText}>Ticket used</Text>
                </TouchableOpacity>
              )}
            </View>
          ))}
        </View>
      </View>
      <Footer {...props} />
    </ScrollView>
  );
}
