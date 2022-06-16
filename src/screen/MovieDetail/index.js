import React, {useState} from 'react';
import {
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/Feather';
import IconEntypo from 'react-native-vector-icons/Entypo';
import Footer from '../../components/Footer';

// Select Dropdown
// import SelectDropdown from 'react-native-select-dropdown';
// const location = ['Jakarta', 'Bandung', 'Bogor', 'Bekasi', 'Depok'];

import Spiderman from '../../assets/images/spiderman.png';
import Ebuid from '../../assets/images/ebuid.png';

export default function MovieDetail(props) {
  const toOrderPage = () => {
    props.navigation.navigate('Order');
  };
  return (
    <ScrollView>
      <View style={styles.wrapper}>
        <View style={styles.container}>
          <View style={styles.card}>
            <Image style={styles.movieimg} source={Spiderman} />
          </View>
          <Text style={styles.title}>Spider-Man: Homecoming</Text>
          <Text style={styles.category}>Adventure, Action, Sci-Fi</Text>
          <View style={styles.wrapperdetail}>
            <View style={styles.left}>
              <Text style={styles.name}>Release date</Text>
              <Text style={styles.value}>June 28, 2017</Text>
            </View>
            <View style={styles.right}>
              <Text style={styles.name}>Directed by</Text>
              <Text style={styles.value}>Jon Watss</Text>
            </View>
          </View>
          <View style={styles.wrapperdetail}>
            <View style={styles.left}>
              <Text style={styles.name}>Duration</Text>
              <Text style={styles.value}>2 hrs 13 min</Text>
            </View>
            <View style={styles.right}>
              <Text style={styles.name}>Cast</Text>
              <Text style={styles.value}>
                Tom Holland, Robert asda Downey Jr., etc.
              </Text>
            </View>
          </View>
          <View style={styles.lineStyle} />
          <View style={styles.synopsis}>
            <Text style={styles.synopsisname}>Synopsis</Text>
            <Text style={styles.synopsisvalue}>
              Thrilled by his experience with the Avengers, Peter returns home,
              where he lives with his Aunt May, under the watchful eye of his
              new mentor Tony Stark, Peter tries to fall back into his normal
              daily routine - distracted by thoughts of proving himself to be
              more than just your friendly neighborhood Spider-Man - but when
              the Vulture emerges as a new villain, everything that Peter holds
              most important will be threatened.{' '}
            </Text>
          </View>
        </View>
        <View style={styles.wrapperShowTime}>
          <Text style={styles.showtimeTitle}>Showtimes and Tickets</Text>
          <TextInput
            icon={({color, size}) => (
              <Icon color={color} size={12} name="calendar" />
            )}
            style={styles.input}
            placeholder="Set a date"
          />

          {/* <SelectDropdown
            label="Select a city"
            style={styles.dropdown}
            data={location}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              // text represented after item is selected
              // if data array is an array of objects then return selectedItem.property to render after item is selected
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              // text represented for each item in dropdown
              // if data array is an array of objects then return item.property to represent item in dropdown
              return item;
            }}
          /> */}
          <TextInput
            icon={({color, size}) => (
              <IconEntypo color={color} size={size} name="location" />
            )}
            style={styles.input}
            placeholder="Set a location"
          />
          <View style={styles.scheduleCard}>
            <Image style={styles.cinema} source={Ebuid} />
            <Text style={styles.cinemaLocation}>
              Whatever street No.12, South Purwokerto
            </Text>
            <View style={styles.lineStyle} />
            <View style={styles.timeWrapper}>
              <Text style={styles.time}>08:30am</Text>
              <Text style={styles.time}>08:30am</Text>
              <Text style={styles.time}>08:30am</Text>
              <Text style={styles.time}>08:30am</Text>
              <Text style={styles.time}>08:30am</Text>
              <Text style={styles.time}>08:30am</Text>
              <Text style={styles.time}>08:30am</Text>
              <Text style={styles.time}>08:30am</Text>
            </View>
            <View style={styles.priceWrapper}>
              <Text style={styles.priceName}>Price</Text>
              <Text style={styles.priceValue}>$10.00/seat</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={toOrderPage}>
              <Text style={styles.buttonText}>Book now</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.scheduleCard}>
            <Image style={styles.cinema} source={Ebuid} />
            <Text style={styles.cinemaLocation}>
              Whatever street No.12, South Purwokerto
            </Text>
            <View style={styles.lineStyle} />
            <View style={styles.timeWrapper}>
              <Text style={styles.time}>08:30am</Text>
              <Text style={styles.time}>08:30am</Text>
              <Text style={styles.time}>08:30am</Text>
              <Text style={styles.time}>08:30am</Text>
              <Text style={styles.time}>08:30am</Text>
              <Text style={styles.time}>08:30am</Text>
              <Text style={styles.time}>08:30am</Text>
              <Text style={styles.time}>08:30am</Text>
            </View>
            <View style={styles.priceWrapper}>
              <Text style={styles.priceName}>Price</Text>
              <Text style={styles.priceValue}>$10.00/seat</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={toOrderPage}>
              <Text style={styles.buttonText}>Book now</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.viewMoreWrapper}>
            <View style={styles.viewMoreLine} />
            <Text style={styles.viewMoreText}>View More</Text>
            <View style={styles.viewMoreLine} />
          </View>
        </View>
      </View>
      <Footer {...props} />
    </ScrollView>
  );
}
