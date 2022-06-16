import React from 'react';
import {ScrollView, Text, View, Image, TouchableOpacity} from 'react-native';
import styles from './styles';

import Cineone from '../../assets/images/cineone.png';
import Footer from '../../components/Footer';

export default function OrderHistory(props) {
  const handleResultTickets = () => {
    props.navigation.navigate('TicketResult');
  };
  return (
    <ScrollView>
      <View style={styles.wrapper}>
        <View style={styles.container}>
          <View style={styles.card}>
            <Image style={styles.cinema} source={Cineone} />
            <Text style={styles.schedule}>Tuesday, 07 July 2020 - 04:30pm</Text>
            <Text style={styles.movieTitle}>Spider-Man: Homecoming</Text>
            <View style={styles.lineStyle} />
            <TouchableOpacity
              style={styles.buttonUpdate}
              onPress={handleResultTickets}>
              <Text style={styles.buttonUpdateText}>Ticket in active</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.card}>
            <Image style={styles.cinema} source={Cineone} />
            <Text style={styles.schedule}>Tuesday, 07 July 2020 - 04:30pm</Text>
            <Text style={styles.movieTitle}>Spider-Man: Homecoming</Text>
            <View style={styles.lineStyle} />
            <TouchableOpacity
              style={styles.buttonUsed}
              onPress={handleResultTickets}>
              <Text style={styles.buttonUsedText}>Ticket in active</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Footer {...props} />
    </ScrollView>
  );
}
