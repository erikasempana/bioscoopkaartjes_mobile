import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {getAllMovie} from '../../stores/actions/movie';
import {
  ActivityIndicator,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native';
import styles from './styles';
import Month from '../../components/Month';
// import Moviepict from '../../assets/images/spiderman.png';
import Footer from '../../components/Footer';

// Dropdown Picker
import DropDownPicker from 'react-native-dropdown-picker';

export default function ViewAll(props) {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(8);
  const [refresh, setRefresh] = useState(false);
  const [loading, setLoading] = useState(false);
  const [last, setLast] = useState(false);
  const [loadMore, setLoadMore] = useState(false);
  const [selectMovie, setSelectMovie] = useState('');

  useEffect(() => {
    getDataMovie();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      getDataMovie();
    }, 2000);
  }, [page]);

  // Dropdown Picker
  const [openDropdown, setOpenDropdown] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'ASC', value: 'ASC'},
    {label: 'DESC', value: 'DESC'},
  ]);

  const getDataMovie = async () => {
    try {
      setRefresh(false);
      setLoading(false);
      setLoadMore(false);
      if (page <= totalPage) {
        const result = await dispatch(getAllMovie(page));

        // console.log('result ANNNNNNNNN', result.action.payload.data.data);
        // const result = await axios.get(`movie?page=${page}&limit=4`);
        if (page === 1) {
          setData(result.action.payload.data.data);
        } else {
          setData([...data, ...result.action.payload.data.data]);
        }
        // setTotalPage(result.data.pagination.totalPage);
        setTotalPage(result.action.payload.data.pagination.totalPage);
      } else {
        setLast(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleRefresh = () => {
    console.log('REFRESH SCREEN');
    setPage(1);
    setLast(false);
    if (page !== 1) {
      setRefresh(true);
    } else {
      getDataMovie();
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

  const toMovieDetail = item => {
    // setSelectMovie(item.id);
    props.navigation.navigate('MovieDetail', {
      id: item.id,
    });
  };

  const ListHeader = () => {
    return (
      <>
        {/* <Dropdown /> */}
        <Text style={styles.titileTop}> List Movie</Text>
        <View style={styles.filter}>
          {/* Dropdown Picker */}
          <View style={styles.sort}>
            <DropDownPicker
              style={styles.dropdownSort}
              placeholder="Sort"
              open={openDropdown}
              value={value}
              items={items}
              setOpen={setOpenDropdown}
              setValue={setValue}
              setItems={setItems}
            />
          </View>
          {/* End Dropdown Picker */}

          <TextInput
            style={styles.search}
            placeholder="Search Movie Name ..."
          />
        </View>
        <Month />
      </>
    );
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <FlatList
          numColumns={2}
          data={data}
          ListHeaderComponent={ListHeader}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <View style={styles.wrappercard}>
              <View style={styles.card}>
                <Image
                  style={styles.imagepic}
                  source={{
                    uri: `https://res.cloudinary.com/erikasempana/image/upload/v1655692721/${item.image}`,
                    // uri: `${CLOUDINARY_URL + profile.image}`,
                  }}
                />

                <View style={styles.content}>
                  <Text style={styles.title}>{item.name}</Text>
                  <Text style={styles.category}>{item.category}</Text>
                  <TouchableOpacity
                    // disabled={item.id === data ? true : false}
                    onPress={toMovieDetail(item)}
                    style={[
                      item.id === selectMovie
                        ? styles.detailPress
                        : styles.detail,
                    ]}>
                    <Text
                      style={[
                        item.id === selectMovie
                          ? styles.detailTextPress
                          : styles.detailText,
                      ]}>
                      Detail
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
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
        />
      </View>
    </View>
  );
}
