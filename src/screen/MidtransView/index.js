import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {WebView} from 'react-native-webview';

export default function MidtransView(props) {
  const redirectUrl = props.route.params.redirectUrl;

  const handleProfilePage = () => {
    props.navigation.replace('Profile');
  };
  const handleOrderHistoryPage = () => {
    props.navigation.replace('OrderHistory');
  };

  return (
    <View style={styles.container}>
      <View style={styles.wrapperContent}>
        <WebView source={{uri: redirectUrl}} style={styles.content} />
      </View>
      <View style={styles.wrapperButton}>
        <TouchableOpacity style={styles.button} onPress={handleProfilePage}>
          <Text style={styles.buttonText}>Go to Profile Page</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={handleOrderHistoryPage}>
          <Text style={styles.buttonText}>Go to Order History</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: '#FFF',
  },
  wrapperContent: {
    borderTopColor: '#5F2EEA',
    borderBottomColor: '#5F2EEA',
    flex: 1,
    marginBottom: 100,
    borderWidth: 2,
  },
  content: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  wrapperButton: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    top: -50,
  },
  button: {
    backgroundColor: '#5F2EEA',
    padding: 15,
    width: 150,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 13,
    color: 'white',
    fontWeight: '600',
    textAlign: 'center',
  },
});
