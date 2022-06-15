import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  wrapper: {
    backgroundColor: '#F5F6F8',
    flex: 1,
    minHeight: 950,
  },
  container: {
    // backgroundColor: '#E5E5E5',
    paddingTop: 20,
    paddingEnd: 20,
    paddingStart: 20,
  },
  titileTop: {
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 34,
    color: '#14142B',
    marginTop: 20,
  },
  filter: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: -25,
  },
  sort: {
    width: 100,
    height: 15,
    marginVertical: 30,
  },
  dropdownSort: {
    borderColor: '#DEDEDE',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 21,
    color: '#4E4B66',
    borderRadius: 16,
    backgroundColor: '#FCFDFE',
  },
  search: {
    width: 205,
    height: 48,
    backgroundColor: '#FCFDFE',
    marginVertical: 30,
    borderColor: '#DEDEDE',
    borderRadius: 16,
  },
  //   card
  wrappercard: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: '#FFF',
    borderColor: '#FFF',
    borderWidth: 2,
    marginRight: 10,
    marginTop: 40,
    marginBottom: 10,
    borderRadius: 6,
    width: 155,
    height: 353,
  },
  imagepic: {
    margin: 15,
    resizeMode: 'contain',
    width: 122,
    top: -90,
  },
  content: {
    top: -175,
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
