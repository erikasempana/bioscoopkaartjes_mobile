import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  wrapper: {
    backgroundColor: '#E5E5E5',
    // maxHeight: 100,
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
  },
  totalName: {
    flex: 1,
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 28,
    color: '#AAA',
  },
  totalValue: {
    textAlign: 'right',
    flex: 1,
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 32,
    color: '#14142B',
  },
});
