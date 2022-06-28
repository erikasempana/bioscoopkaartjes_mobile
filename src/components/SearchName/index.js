import React from 'react';
import {TextInput, View} from 'react-native';
import styles from './styles';

export default function SearchName(props) {
  const handleSearch = text => {
    props.search({text});
  };

  return (
    <View>
      <TextInput
        style={styles.search}
        placeholder="Search Movie Name ..."
        // defaultValue={props.searchName}
        onChangeText={text => handleSearch(text)}
      />
    </View>
  );
}
