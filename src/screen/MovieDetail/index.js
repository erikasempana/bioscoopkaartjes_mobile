import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {dataOrder, getAllSchedule} from '../../stores/actions/schedule';
import {
  ActivityIndicator,
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/Feather';
import IconEntypo from 'react-native-vector-icons/Entypo';
import Footer from '../../components/Footer';

// import Spiderman from '../../assets/images/spiderman.png';
import Ebuid from '../../assets/images/ebuid.png';
import {getMovieById} from '../../stores/actions/movie';
import {ItemClick} from 'native-base/lib/typescript/components/composites/Typeahead/useTypeahead/types';
('');

// Select Dropdown
// import SelectDropdown from 'react-native-select-dropdown';
// const location = ['Jakarta', 'Bandung', 'Bogor', 'Bekasi', 'Depok'];

export default function MovieDetail(props) {
  const id = props.route.params.id;
  const dispatch = useDispatch();
  const detailMovie = useSelector(state => state.movie.data);
  // const scheduleMovie = useSelector(state => state.schedule.data);
  const [scheduleMovie, setScheduleMovie] = useState([]);
  console.log('movieSchedule', scheduleMovie);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(8);
  const [refresh, setRefresh] = useState(false);
  const [loading, setLoading] = useState(false);
  const [last, setLast] = useState(false);
  const [loadMore, setLoadMore] = useState(false);
  const [dataDetailOrder, setDataDetailOrder] = useState({
    movieId: id,
    dateBooking: new Date().toISOString().split('T')[0],
  });

  useEffect(() => {
    getDetailMovie();
    getScheduleMovie();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      getScheduleMovie();
    }, 2000);
  }, [page]);

  const changeDataBooking = data => {
    setDataDetailOrder({...dataDetailOrder, ...data});
  };

  const getDetailMovie = async () => {
    try {
      console.log(id);
      const resultSchedulelMovie = await dispatch(getMovieById(id));
      // console.log('detaill', resultDetailMovie);
      setScheduleMovie(resultSchedulelMovie.action.payload.data.data);
    } catch (error) {
      console.log(error.response);
    }
  };

  const getScheduleMovie = async () => {
    try {
      const page = 1;
      await dispatch(getAllSchedule(page));
    } catch (error) {
      console.log(error);
    }
  };

  // const getScheduleMovie = async () => {
  //   try {
  //     setRefresh(false);
  //     setLoading(false);
  //     setLoadMore(false);
  //     if (page <= totalPage) {
  //       const resultSchedulelMovie = await dispatch(getAllSchedule(page));
  //       // console.log(
  //       //   'DATA SCHEDULE',
  //       //   resultSchedulelMovie.action.payload.data.data,
  //       // );
  //       if (page === 1) {
  //       } else {
  //         setScheduleMovie(
  //           ...scheduleMovie,
  //           ...resultSchedulelMovie.action.payload.data.data,
  //         );
  //       }
  //       setTotalPage(
  //         resultSchedulelMovie.action.payload.data.pagination.totalPage,
  //       );
  //     } else {
  //       setLast(true);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const handleRefresh = () => {
    console.log('REFRESH SCREEN');
    setPage(1);
    setLast(false);
    if (page !== 1) {
      setRefresh(true);
    } else {
      getScheduleMovie();
    }
  };

  const handleLoadMore = () => {
    console.log('LOAD MORE DATA');
    if (!loadMore) {
      const newPage = page + 1;
      setLoadMore(true);
      if (newPage <= totalPage + 1) {
        setLoading(true);
        setPage(newPage);
      } else {
        setLoading(false);
      }
    }
  };

  // console.log(props);

  const rupiah = number => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
    }).format(number);
  };

  const handleBookNow = price => {
    const body = {
      ...dataDetailOrder,
      price,
    };
    dispatch(dataOrder(body));
    props.navigation.navigate('Order');
  };

  const ListHeader = () => {
    return (
      <>
        <View style={styles.card}>
          <Image
            style={styles.movieimg}
            source={{
              uri: `https://res.cloudinary.com/erikasempana/image/upload/v1655692721/${detailMovie.image}`,
              // uri: `${CLOUDINARY_URL + profile.image}`,
            }}
          />
        </View>
        <Text style={styles.title}>{detailMovie.name}</Text>
        <Text style={styles.category}>{detailMovie.category}</Text>
        <View style={styles.wrapperdetail}>
          <View style={styles.left}>
            <Text style={styles.name}>Release date</Text>
            <Text style={styles.value}>
              {/* <Moment format="MMMM DD YYYY">{detailMovie.releaseDate}</Moment> */}
              {detailMovie.releaseDate.split('T')[0]}
            </Text>
          </View>
          <View style={styles.right}>
            <Text style={styles.name}>Directed by</Text>
            <Text style={styles.value}>{detailMovie.director}</Text>
          </View>
        </View>
        <View style={styles.wrapperdetail}>
          <View style={styles.left}>
            <Text style={styles.name}>Duration</Text>
            <Text style={styles.value}>{detailMovie.duration}</Text>
          </View>
          <View style={styles.right}>
            <Text style={styles.name}>Cast</Text>
            <Text style={styles.value}>{detailMovie.casts}</Text>
          </View>
        </View>
        <View style={styles.lineStyle} />
        <View style={styles.synopsis}>
          <Text style={styles.synopsisname}>Synopsis</Text>
          <Text style={styles.synopsisvalue}>{detailMovie.synopsis}</Text>
        </View>
        <View style={styles.wrapperShowTime}>
          <Text style={styles.showtimeTitle}>Showtimes and Tickets</Text>
          <TextInput
            icon={({color, size}) => (
              <Icon color={color} size={12} name="calendar" />
            )}
            style={styles.input}
            placeholder="Set a date"
          />
          <TextInput
            icon={({color, size}) => (
              <IconEntypo color={color} size={size} name="location" />
            )}
            style={styles.input}
            placeholder="Set a location"
          />
        </View>
      </>
    );
  };

  return (
    <ScrollView>
      <View style={styles.wrapper}>
        <View style={styles.container}>
          <ListHeader />
          {scheduleMovie.map(el => (
            <View key={el.id} style={styles.scheduleCard}>
              <Image style={styles.cinema} source={Ebuid} />
              <Text style={styles.cinemaLocation}>{el.location}</Text>
              <View style={styles.lineStyle} />
              <View style={styles.timeWrapper}>
                {/* {el.time.split(',')[0].map(itemTime => (
                  <TouchableOpacity
                    key={itemTime}
                    style={styles.time}
                    onPress={() =>
                      changeDataBooking({
                        timeBooking: itemTime,
                        scheduleId: el.id,
                      })
                    }>
                    {itemTime}
                  </TouchableOpacity>
                ))} */}
                {el.time}
                {/* <FlatList
                data={el.time.split(',')}
                keyExtractor={itemTime => itemTime}
                renderItem={({itemTime}) => (
                  <TouchableOpacity
                    style={styles.time}
                    onPress={() =>
                      changeDataBooking({
                        timeBooking: itemTime,
                        scheduleId: el.id,
                      })
                    }>
                    {itemTime}
                  </TouchableOpacity>
                )}
              /> */}
                <Text style={styles.time}>08:30am</Text>
                <Text style={styles.time}>08:30am</Text>
                <Text style={styles.time}>08:30am</Text>
                <Text style={styles.time}>08:30am</Text>
                <Text style={styles.time}>08:30am</Text>
                <Text style={styles.time}>08:30am</Text>
                <Text style={styles.time}>08:30am</Text>
                <Text style={styles.time}>08:30am</Text>
              </View>
              <View style={styles.priceWrapper}>
                <Text style={styles.priceName}>Price</Text>
                {/* <Text style={styles.priceValue}>{rupiah(el.price)}/seat</Text> */}
                <Text style={styles.priceValue}>{el.price}/seat</Text>
              </View>
              <TouchableOpacity
                style={styles.button}
                onPress={() => handleBookNow(el.price)}>
                <Text style={styles.buttonText}>Book now</Text>
              </TouchableOpacity>
            </View>
          ))}
          {/* <FlatList
          data={scheduleMovie}
          ListHeaderComponent={ListHeader}
          keyExtractor={el => el.id}
          renderItem={({el}) => (
            <View style={styles.scheduleCard}>
              <Image style={styles.cinema} source={Ebuid} />
              <Text style={styles.cinemaLocation}>{el.location}</Text>
              <View style={styles.lineStyle} />
              <View style={styles.timeWrapper}>
                <FlatList
                  data={el.time.split(',')}
                  keyExtractor={itemTime => itemTime}
                  renderItem={({itemTime}) => (
                    <TouchableOpacity
                      style={styles.time}
                      onPress={() =>
                        changeDataBooking({
                          timeBooking: itemTime,
                          scheduleId: el.id,
                        })
                      }>
                      {itemTime}
                    </TouchableOpacity>
                  )}
                />
                <Text style={styles.time}>08:30am</Text>
                <Text style={styles.time}>08:30am</Text>
                <Text style={styles.time}>08:30am</Text>
                <Text style={styles.time}>08:30am</Text>
                <Text style={styles.time}>08:30am</Text>
                <Text style={styles.time}>08:30am</Text>
                <Text style={styles.time}>08:30am</Text>
                <Text style={styles.time}>08:30am</Text>
              </View>
              <View style={styles.priceWrapper}>
                <Text style={styles.priceName}>Price</Text>
                <Text style={styles.priceValue}>{rupiah(el.priece)}/seat</Text>
              </View>
              <TouchableOpacity
                style={styles.button}
                onPress={() => handleBookNow(el.price)}>
                <Text style={styles.buttonText}>Book now</Text>
              </TouchableOpacity>
            </View>
          )}
          onRefresh={handleRefresh}
          refreshing={refresh}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0.1}
          ListFooterComponent={() =>
            last ? (
              <>
                <View style={styles.viewMoreWrapper}>
                  <View style={styles.viewMoreLine} />
                  <Text style={styles.viewMoreText}>no more data</Text>
                  <View style={styles.viewMoreLine} />
                </View>
                <Footer {...props} />
              </>
            ) : loading ? (
              <ActivityIndicator size="large" color="blue" />
            ) : null
          }
        /> */}
          <View style={styles.viewMoreWrapper}>
            <View style={styles.viewMoreLine} />
            <Text style={styles.viewMoreText}>no more data</Text>
            <View style={styles.viewMoreLine} />
          </View>
        </View>
      </View>
      <Footer {...props} />
    </ScrollView>
  );
}
