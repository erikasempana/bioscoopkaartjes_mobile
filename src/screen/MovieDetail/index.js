import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getMovieById} from '../../stores/actions/movie';
import {
  dataOrder,
  getScheduleById,
  getScheduleByMovieId,
} from '../../stores/actions/schedule';
import {
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

import DefaultPict from '../../assets/images/default.png';

// Select Dropdown
// import SelectDropdown from 'react-native-select-dropdown';
// const location = ['Jakarta', 'Bandung', 'Bogor', 'Bekasi', 'Depok'];

export default function MovieDetail(props) {
  const id = props.route.params.id;
  const dispatch = useDispatch();
  const detailMovie = useSelector(state => state.movie.data);
  const scheduleMovie2 = useSelector(state => state.scheduleByMovieId.data);
  const [scheduleMovie, setScheduleMovie] = useState([]);
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
    console.log('TOUCH BY YOU', data);
  };

  const getDetailMovie = async () => {
    try {
      await dispatch(getMovieById(id));
    } catch (error) {
      console.log(error.response);
    }
  };

  const getScheduleMovie = async () => {
    try {
      const movieId = id;
      const result = await dispatch(getScheduleByMovieId(movieId));
      setScheduleMovie(result.action.payload.data.data);
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

  const convertToRupiah = angka => {
    var rupiah = '';
    var angkarev = angka.toString().split('').reverse().join('');
    for (var i = 0; i < angkarev.length; i++) {
      if (i % 3 === 0) {
        rupiah += angkarev.substr(i, 3) + '.';
      }
    }
    return (
      'Rp ' +
      rupiah
        .split('', rupiah.length - 1)
        .reverse()
        .join('')
    );
  };

  const tConvert = time => {
    // Check correct time format and split into components
    time = time
      .toString()
      .match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

    if (time.length > 1) {
      // If time format correct
      time = time.slice(1); // Remove full string match value
      time[5] = +time[0] < 12 ? ' AM' : ' PM'; // Set AM/PM
      time[0] = +time[0] % 12 || 12; // Adjust hours
    }
    return time.join(''); // return adjusted time or original string
  };

  const handleBookNow = async price => {
    try {
      const body = {
        ...dataDetailOrder,
        price,
      };
      console.log('price', dataDetailOrder);
      const scheduleId = dataDetailOrder.scheduleId;
      await dispatch(dataOrder(body));
      await dispatch(getScheduleById(scheduleId));
      props.navigation.replace('Order', {movieId: id, price, scheduleId});
    } catch (error) {
      console.log(error);
    }
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
              {/* {detailMovie.releaseDate.split('T')[0]} */}
              {detailMovie.releaseDate}
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
          <View style={styles.wrapperShowTime}>
            {scheduleMovie2.map(el => (
              <View key={el.id} style={styles.scheduleCard}>
                <Text style={styles.cinema}>{el.premiere}</Text>
                <Text style={styles.cinemaLocation}>{el.location}</Text>
                <View style={styles.lineStyle} />
                <View style={styles.timeWrapper}>
                  {el.time.split(', ').map(itemTime => (
                    <TouchableOpacity
                      key={itemTime}
                      onPress={() =>
                        changeDataBooking({
                          timeBooking: itemTime,
                          scheduleId: el.id,
                          // premiere:
                        })
                      }>
                      <Text style={styles.time}>{tConvert(itemTime)}</Text>
                    </TouchableOpacity>
                  ))}
                  {/* {el.time} */}
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
                </View>
                <View style={styles.priceWrapper}>
                  <Text style={styles.priceName}>Price</Text>
                  {/* <Text style={styles.priceValue}>{rupiah(el.price)}/seat</Text> */}
                  <Text style={styles.priceValue}>
                    {convertToRupiah(el.price)}/seat
                  </Text>
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
      </View>
      <Footer {...props} />
    </ScrollView>
  );
}
