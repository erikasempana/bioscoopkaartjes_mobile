import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';
import Month from '../../components/Month';
import Moviepict from '../../assets/images/spiderman.png';
import Footer from '../../components/Footer';

// Dropdown Picker
import DropDownPicker from 'react-native-dropdown-picker';

export default function ViewAll(props) {
  // Dropdown Picker
  const [openDropdown, setOpenDropdown] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'ASC', value: 'ASC'},
    {label: 'DESC', value: 'DESC'},
  ]);
  const toMovieDetail = () => {
    props.navigation.navigate('MovieDetail');
  };
  return (
    <ScrollView>
      <View style={styles.wrapper}>
        <View style={styles.container}>
          {/* <Dropdown /> */}
          <Text style={styles.titileTop}> List Movie</Text>
          <View style={styles.filter}>
            {/* Dropdown Picker */}
            <View style={styles.sort}>
              <DropDownPicker
                style={styles.dropdownSort}
                placeholder="Sort"
                open={openDropdown}
                value={value}
                items={items}
                setOpen={setOpenDropdown}
                setValue={setValue}
                setItems={setItems}
              />
            </View>
            {/* End Dropdown Picker */}

            <TextInput
              style={styles.search}
              placeholder="Search Movie Name ..."
            />
          </View>
          <Month />
          <View style={styles.wrappercard}>
            <View style={styles.card}>
              <Image style={styles.imagepic} source={Moviepict} />
              <View style={styles.content}>
                <Text style={styles.title}>Lion King</Text>
                <Text style={styles.category}>Action, Adventure, Sci-Fi</Text>
                <TouchableOpacity style={styles.detail} onPress={toMovieDetail}>
                  <Text style={styles.detailText}>Detail</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.card}>
              <Image style={styles.imagepic} source={Moviepict} />
              <View style={styles.content}>
                <Text style={styles.title}>Lion King</Text>
                <Text style={styles.category}>Action, Adventure, Sci-Fi</Text>
                <TouchableOpacity style={styles.detail} onPress={toMovieDetail}>
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
                <TouchableOpacity style={styles.detail} onPress={toMovieDetail}>
                  <Text style={styles.detailText}>Detail</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.card}>
              <Image style={styles.imagepic} source={Moviepict} />
              <View style={styles.content}>
                <Text style={styles.title}>Lion King</Text>
                <Text style={styles.category}>Action, Adventure, Sci-Fi</Text>
                <TouchableOpacity style={styles.detail} onPress={toMovieDetail}>
                  <Text style={styles.detailText}>Detail</Text>
                </TouchableOpacity>
              </View>
            </View>
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
