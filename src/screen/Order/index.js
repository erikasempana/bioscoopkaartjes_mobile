import React from 'react';
import {Text, View, ScrollView, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from './styles';

import Cineone from '../../assets/images/cineone.png';
import Footer from '../../components/Footer';

export default function Order(props) {
  const toPaymenPage = () => {
    props.navigation.navigate('Payment');
  };
  return (
    <ScrollView>
      <View style={styles.wrapper}>
        <View style={styles.container}>
          <Text style={styles.title}>Choose Your Seat</Text>
          <View style={styles.card}>
            <View style={styles.screenline} />
            <View style={styles.seatWrapper}>
              <View style={styles.greenline} />
              <View style={styles.seat} />
              <View style={styles.seat} />
            </View>
            <View style={styles.lineWrapper}>
              <View style={styles.redline} />
              <View style={styles.redline} />
            </View>
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
            </View>
          </View>
          <Text style={styles.title}>Order Info</Text>
          <View style={styles.card}>
            <Image style={styles.cinema} source={Cineone} />
            <Text style={styles.cinemaName}>CineOne21 Cinema</Text>
            <Text style={styles.movieTitle}>Spider-Man: Homecoming</Text>
            <View style={styles.orderInfo}>
              <Text style={styles.info1}>Tuesday, 07 July 2020</Text>
              <Text style={styles.info2}>02:00pm</Text>
            </View>
            <View style={styles.orderInfo}>
              <Text style={styles.info1}>Tuesday, 07 July 2020</Text>
              <Text style={styles.info2}>02:00pm</Text>
            </View>
            <View style={styles.orderInfo}>
              <Text style={styles.info1}>Tuesday, 07 July 2020</Text>
              <Text style={styles.info2}>02:00pm</Text>
            </View>
            <View style={styles.lineStyle} />
            <View style={styles.totalWrapper}>
              <Text style={styles.totalName}>Total Payment</Text>
              <Text style={styles.totalValue}>$30</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.button} onPress={toPaymenPage}>
            <Text style={styles.buttontext}>Checkout now</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Footer />
    </ScrollView>
  );
}
