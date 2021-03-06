import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {Text, View, ScrollView, TouchableOpacity, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from './styles';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);

import Footer from '../../components/Footer';
import Seat from '../../components/Seat';

export default function Order(props) {
  const profile = useSelector(state => state.user.data);
  const scheduleData = useSelector(state => state.scheduleById.data);
  const detailOrder = useSelector(state => state.dataOrder.dataOrder);
  const movieOrder = useSelector(state => state.movie.data);
  const listSeat = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
  const [selectedSeat, setSelectedSeat] = useState([]);
  const [reservedSeat, setReservedSeat] = useState(['A1', 'C7']);
  console.log('AB', detailOrder);

  useEffect(() => {
    console.log('props params', props.route.params);
  }, []);

  const handleSelectedSeat = data => {
    // console.log('WHATT, data);
    if (selectedSeat.includes(data)) {
      const deleteSeat = selectedSeat.filter(el => {
        return el !== data;
      });
      setSelectedSeat(deleteSeat);
    } else {
      setSelectedSeat([...selectedSeat, data]);
    }
  };

  const handleResetSeat = () => {
    setSelectedSeat([]);
  };

  const handleBookingSeat = () => {
    setReservedSeat(...selectedSeat);

    props.navigation.navigate('Payment', {
      reservedSeat,
      totalPayment: reservedSeat.length * detailOrder.price,
      profile: {...profile},
    });
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

  return (
    <ScrollView>
      <View style={styles.wrapper}>
        <View style={styles.container}>
          <Text style={styles.title}>Choose Your Seat</Text>
          <View style={styles.card1}>
            <View style={styles.container1}>
              <View style={styles.screenline}>
                <Text style={styles.screenlineText}>screen</Text>
              </View>
              <View style={styles.containerSeat}>
                <View style={styles.greenline} />
                <FlatList
                  data={listSeat}
                  keyExtractor={item => item}
                  renderItem={({item}) => (
                    <Seat
                      seatAlphabhet={item}
                      reserved={reservedSeat}
                      selected={selectedSeat}
                      selectSeat={handleSelectedSeat}
                    />
                  )}
                />
              </View>
              <View style={styles.lineWrapper}>
                <View style={styles.redline} />
                <View style={styles.redline} />
              </View>
              {/* <Button title="Booking" onPress={handleBookingSeat} /> */}
              {/* <Button title="Reset" onPress={handleResetSeat} /> */}

              <Text style={styles.seatingKey}>Seating key</Text>
              <View style={styles.wrapperKey}>
                <View style={styles.key}>
                  <Icon color={'black'} size={20} name="arrowdown" />
                  <Text style={styles.desc}>A - G</Text>
                </View>
                <View style={styles.keyNumber}>
                  <Icon color={'black'} size={20} name="arrowright" />
                  <Text style={styles.desc}>1 - 14</Text>
                </View>
                <View style={styles.key}>
                  <View style={styles.smallBox1} />
                  <Text style={styles.desc}>Available</Text>
                </View>
                <View style={styles.key}>
                  <View style={styles.smallBox2} />
                  <Text style={styles.desc}>Selected</Text>
                </View>
                <View style={styles.key}>
                  <View style={styles.smallBox3} />
                  <Text style={styles.desc}>Sold</Text>
                </View>
                <View style={styles.key}>
                  <TouchableOpacity
                    style={styles.resetBox}
                    onPress={handleResetSeat}>
                    <Text style={styles.resetBtn}>Reset</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          <Text style={styles.title}>Order Info</Text>
          <View style={styles.card}>
            <Text style={styles.cinema}> {scheduleData[0].premiere}</Text>
            <Text style={styles.cinemaName}>
              {scheduleData[0].premiere} Cinema
            </Text>
            <Text style={styles.movieTitle}>{movieOrder.name}</Text>
            <View style={styles.orderInfo}>
              <Text style={styles.info1}>
                {detailOrder.dataDateBooking.toISOString().split('T')[0]}
              </Text>
              <Text style={styles.info2}>
                {dayjs(detailOrder.selectedTime, 'HH:mm').format('hh:mm a')}
              </Text>
            </View>
            <View style={styles.orderInfo}>
              <Text style={styles.info1}>One ticket price</Text>
              <Text style={styles.info2}>
                {convertToRupiah(detailOrder.price)}
              </Text>
            </View>
            <View style={styles.orderInfo}>
              <Text style={styles.info1}>Seat choosed</Text>
              <Text style={styles.info2}>{selectedSeat.join(', ')}</Text>
            </View>
            <View style={styles.lineStyle} />
            <View style={styles.totalWrapper}>
              <Text style={styles.totalName}>Total Payment</Text>
              <Text style={styles.totalValue}>
                {convertToRupiah(selectedSeat.length * detailOrder.price)}
              </Text>
            </View>
          </View>
          <TouchableOpacity style={styles.button} onPress={handleBookingSeat}>
            <Text style={styles.buttontext}>Checkout now</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Footer {...props} />
    </ScrollView>
  );
}
