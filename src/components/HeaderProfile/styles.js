import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  wapper: {
    backgroundColor: '#E5E5E5',
  },
  card: {
    marginTop: -25,
    backgroundColor: '#FFF',
    borderRadius: 16,
    paddingVertical: 30,
    paddingHorizontal: 20,
    borderColor: 'rgba(186, 186, 186, 0.08)',
    borderBottomWidth: 2,
    shadowColor: 'rgba(186, 186, 186, 0.08)',
    shadowRadius: 16,

    elevation: 5,
  },
  totalWrapper: {
    paddingTop: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  totalName: {
    flex: 1,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 26,
    color: '#AAA',
    alignSelf: 'center',
  },
  totalNameActive: {
    flex: 1,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 26,
    color: '#14142B',
    alignSelf: 'center',
  },
});
