import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import axios from '../../utils/axios';
import {
  ActivityIndicator,
  Image,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native';
import styles from './styles';
import Month from '../../components/Month';
import Footer from '../../components/Footer';
import SearchName from '../../components/SearchName';

import Sort from '../../components/Sort';

export default function ViewAll(props) {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState('ASC');
  const [sortBy, setSortBy] = useState('');
  const [releaseDate, setReleaseDate] = useState('');
  const [searchName, setSearchName] = useState('');
  const [totalPage, setTotalPage] = useState(8);
  const [refresh, setRefresh] = useState(false);
  const [loading, setLoading] = useState(false);
  const [last, setLast] = useState(false);
  const [loadMore, setLoadMore] = useState(false);
  const [selectMovie, setSelectMovie] = useState('');
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    getDataMovie();
  }, []);

  useEffect(() => {
    getDataMovie();
  }, [page, releaseDate, searchName, sort]);

  console.log(searchName);
  const getDataMovie = async () => {
    try {
      setDisabled(false);
      setRefresh(false);
      setLoading(false);
      if (page <= totalPage || totalPage === 0) {
        const result = await axios.get(
          `movie/?limit=4&page=${page}&sort=${sort}&sortBy=${sortBy}&searchRelease=${releaseDate}&searchName=${searchName}`,
        );
        console.log('RESULT', result.data);
        if (page === 1) {
          setData(result.data.data);
        } else {
          setData([...data, ...result.data.data]);
        }
        setTotalPage(result.data.pagination.totalPage);
      } else {
        setLast(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleMonth = sortMonth => {
    console.log(sortMonth);
    setReleaseDate(sortMonth);
  };

  const handleSearch = text => {
    console.log('ARE YOU CALLING ME ?', text);
    setSearchName(text);
  };

  const handleSort = sortItems => {
    setSortBy('name');
    setSort(sortItems.value);
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
    console.log('first', item);
    setSelectMovie(item.id);
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
          <Sort sort={handleSort} />
          <SearchName search={handleSearch} searchName={searchName} />
        </View>
        <Month {...props} sortMonth={handleMonth} />
      </>
    );
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <FlatList
          data={data}
          numColumns="2"
          ListHeaderComponent={ListHeader}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
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
                  onPress={() => toMovieDetail(item)}
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
          )}
          refreshing={refresh}
          onRefresh={handleRefresh}
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
