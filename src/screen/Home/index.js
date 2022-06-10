import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
import TagLine from '../../assets/images/nearest.png';
import ImageJumbotron from '../../assets/images/group.png';
import {ScrollView} from 'react-native-gesture-handler';

export default function Home() {
  return (
    <ScrollView>
      <View style={styles.wrapper}>
        <View style={styles.container}>
          <View style={styles.section1}>
            <Image style={styles.tagline} source={TagLine} />
            <Image style={styles.ImageJumbotron} source={ImageJumbotron} />
          </View>
        </View>
        <View style={styles.container2} />
      </View>
      <View style={styles.wrapper2}>
        <View style={styles.container2}>
          <View style={styles.section2}>
            <View style={styles.nowshowing}>
              <Text>Now Showing</Text>
            </View>
            <View style={styles.viewall}>
              <Text>view all</Text>
            </View>
          </View>
        </View>
        <View style={styles.container2} />
      </View>
    </ScrollView>
  );
}
