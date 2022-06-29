import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  RefreshControl,
} from 'react-native';
import styles from './styles';
import dayjs from 'dayjs';

import QRCode from '../../assets/images/QRCode.png';
import Footer from '../../components/Footer';
import {
  getBookingById,
  updateStatusBooking,
} from '../../stores/actions/booking';

const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

export default function TicketResult(props) {
  const dispatch = useDispatch();
  const id = props.route.params.id;
  const [bookingId, setBookingId] = useState('');
  const ticketDetail = useSelector(state => state.bookingById.data);
  const [dataTicket, setDataTicket] = useState('');
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  useEffect(() => {
    handleDataTicket();
    console.log('bookingId', id);
  }, []);

  console.log('ticket', ticketDetail);
  console.log('ticketData', dataTicket);

  const handleDataTicket = async () => {
    try {
      console.log('ID', id);
      const result = await dispatch(getBookingById(id));
      console.log('first', result);
      setDataTicket(result.action.payload.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleStatusTickets = async () => {
    try {
      await dispatch(updateStatusBooking(id));
      setBookingId(props.route.params.id);
    } catch (error) {
      console.log(error);
    }
  };

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
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <View style={styles.wrapper}>
        <View style={styles.container}>
          <View style={styles.cardQr}>
            <TouchableOpacity onPress={handleStatusTickets}>
              <Image style={styles.codeQr} source={QRCode} />
            </TouchableOpacity>
            <View style={styles.roundWrapper3}>
              <View style={styles.round3} />
              <View style={styles.lineStyle3} />
              <View style={styles.round3} />
            </View>
          </View>
          <View style={bookingId ? styles.cardUsed : styles.card}>
            <View style={styles.roundWrapper2}>
              <View style={styles.round2} />
              <View style={styles.lineStyle2} />
              <View style={styles.round2} />
            </View>
            <View style={styles.wrapperDetail}>
              <View style={styles.detail}>
                <View style={styles.detailLeft}>
                  <Text style={styles.detailName}>Movie</Text>
                  <Text style={styles.detailValue}>{ticketDetail.name}</Text>
                  <Text style={styles.detailName}>Date</Text>
                  <Text style={styles.detailValue}>
                    {dayjs(ticketDetail.dateBooking).format('MMM D, YYYY')}
                  </Text>
                  <Text style={styles.detailName}>Count</Text>
                  <Text style={styles.detailValue}>
                    {ticketDetail.seat.length} seats
                  </Text>
                </View>
                <View style={styles.detailRight}>
                  <Text style={styles.detailName}>Category</Text>
                  <Text style={styles.detailValue}>
                    {ticketDetail.category}
                  </Text>
                  <Text style={styles.detailName}>Time</Text>
                  <Text style={styles.detailValue}>
                    {tConvert(ticketDetail.timeBooking)}
                  </Text>
                  <Text style={styles.detailName}>Seat</Text>
                  <Text style={styles.detailValue}>
                    {ticketDetail.seat.toString()}
                  </Text>
                </View>
              </View>
              <View style={styles.detailTotal}>
                <Text style={styles.total}>Total</Text>
                <Text style={styles.total}>
                  {convertToRupiah(ticketDetail.totalPayment)}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <Footer {...props} />
    </ScrollView>
  );
}
