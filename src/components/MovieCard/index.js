import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {Image, View, Text, TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import styles from './styles';
import {GetMovieNowShowing} from '../../stores/actions/movie';

import Moviepict from '../../assets/images/spidermenc.png';
import {useEffect} from 'react';

export default function MovieCard(props) {
  const dispatch = useDispatch();
  const [nowShowing, setNowShowing] = useState([]);

  const getNowShowing = async () => {
    try {
      const month = new Date().getMonth();
      const resultNowShowing = await dispatch(GetMovieNowShowing(month));
      // console.log('result', resultNowShowing.action.payload.data.data);
      setNowShowing(resultNowShowing.action.payload.data.data);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    getNowShowing();
  }, []);

  const toMovieDetail = item => {
    props.navigation.navigate('MovieDetail', {id: item.id});
  };
  return (
    <ScrollView horizontal={true}>
      <View style={styles.container}>
        {nowShowing.map(item => (
          <View key={item.id} style={styles.card}>
            <Image
              style={styles.imagepic}
              source={
                item.image
                  ? {
                      uri: `https://res.cloudinary.com/erikasempana/image/upload/v1655692721/${item.image}`,
                    }
                  : Moviepict
              }
            />
            <View style={styles.content}>
              <Text style={styles.title}>{item.name}</Text>
              <Text style={styles.category}>{item.category}</Text>
              <TouchableOpacity
                style={styles.detail}
                onPress={() => toMovieDetail(item)}>
                <Text style={styles.detailText}>Detail</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
