import React from 'react';
import {useSelector} from 'react-redux';
import {View, Text, StyleSheet, Image} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
// import {CLOUDINARY_URL} from 'react-native-dotenv';

import Icon from 'react-native-vector-icons/Feather';

import AsyncStorage from '@react-native-async-storage/async-storage';

function DrawerContent(props) {
  const profile = useSelector(state => state.user.data);
  console.log('first', profile);

  const handleLogout = async () => {
    try {
      alert('Logout');
      await AsyncStorage.clear();
      props.navigation.navigate('AuthScreen', {
        screen: 'Login',
      });
    } catch (error) {}
  };
  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <View style={styles.containerProfile}>
          <Image
            style={styles.avatar}
            source={{
              uri: `https://res.cloudinary.com/erikasempana/image/upload/v1655692721/${profile.image}`,
              // uri: `${CLOUDINARY_URL + profile.image}`,
            }}
          />
          <View style={styles.biodata}>
            <Text style={styles.title}>
              {profile.firstName + ' ' + profile.lastName}
            </Text>
            <Text style={styles.caption}>{profile.email}</Text>
          </View>
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View style={styles.containerSection}>
        <DrawerItem
          label="Logout"
          icon={({color, size}) => (
            <Icon color={color} size={size} name="log-out" />
          )}
          onPress={handleLogout}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerProfile: {
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    resizeMode: 'contain',
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    backgroundColor: 'gray',
  },
  biodata: {
    marginLeft: 15,
  },
  title: {
    fontSize: 16,
    marginBottom: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  containerSection: {
    marginBottom: 5,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 2,
  },
});

export default DrawerContent;
