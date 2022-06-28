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

  console.log(props.data);

  var touchButton = {
    activeOpacity: 1,
    underlayColor: '#5F2EEA',
  };
  const handlePressButton = async item => {
    try {
      //pemanggilan fungsi
      props.sortMonth(item.id);
      await dispatch(GetMovieUpcoming(item.id));

      // setSortMonth(item.id);
      // const params = item.id;
      // await dispatch(getAllMovieMonth(item.id));
      // setDisabled(true);
      // // console.log('upcomingmovie', resultUpComingMovie.data.data);
      // setUpComingMovie(resultUpComingMovie.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ScrollView horizontal={true}>
      <View style={styles.container}>
        {monthList.map(item => (
          <TouchableOpacity
            // disabled={item.id === sortMonth ? disabled : false}
            {...touchButton}
            key={item.id}
            onPress={() => handlePressButton(item)}
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
