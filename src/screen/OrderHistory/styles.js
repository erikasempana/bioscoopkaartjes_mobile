import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  wrapper: {
    backgroundColor: '#F5F6F8',
    flex: 1,
  },
  container: {
    paddingTop: 40,
    paddingEnd: 20,
    paddingStart: 20,
  },
  card: {
    backgroundColor: '#FFF',
    borderRadius: 16,
    padding: 25,
    marginBottom: 30,
    flexWrap: 'wrap',
  },
  lineStyle: {
    borderWidth: 0.5,
    borderColor: '#DEDEDE',
    marginTop: 10,
    width: 320,
    marginHorizontal: -25,
  },
  cinema: {
    resizeMode: 'contain',
    width: 110,
  },
  schedule: {
    paddingTop: 15,
    fontWeight: '400',
    fontSize: 13,
    lineHeight: 22,
    color: '#AAA',
  },
  movieTitle: {
    paddingTop: 15,
    fontWeight: '600',
    fontSize: 24,
    lineHeight: 28,
    color: '#000',
  },
  buttonUpdate: {
    bottom: -10,
    marginVertical: 10,
    height: 40,
    width: '100%',
    backgroundColor: '#00BA88',
    borderRadius: 8,
  },
  buttonUpdateText: {
    textAlign: 'center',
    paddingVertical: 4,
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 28,
    color: '#F7F7FC',
  },
  buttonUsed: {
    bottom: -10,
    marginVertical: 10,
    height: 40,
    width: '100%',
    backgroundColor: '#6E7191',
    borderRadius: 8,
  },
  buttonUsedText: {
    textAlign: 'center',
    paddingVertical: 4,
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 28,
    color: '#F7F7FC',
  },
});
