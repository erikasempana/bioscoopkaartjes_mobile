import React, {useEffect, useState} from 'react';
import {Image, View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {ScrollView} from 'react-native-gesture-handler';
import {GetMovieUpcoming} from '../../stores/actions/movie';

import Moviepict from '../../assets/images/spidermenc.png';

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
        {upComingMovie.map(item => (
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
