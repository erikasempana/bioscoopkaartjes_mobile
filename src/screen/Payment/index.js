import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {createBooking} from '../../stores/actions/booking';
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import Footer from '../../components/Footer';

import GPay from '../../assets/images/googlepay.png';
import Visa from '../../assets/images/visa.png';
import GoPay from '../../assets/images/GoPay.png';
import Paypal from '../../assets/images/paypal.png';
import Ovo from '../../assets/images/OVO.png';
import Dana from '../../assets/images/DANA.png';

export default function Payment(props) {
  const dispatch = useDispatch();
  const detailOrder = useSelector(state => state.dataOrder.dataOrder);
  useEffect(() => {
    console.log(props.route.params);
  }, []);
  const params = props.route.params;
  const profile = props.route.params.profile;

  const handleBooking = async () => {
    try {
      const body = {
        userId: profile.id,
        scheduleId: detailOrder.scheduleId,
        dateBooking: detailOrder.dateBooking,
        timeBooking: detailOrder.timeBooking,
        totalPayment: params.totalPayment,
        seat: params.reservedSeat,
      };
      const resultBooking = await dispatch(createBooking(body));
      // props.navigation.navigate('Payment', {reservedSeat});
      props.navigation.replace('MidtransView', {
        redirectUrl: resultBooking.action.payload.data.data.redirectUrl,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ScrollView>
      <View style={styles.wrapper}>
        <View style={styles.container}>
          <Text style={styles.title}>Payment Metode</Text>
          <View style={styles.card}>
            <View style={styles.methodBorder}>
              <Image style={styles.method} source={GPay} />
            </View>
            <View style={styles.methodBorder}>
              <Image style={styles.method} source={Visa} />
            </View>
            <View style={styles.methodBorder}>
              <Image style={styles.method} source={GoPay} />
            </View>
            <View style={styles.methodBorder}>
              <Image style={styles.method1} source={Paypal} />
            </View>
            <View style={styles.methodBorder}>
              <Image style={styles.method} source={Ovo} />
            </View>
            <View style={styles.methodBorder}>
              <Image style={styles.method} source={Dana} />
            </View>
            <View style={styles.viewMoreWrapper}>
              <View style={styles.viewMoreLine} />
              <Text style={styles.viewMoreText}>or</Text>
              <View style={styles.viewMoreLine} />
            </View>
            <View style={styles.wrapperOption}>
              <Text style={styles.pay}>Pay via cash.</Text>
              <Text style={styles.see}>See how it work</Text>
            </View>
          </View>
          <Text style={styles.title}>Personal Info</Text>
          <View style={styles.card}>
            <View style={styles.inputWrapper}>
              <Text style={styles.inputlabel}>Full Name</Text>
              <TextInput
                style={styles.input}
                placeholder={profile.firstName + ' ' + profile.lastName}
              />
            </View>
            <View style={styles.inputWrapper}>
              <Text style={styles.inputlabel}>Email</Text>
              <TextInput style={styles.input} placeholder={profile.email} />
            </View>
            <View style={styles.inputWrapper}>
              <Text style={styles.inputlabel}>Phone Number</Text>
              <Text style={styles.prefix}>
                <Icon color={'grey'} size={20} name="call" />
              </Text>
              {/* <View style={styles.lineV} /> */}
              <TextInput style={styles.input1} placeholder={profile.noTelp} />
            </View>
            <View style={styles.alert}>
              <Text style={styles.alertText}>
                <Icon color={'#F4B740'} size={25} name="warning" /> Fill your
                data correctly.
              </Text>
            </View>
          </View>
          <TouchableOpacity style={styles.button} onPress={handleBooking}>
            <Text style={styles.buttontext}>Pay your order</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Footer {...props} />
    </ScrollView>
  );
}
