import React from 'react';
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
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

export default function Payment() {
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
                placeholder="Jonas El Rodriguez"
              />
            </View>
            <View style={styles.inputWrapper}>
              <Text style={styles.inputlabel}>Email</Text>
              <TextInput
                style={styles.input}
                placeholder="jonasrodri123@gmail.com"
              />
            </View>
            <View style={styles.inputWrapper}>
              <Text style={styles.inputlabel}>Phone Number</Text>
              <Text style={styles.prefix}>+62 </Text>
              {/* <View style={styles.lineV} /> */}
              <TextInput style={styles.input1} placeholder="81445687121" />
            </View>
            <View style={styles.alert}>
              <Text style={styles.alertText}>
                <Icon color={'#F4B740'} size={30} name="warning" /> Fill your
                data data correctly.
              </Text>
            </View>
          </View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttontext}>Pay your order</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Footer />
    </ScrollView>
  );
}
