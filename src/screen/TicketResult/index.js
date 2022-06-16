import React from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import styles from './styles';

import QRCode from '../../assets/images/QRCode.png';
import Footer from '../../components/Footer';

export default function TicketResult(props) {
  return (
    <ScrollView>
      <View style={styles.wrapper}>
        <View style={styles.container}>
          <View style={styles.card}>
            <Image style={styles.codeQr} source={QRCode} />
            <View style={styles.roundWrapper}>
              <View style={styles.round} />
              <View style={styles.lineStyle1} />
              <View style={styles.round} />
            </View>
            <View style={styles.wrapperDetail}>
              <View style={styles.detail}>
                <View style={styles.detailLeft}>
                  <Text style={styles.detailName}>Movie</Text>
                  <Text style={styles.detailValue}>Spider-Man: ..</Text>
                </View>
                <View style={styles.detailRight}>
                  <Text style={styles.detailName}>Category</Text>
                  <Text style={styles.detailValue}>Action</Text>
                </View>
              </View>
              <View style={styles.detail}>
                <View style={styles.detailLeft}>
                  <Text style={styles.detailName}>Date</Text>
                  <Text style={styles.detailValue}>07 Jul</Text>
                </View>
                <View style={styles.detailRight}>
                  <Text style={styles.detailName}>Time</Text>
                  <Text style={styles.detailValue}>2:00pm</Text>
                </View>
              </View>
              <View style={styles.detail}>
                <View style={styles.detailLeft}>
                  <Text style={styles.detailName}>Count</Text>
                  <Text style={styles.detailValue}>3 pcs</Text>
                </View>
                <View style={styles.detailRight}>
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
