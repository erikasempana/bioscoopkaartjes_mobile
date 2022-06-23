import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {Image, ScrollView, Text, View} from 'react-native';
import styles from './styles';

import QRCode from '../../assets/images/QRCode.png';
import Footer from '../../components/Footer';
import {getBookingById} from '../../stores/actions/booking';
import {getScheduleById} from '../../stores/actions/schedule';

export default function TicketResult(props) {
  const dispatch = useDispatch();
  const [dataBookingTicket, setDataBookingTicket] = useState({});
  const [scheduleId, setscheduleId] = useState();
  console.log(dataBookingTicket);
  useEffect(() => {
    handleDataTicket();
  }, []);

  const handleDataTicket = async () => {
    try {
      const id = props.route.params.bookingId;
      const result = await dispatch(getBookingById(id));
      setDataBookingTicket(result.action.payload.data.data);
      setscheduleId(result.action.payload.data.data.setscheduleId);
      await dispatch(getScheduleById(scheduleId));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ScrollView>
      <View style={styles.wrapper}>
        <View style={styles.container}>
          <View style={styles.cardQr}>
            <Image style={styles.codeQr} source={QRCode} />
            <View style={styles.roundWrapper3}>
              <View style={styles.round3} />
              <View style={styles.lineStyle3} />
              <View style={styles.round3} />
            </View>
          </View>
          <View
            style={
              props.route.params.bookingId ? styles.cardUsed : styles.card
            }>
            <View style={styles.roundWrapper2}>
              <View style={styles.round2} />
              <View style={styles.lineStyle2} />
              <View style={styles.round2} />
            </View>
            <View style={styles.wrapperDetail}>
              <View style={styles.detail}>
                <View style={styles.detailLeft}>
                  <Text style={styles.detailName}>Movie</Text>
                  <Text style={styles.detailValue}>Spider-Man: ..</Text>
                  <Text style={styles.detailName}>Date</Text>
                  <Text style={styles.detailValue}>07 Jul</Text>
                  <Text style={styles.detailName}>Count</Text>
                  <Text style={styles.detailValue}>3 pcs</Text>
                </View>
                <View style={styles.detailRight}>
                  <Text style={styles.detailName}>Category</Text>
                  <Text style={styles.detailValue}>Action</Text>
                  <Text style={styles.detailName}>Time</Text>
                  <Text style={styles.detailValue}>2:00pm</Text>
                  <Text style={styles.detailName}>Seat</Text>
                  <Text style={styles.detailValue}>C4, C5</Text>
                </View>
              </View>
              <View style={styles.detailTotal}>
                <Text style={styles.total}>Total</Text>
                <Text style={styles.total}>$30.00</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <Footer {...props} />
    </ScrollView>
  );
}
