import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import styles from './styles';
import {Text, TouchableOpacity, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {getAllMovieMonth, GetMovieUpcoming} from '../../stores/actions/movie';

export default function Month(props) {
  const dispatch = useDispatch();
  const [sortMonth, setSortMonth] = useState('');
  const [disabled, setDisabled] = useState(false);
  const monthList = [
    {id: 1, month: 'January'},
    {id: 2, month: 'February'},
    {id: 3, month: 'March'},
    {id: 4, month: 'April'},
    {id: 5, month: 'Mey'},
    {id: 6, month: 'June'},
    {id: 7, month: 'July'},
    {id: 8, month: 'August'},
    {id: 9, month: 'September'},
    {id: 10, month: 'October'},
    {id: 11, month: 'November'},
    {id: 12, month: 'December'},
  ];

  var touchButton = {
    activeOpacity: 1,
    underlayColor: '#5F2EEA',
  };
  const handlePressButton = async item => {
    try {
      setSortMonth(item.id);
      const params = item.id;
      await dispatch(GetMovieUpcoming(params));
      setDisabled(true);
      // // console.log('upcomingmovie', resultUpComingMovie.data.data);
      // setUpComingMovie(resultUpComingMovie.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  // const handleMonth = async () => {
  //   try {
  //     const id = props.route.params.id;
  //     const resultUpComingMovie = await axios.get(`movie/?searchRelease=${id}`);
  //     // console.log(
  //     //   'upcomingmovie',
  //     //   resultUpComingMovie.action.payload.data.data,
  //     // );
  //     setUpComingMovie(resultUpComingMovie.action.payload.data.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <ScrollView horizontal={true}>
      <View style={styles.container}>
        {monthList.map((item, idx) => (
          <TouchableOpacity
            // disabled={item.id === sortMonth ? disabled : false}
            {...touchButton}
            key={item.id}
            onPress={() => handlePressButton(item, idx)}
            style={[
              item.id === sortMonth
                ? styles.monthButtonPress
                : styles.monthButtonNormal,
            ]}>
            <Text
              style={[
                item.id === sortMonth
                  ? styles.monthTextPress
                  : styles.monthTextNormal,
              ]}>
              {item.month}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}
