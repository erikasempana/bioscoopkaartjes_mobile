import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    paddingEnd: 20,
    paddingStart: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  card: {
    borderColor: '#FFF',
    borderWidth: 2,
    marginRight: 10,
    marginTop: 40,
    marginBottom: 50,
    borderRadius: 6,
    width: 160,
    height: 353,
  },
  imagepic: {
    margin: 17,
    resizeMode: 'contain',
    width: 122,
  },
  content: {
    marginRight: 20,
    marginLeft: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 17.5,
    color: '#000',
    textAlign: 'center',
    minHeight: 30,
  },
  category: {
    marginTop: 10,
    textAlign: 'center',
    lineHeight: 13.75,
    minHeight: 30,
  },
  detail: {
    marginTop: 10,
    borderColor: '#5F2EEA',
    borderWidth: 1,
    borderRadius: 4,
  },
  detailText: {
    textAlign: 'center',
    margin: 5,
    color: '#5F2EEA',
  },
});
