import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingEnd: 20,
    paddingStart: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  monthButtonNormal: {
    backgroundColor: '#FFF',
    borderColor: '#5F2EEA',
    borderWidth: 1,
    border: 'solid',
    marginRight: 5,
    width: 127,
    height: 42,
    borderRadius: 4,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  monthTextNormal: {
    fontSize: 14,
    fontWeight: '600',
    color: '#5F2EEA',
  },
  monthButtonPress: {
    backgroundColor: '#5F2EEA',
    borderColor: '#5F2EEA',
    borderWidth: 1,
    border: 'solid',
    marginRight: 5,
    width: 127,
    height: 42,
    borderRadius: 4,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  monthTextPress: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: '600',
  },
});
