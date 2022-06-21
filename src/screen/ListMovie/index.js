import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import axios from '../../utils/axios';

export default function ListMovie(props) {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(10);
  const [refresh, setRefresh] = useState(false);
  const [loading, setLoading] = useState(false);
  const [last, setLast] = useState(false);
  const [loadMore, setLoadMore] = useState(false);

  useEffect(() => {
    getDataMovie();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      getDataMovie();
    }, 2000);
  }, [page]);

  const getDataMovie = async () => {
    try {
      setRefresh(false);
      setLoading(false);
      setLoadMore(false);
      if (page <= totalPage) {
        const result = await axios.get(`movie?page=${page}&limit=9`);
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

  const ListHeader = () => {
    return (
      <>
        <Text>List Movie</Text>
        <View style={styles.content}>
          <View style={styles.sort}>
            <Text>Sort</Text>
          </View>
          <View style={styles.search}>
            <Text>Search</Text>
          </View>
        </View>
        <Text>Filter Month</Text>
      </>
    );
  };

  console.log(refresh);
  return (
    <View style={styles.wrapper}>
      <FlatList
        data={data}
        ListHeaderComponent={ListHeader}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.card}>
            <Text>{item.name}</Text>
          </View>
        )}
        onRefresh={handleRefresh}
        refreshing={refresh}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.1}
        ListFooterComponent={() =>
          last ? (
            <View>
              <Text>-- No more data --</Text>
              {/* <Footer /> */}
            </View>
          ) : loading ? (
            <ActivityIndicator size="large" color="blue" />
          ) : null
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
  content: {
    flexDirection: 'row',
  },
  sort: {
    flex: 2,
  },
  search: {
    flex: 4,
  },
  card: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    elevation: 2,
    borderRadius: 10,
    marginBottom: 10,
  },
});
