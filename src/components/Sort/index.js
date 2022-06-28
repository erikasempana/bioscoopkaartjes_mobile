import React, {useState} from 'react';
import {View} from 'react-native';
import styles from './styles';
import DropDownPicker from 'react-native-dropdown-picker';

export default function Sort(props) {
  // Dropdown Picker
  const [openDropdown, setOpenDropdown] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'ASC', value: 'ASC'},
    {label: 'DESC', value: 'DESC'},
  ]);

  const handleSort = items => {
    props.sort(items);
  };
  return (
    <>
      <View style={styles.sort}>
        <DropDownPicker
          style={styles.dropdownSort}
          textStyle={styles.dropdownSort}
          placeholder="Sort"
          open={openDropdown}
          value={value}
          items={items}
          setOpen={setOpenDropdown}
          setValue={setValue}
          setItems={setItems}
          onSelectItem={items => handleSort(items)}
        />
      </View>
    </>
  );
}
