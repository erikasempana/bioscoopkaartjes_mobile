import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  wrapper: {
    backgroundColor: '#F5F6F8',
    flex: 1,
  },
  container: {
    paddingTop: 40,
    paddingHorizontal: 30,
  },

  // QrCode ----------------
  cardQr: {
    backgroundColor: '#FFF',
    paddingTop: 20,
  },
  codeQr: {
    resizeMode: 'contain',
    width: 200,
    height: 200,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
  },

  // LineBottom
  roundWrapper3: {
    alignSelf: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    right: -7,
  },
  lineStyle3: {
    borderWidth: 1,
    borderColor: '#DEDEDE',
    marginTop: 30,
    width: 270,
    borderStyle: 'dashed',
  },
  round3: {
    bottom: -10,
    width: 30,
    height: 30,
    borderRadius: 150 / 2,
    overflow: 'hidden',
    borderWidth: 3,
    borderColor: '#F5F6F8',
    backgroundColor: '#F5F6F8',
  },
  // End LineBottom
  // End QrCode ----------------

  card: {
    backgroundColor: '#FFF',
    borderRadius: 16,
    padding: 25,
    marginBottom: 30,
    flexWrap: 'wrap',
  },

  cardUsed: {
    bottom: -20,
    backgroundColor: '#FFF',
    borderRadius: 16,
    padding: 25,
    marginBottom: 30,
    flexWrap: 'wrap',
    maxWidth: 320,
  },

  // LineBottom
  roundWrapper2: {
    alignSelf: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    // marginHorizontal: 40,
  },
  lineStyle2: {
    borderWidth: 1,
    borderColor: '#DEDEDE',
    marginTop: -25,
    marginBottom: 25,
    width: 270,
    borderStyle: 'dashed',
  },
  round2: {
    marginTop: -35,
    width: 30,
    height: 30,
    borderRadius: 150 / 2,
    overflow: 'hidden',
    borderWidth: 3,
    borderColor: '#F5F6F8',
    backgroundColor: '#F5F6F8',
  },
  // End LineBottom

  wrapperDetail: {
    paddingTop: 40,
    display: 'flex',
    flexDirection: 'column',
  },
  detail: {
    display: 'flex',
    flexDirection: 'row',
    paddingBottom: 20,
    justifyContent: 'space-around',
  },
  detailLeft: {
    alignSelf: 'flex-start',
    left: -10,
  },
  detailRight: {
    alignSelf: 'flex-start',
    left: -30,
  },
  detailName: {
    flex: 1,
    textAlign: 'left',
    fontSize: 12,
    fontWeight: '600',
    lineHeight: 22,
    color: '#AAA',
  },
  detailValue: {
    flex: 1,
    textAlign: 'left',
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 26,
    color: '#14142B',
  },
  detailTotal: {
    marginTop: 20,
    left: -20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderColor: '#DEDEDE',
    borderWidth: 1,
    borderRadius: 4,
  },
  total: {
    flex: 1,
    justifyContent: 'space-between',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
    paddingVertical: 10,
    color: '#000',
  },
});
