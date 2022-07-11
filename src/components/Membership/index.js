import React from 'react';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import styles from './styles';

import MemberTitle from '../../assets/images/membership.png';

export default function Membership() {
  return (
    <View style={styles.container}>
      <View style={styles.shadow}>
        <View style={styles.card}>
          <Image style={styles.image} source={MemberTitle} />
          <TextInput
            style={styles.input}
            placeholderTextColor={'rgba(134, 146, 166, 1)'}
            placeholder="Type your email"
          />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttontext}>Join now</Text>
          </TouchableOpacity>
          <Text style={styles.tagline}>
            By joining you as a Tickitz member, {'\n'}we will always send you{' '}
            {'\n'}
            the latest updates via email .
          </Text>
        </View>
      </View>
    </View>
  );
}
