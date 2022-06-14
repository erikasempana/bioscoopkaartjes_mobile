import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './styles';
import Iconbar from '../../assets/icon/menu-right-alt.png';

import Logo from '../../assets/logo/logobiosscoopkaartjes.png';

export default function Header(props) {
  const openDrawer = () => {
    props.navigation.openDrawer();
  };
  return (
    <View style={styles.header}>
      <View style={{flex: 1}}>
        <Image style={styles.logo} source={Logo} />
      </View>
      <TouchableOpacity onPress={openDrawer}>
        <Image style={styles.iconbar} source={Iconbar} />
      </TouchableOpacity>
    </View>
  );
}
