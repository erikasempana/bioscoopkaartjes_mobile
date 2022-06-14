import React from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
// import Dropdown from '../../components/DropdownSort';
import Month from '../../components/Month';
// import Icon from 'react-native-vector-icons/Entypo';
import Moviepict from '../../assets/images/spiderman.png';
import Footer from '../../components/Footer';

export default function ViewAll() {
  return (
    <ScrollView>
      <View style={styles.wrapper}>
        <View style={styles.container}>
          {/* <Dropdown /> */}
          <Month />
          <View style={styles.wrappercard}>
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
          <View style={styles.wrappercard}>
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
        </View>
      </View>
      <Footer />
    </ScrollView>
  );
}
