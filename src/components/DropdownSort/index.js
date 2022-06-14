import React, {useState} from 'react';
import {TextInput, View} from 'react-native';
import styles from './styles';
import DropDownPicker from 'react-native-dropdown-picker';
// import {
//   FormControl,
//   Select,
//   Center,
//   WarningOutlineIcon,
//   NativeBaseProvider,
// } from 'native-base';
// import Icon from 'react-native-vector-icons/AntDesign';

export default function Dropdown() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'},
  ]);
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <View style={styles.wrapsearch}>
          <View style={styles.wrapinput}>
            <TextInput
              id="text"
              style={styles.inputText}
              placeholder="location"
              placeholderTextColor="#fff"
              // onChangeText={handleEmail}
            />
            <DropDownPicker
              style={styles.dropdown}
              placeholder="Car"
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
            />
          </View>
          <View style={styles.wrapinput}>
            <TextInput
              id="date"
              style={styles.inputText}
              placeholder="Selected Date"
              placeholderTextColor="white"
              // onChangeText={handleEmail}
            />
            <DropDownPicker
              style={styles.dropdown}
              placeholder="Car"
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
            />
          </View>
        </View>
      </View>
    </View>
  );
}
