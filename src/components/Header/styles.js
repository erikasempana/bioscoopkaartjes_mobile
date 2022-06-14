import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#FFF',
    shadowColor: '#000',
    elevation: 6,
    height: 91,
  },
  logo: {
    resizeMode: 'contain',
    height: '40%',
    left: -178,
  },
  iconbar: {
    resizeMode: 'contain',
    height: '50%',
    right: -120,
  },
});
