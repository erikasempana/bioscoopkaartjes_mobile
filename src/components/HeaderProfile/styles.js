import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  wapper: {
    backgroundColor: '#E5E5E5',
  },
  card: {
    marginTop: -20,
    backgroundColor: '#FFF',
    borderRadius: 16,
    paddingVertical: 30,
    paddingHorizontal: 20,
    borderColor: 'rgba(186, 186, 186, 0.08)',
    borderBottomWidth: 1,

    elevation: 5,
  },
  totalWrapper: {
    display: 'flex',
    flexDirection: 'row',
    // justifyContent: 'space-between',
  },
  underline1: {
    marginTop: -20,
    marginBottom: -30,
    paddingTop: 30,
    width: 120,
    height: 70,
    marginHorizontal: 20,
  },
  underlineActive1: {
    marginTop: -20,
    marginBottom: -30,
    paddingTop: 30,
    width: 120,
    height: 70,
    borderBottomWidth: 2,
    marginHorizontal: 20,
    borderBottomColor: '#5F2EEA',
  },
  headerMenu: {
    flex: 1,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 26,
    color: '#AAA',
    textAlign: 'center',
    bottom: -10,
    paddingBottom: 15,
  },
  headerMenuActive: {
    flex: 1,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 26,
    color: '#14142B',
    alignSelf: 'center',
    bottom: -10,
  },
  headerMenu1: {
    flex: 1,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 26,
    color: '#AAA',
    textAlign: 'center',
    bottom: -10,
  },
  headerMenuActive1: {
    flex: 1,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 26,
    color: '#14142B',
    alignSelf: 'center',
    bottom: -10,
  },
});
