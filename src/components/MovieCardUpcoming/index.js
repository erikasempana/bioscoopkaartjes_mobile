import React, {useEffect} from 'react';
import {Image, View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {ScrollView} from 'react-native-gesture-handler';
import {GetMovieUpcoming} from '../../stores/actions/movie';

import Moviepict from '../../assets/images/default.png';

export default function MovieCard(props) {
  const dispatch = useDispatch();
  const upComingMovie = useSelector(state => state.movieUpcoming.data);

  // console.log('DATAA', upComingMovie);
  const getUpComingMovie = async () => {
    try {
      const params = new Date().getMonth() + 1;
      await dispatch(GetMovieUpcoming(params));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUpComingMovie();
  }, []);

  const toMovieDetail = item => {
    props.navigation.navigate('MovieDetail', {
      id: item.id,
    });
  };
  return (
    <ScrollView horizontal={true}>
      <View style={styles.container}>
        {upComingMovie.map(el => (
          <View key={el.id} style={styles.card}>
            <Image
              style={styles.imagepic}
              source={
                el.image
                  ? {
                      uri: `https://res.cloudinary.com/erikasempana/image/upload/v1655692721/${el.image}`,
                    }
                  : Moviepict
              }
            />
            <View style={styles.content}>
              <Text style={styles.title}>{el.name}</Text>
              <Text style={styles.category}>{el.category}</Text>
              <TouchableOpacity
                style={styles.detail}
                onPress={() => toMovieDetail(el)}>
                <Text style={styles.detailText}>Detail</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
