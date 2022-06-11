import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  wrapper: {
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
  container: {
    paddingTop: 50,
    paddingEnd: 20,
    paddingStart: 20,
  },
  logo: {
    resizeMode: 'contain',
    width: '50%',
  },
  signin: {
    fontSize: 26,
    color: 'black',
    fontWeight: 'bold',
  },
  tagline: {
    top: 10,
    fontSize: 15,
  },
  inputwrapper: {
    top: 25,
  },
  inputlabel: {
    color: '#4E4B66',
    paddingTop: 10,
    paddingBottom: 5,
  },
  input1: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    padding: 10,
    borderColor: '#DEDEDE',
    borderRadius: 4,
    color: '#A0A3BD',
    marginBottom: 20,
  },
  button: {
    top: 15,
    width: '100%',
    height: 40,
    backgroundColor: '#5F2EEA',
    borderRadius: 12,
    padding: 10,
  },
  buttontext: {
    textAlign: 'center',
    color: '#FFFFFF',
  },
});
