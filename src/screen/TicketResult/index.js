import React, {useState, useEffect} from 'react';
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
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);

import QRCode from '../../assets/images/QRCode.png';
import Footer from '../../components/Footer';
import {
  getBookingById,
  updateStatusBooking,
} from '../../stores/actions/booking';

export default function TicketResult(props) {
  const dispatch = useDispatch();
  const [bookingId, setBookingId] = useState('');
  const ticketDetail = useSelector(state => state.bookingById.data);

  const handleStatusTickets = async () => {
    try {
      const id = props.route.params.id;
      console.log('ID', id);
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

  useEffect(() => {
    // handleDataTicket();
    console.log(props.route.params.id);
  }, []);

  return (
    <ScrollView refreshControl={<RefreshControl />}>
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
                    {ticketDetail.seat ? ticketDetail.seat.length : ''} seats
                  </Text>
                </View>
                <View style={styles.detailRight}>
                  <Text style={styles.detailName}>Category</Text>
                  <Text style={styles.detailValue}>
                    {ticketDetail.category}
                  </Text>
                  <Text style={styles.detailName}>Time</Text>
                  <Text style={styles.detailValue}>
                    {dayjs(ticketDetail.timeBooking, 'HH:mm:ss').format(
                      'hh:mm a',
                    )}
                  </Text>
                  <Text style={styles.detailName}>Seat</Text>
                  <Text style={styles.detailValue}>
                    {ticketDetail.seat ? ticketDetail.seat : ''}
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
