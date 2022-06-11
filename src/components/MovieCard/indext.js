import React from 'react';
import {Image, View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

import Moviepict from '../../assets/images/spidermenc.png';
import {ScrollView} from 'react-native-gesture-handler';

export default function MovieCard() {
  return (
    <ScrollView horizontal={true}>
      <View style={styles.container}>
        <View style={styles.card}>
          <Image style={styles.imagepic} source={Moviepict} />
          <View style={styles.content}>
            <Text style={styles.title}>Lion King</Text>
            <Text style={styles.category}>Action, Adventure, Sci-Fi</Text>
            <TouchableOpacity style={styles.detail}>
              <Text style={styles.detailText}>Detail</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.card}>
          <Image style={styles.imagepic} source={Moviepict} />
          <View style={styles.content}>
            <Text style={styles.title}>Lion King</Text>
            <Text style={styles.category}>Action, Adventure, Sci-Fi</Text>
            <TouchableOpacity style={styles.detail}>
              <Text style={styles.detailText}>Detail</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.card}>
          <Image style={styles.imagepic} source={Moviepict} />
          <View style={styles.content}>
            <Text style={styles.title}>Lion King</Text>
            <Text style={styles.category}>Action, Adventure, Sci-Fi</Text>
            <TouchableOpacity style={styles.detail}>
              <Text style={styles.detailText}>Detail</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.card}>
          <Image style={styles.imagepic} source={Moviepict} />
          <View style={styles.content}>
            <Text style={styles.title}>Lion King</Text>
            <Text style={styles.category}>Action, Adventure, Sci-Fi</Text>
            <TouchableOpacity style={styles.detail}>
              <Text style={styles.detailText}>Detail</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
