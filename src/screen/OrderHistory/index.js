import React, {useEffect, useState} from 'react';
import {
  RefreshControl,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getBookingByUserId} from '../../stores/actions/booking';
import styles from './styles';
import dayjs from 'dayjs';

import Footer from '../../components/Footer';
import EbuId from '../../assets/images/ebuid.png';
import Hiflix from '../../assets/images/hiflix.png';
import cineone from '../../assets/images/cineone.png';

const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

export default function OrderHistory(props) {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.data);
  const [bookingId, setBookingId] = useState('');
  const dataOrderHistory = useSelector(state => state.orderHistory.data);
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  useEffect(() => {
    historyBooking();
  }, []);

  const historyBooking = async () => {
    try {
      const userId = profile.id;
      await dispatch(getBookingByUserId(userId));
    } catch (error) {
      console.log(error);
    }
  };

  const handleTicket = async item => {
    try {
      console.log('ITEM', item.id);
      props.navigation.navigate('TicketResult', {id: item.id});
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
      time[5] = +time[0] < 12 ? ' am' : ' pm'; // Set AM/PM
      time[0] = +time[0] % 12 || 12; // Adjust hours
    }
    return time.join(''); // return adjusted time or original string
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <View style={styles.wrapper}>
        <View style={styles.container}>
          {dataOrderHistory.map(item => (
            <View key={item.id} style={styles.card}>
              <Image
                style={styles.cinema}
                source={
                  item.premiere === 'Ebu.id' ? (
                    EbuId
                  ) : item.premiere === 'Hiflix' ? (
                    Hiflix
                  ) : item.premiere === 'cineOne21' ? (
                    cineone
                  ) : (
                    <Text>Unknown Premiere</Text>
                  )
                }
              />
              <Text style={styles.schedule}>
                {dayjs(item.dateBooking).format('ddd, MMM D YYYY')} -{' '}
                {tConvert(item.timeBooking)}
              </Text>
              <Text style={styles.movieTitle}>{item.name}</Text>
              <View style={styles.lineStyle} />
              {item.statusUsed === 'active' ? (
                <TouchableOpacity
                  style={styles.buttonUpdate}
                  onPress={() => handleTicket(item)}>
                  <Text style={styles.buttonUpdateText}>Ticket in active</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  style={styles.buttonUsed}
                  onPress={() => handleTicket(item)}>
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
