import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingEnd: 20,
    paddingStart: 20,
    display: 'flex',
    flexDirection: 'column',
    // justifyContent: 'space-evenly',
    backgroundColor: '#FFF',
    minHeight: 530,
  },
  logowrapper: {
    width: '100%',
  },
  logo: {
    resizeMode: 'contain',
    width: '60%',
  },
  tagline: {
    width: 200,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 24,
  },
  wrapper: {
    paddingTop: 30,
  },
  sub: {
    paddingBottom: 5,
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 28,
    color: '#000',
  },
  explorelist: {
    paddingTop: 15,
    display: 'flex',
    flexDirection: 'row',
  },
  sponsorlist: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    alignContent: 'space-around',
  },
  sponsorimg1: {
    resizeMode: 'contain',
    width: '27%',
  },
  sponsorimg2: {
    resizeMode: 'contain',
    width: '35%',
  },
  sponsorimg3: {
    resizeMode: 'contain',
    width: '25%',
    top: -5,
  },
  followlist: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    alignContent: 'space-around',
    paddingTop: 15,
  },
  footer: {
    paddingTop: 50,
  },
});
