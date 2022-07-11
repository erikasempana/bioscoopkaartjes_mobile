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
import DatePicker from 'react-native-date-picker';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);

import DefaultPict from '../../assets/images/default.png';

// Select Dropdown
import SelectDropdown from 'react-native-select-dropdown';
const location = ['DKI Jakarta', 'Bandung', 'Bogor', 'Tangerang', 'Lampung'];

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
  const [selectedLocation, setSelectedLocation] = useState('');
  const [dateBooking, setDateBooking] = useState(new Date());
  const [openCalender, setOpenCalender] = useState(false);
  const [dataDetailOrder, setDataDetailOrder] = useState({
    movieId: id,
  });
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedPremiereId, setselectedPremiereId] = useState('');
  const [dataDateBooking, setDataDateBooking] = useState('');

  useEffect(() => {
    getDetailMovie();
    getScheduleMovie();
  }, []);

  useEffect(() => {
    getScheduleMovie();
    getDetailMovie();
  }, [page, id]);

  const changeDataBooking = data => {
    setDataDetailOrder({
      ...dataDetailOrder,
      ...data,
      dateBooking: dateBooking.toISOString().split('T')[0],
    });
    setSelectedTime(data.timeBooking);
    setselectedPremiereId(data.scheduleId);
  };
  console.log(dataDetailOrder);

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
  const handleRefresh = () => {
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

  const handleBookNow = async price => {
    try {
      const scheduleId = selectedPremiereId;
      const body = {
        movieId: id,
        price,
        scheduleId,
        selectedTime,
        dataDateBooking,
      };
      await dispatch(dataOrder(body));
      await dispatch(getScheduleById(scheduleId));
      props.navigation.replace('Order', {
        movieId: id,
        price,
        scheduleId,
        selectedTime,
      });
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
              {dayjs(detailMovie.releaseDate).format('MMMM D, YYYY')}
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

          {/* date picker */}
          <View>
            <TouchableOpacity
              style={styles.selectday}
              onPress={() => setOpenCalender(true)}>
              <View style={styles.iconCalendar}>
                <Icon color={'grey'} size={20} name="calendar" />
              </View>
              <View style={styles.input}>
                <TextInput
                  editable={false}
                  placeholderTextColor={'rgba(160, 163, 189, 1)'}
                  placeholder={`${dayjs(dateBooking).format('YYYY-MM-DD')}`}
                />
              </View>
            </TouchableOpacity>
            <DatePicker
              modal
              mode="date"
              textColor="blue"
              androidPickerMode="spinner"
              open={openCalender}
              date={dateBooking}
              onConfirm={date => {
                setOpenCalender(false);
                setDateBooking(date);
              }}
              // onDateChange={setDataDetailOrder(dateBooking)}
              onDateChange={setDataDateBooking(dateBooking)}
              onCancel={() => {
                setOpenCalender(false);
              }}
            />
          </View>
          {/*end of date picker */}

          {/* Select Dropdown */}
          <TouchableOpacity style={styles.dropdownWrapper}>
            <View style={styles.iconLocation}>
              <IconEntypo color={'#797979'} size={20} name="location" />
            </View>
            <View>
              <SelectDropdown
                buttonTextStyle={styles.buttonTextStyle}
                buttonStyle={styles.dropdownButton}
                rowTextStyle={styles.rowTextStyle}
                dropdownStyle={styles.dropdownStyle}
                defaultButtonText="Set a location"
                data={location}
                onSelect={(selectedItem, index) => {
                  setSelectedLocation(selectedItem);
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                  // text represented after item is selected
                  // if data array is an array of objects then return selectedItem.property to render after item is selected
                  return selectedItem;
                }}
                rowTextForSelection={(item, index) => {
                  // text represented for each item in dropdown
                  // if data array is an array of objects then return item.property to represent item in dropdown
                  return item;
                }}
              />
            </View>
          </TouchableOpacity>
          {/* End Select Dropdown */}
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
                          dateBooking: dateBooking.toISOString().split('T')[0],
                        })
                      }>
                      <Text
                        style={
                          itemTime === selectedTime
                            ? styles.timeChoose
                            : styles.time
                        }>
                        {dayjs(itemTime, 'HH:mm').format('hh:mm a')}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
                <View style={styles.priceWrapper}>
                  <Text style={styles.priceName}>Price</Text>
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
