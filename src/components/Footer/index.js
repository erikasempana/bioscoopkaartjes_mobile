import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './styles';
import Logo from '../../assets/logo/logobiosscoopkaartjes.png';
import Cineone from '../../assets/images/cineone.png';
import Ebuid from '../../assets/images/ebuid.png';
import Hiflix from '../../assets/images/hiflix.png';
import Facebook from '../../assets/images/facebook.png';
import Instagram from '../../assets/images/instagram.png';
import Twitter from '../../assets/images/twitter.png';
import Youtube from '../../assets/images/youtube.png';

export default function Footer() {
  return (
    <View style={styles.container}>
      <View style={styles.logowrapper}>
        <Image style={styles.logo} source={Logo} />
        <Text style={styles.tagline}>
          Stop waiting in line. Buy tickets conveniently, watch movies quietly.
        </Text>
      </View>
      <View style={styles.wrapper}>
        <Text style={styles.sub}>Explore</Text>
        <View style={styles.explorelist}>
          <Text style={{paddingEnd: 20}}>Home</Text>
          <Text>List Movie</Text>
        </View>
      </View>
      <View style={styles.wrapper}>
        <Text style={styles.sub}>Our Sponsor</Text>
        <View style={styles.sponsorlist}>
          <Image style={styles.sponsorimg1} source={Ebuid} />
          <Image style={styles.sponsorimg2} source={Cineone} />
          <Image style={styles.sponsorimg3} source={Hiflix} />
        </View>
      </View>
      <View style={styles.wrapper}>
        <Text style={styles.sub}>Follow Us</Text>
        <View style={styles.followlist}>
          <Image style={styles.followimg} source={Facebook} />
          <Image style={styles.followimg} source={Instagram} />
          <Image style={styles.followimg} source={Twitter} />
          <Image style={styles.followimg} source={Youtube} />
        </View>
      </View>
      <Text style={styles.footer}>© 2020 Tickitz. All Rights Reserved.</Text>
    </View>
  );
}
