import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingEnd: 20,
    paddingStart: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: '#FFF',
    minHeight: 490,
  },
  shadow: {
    width: 327,
    height: 400,
    borderColor: '#FFF',
    borderRadius: 8,
    padding: 5,
    shadowColor: '#BABABA',
    elevation: 6,
  },
  card: {
    borderColor: '#FFF',
    borderWidth: 8,
    height: 395,
    borderRadius: 8,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    resizeMode: 'contain',
    width: 184,
    height: 57,
    marginBottom: 25,
  },
  input: {
    width: '90%',
    height: 40,
    marginBottom: 15,
    marginTop: 15,
    borderWidth: 1,
    padding: 10,
    borderColor: '#DEDEDE',
    borderRadius: 4,
    color: '#A0A3BD',
    fontSize: 12,
    fontWeight: '600',
    lineHeight: 22,
  },
  button: {
    width: '90%',
    height: 40,
    backgroundColor: '#5F2EEA',
    borderRadius: 4,
    padding: 5,
  },
  buttontext: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 26,
  },
  tagline: {
    marginTop: 30,
    width: 220,
    textAlign: 'center',
    color: '#6E7191',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 22,
  },
});
