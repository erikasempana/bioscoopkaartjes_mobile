import React, {useState} from 'react';
import {TextInput, View} from 'react-native';
import styles from './styles';

export default function SearchName(props) {
  const [textSearch, setTextSearch] = useState(props.searchName);

  const handleSearch = text => {
    setTextSearch(text);
    // props.search({text});
  };

  return (
    <View>
      <TextInput
        style={styles.search}
        placeholder="Search Movie Name ..."
        // defaultValue={props.searchName}
        // onChangeText={handleSearch}
        onChangeText={text => handleSearch(text)}
        onEndEditing={() => props.search(textSearch)}
      />
    </View>
  );
}
