import React, {useState} from 'react';
import {View, Text, Image, RefreshControl} from 'react-native';
import styles from './styles';
import TagLine from '../../assets/images/nearest.png';
import ImageJumbotron from '../../assets/images/group.png';
import {ScrollView} from 'react-native-gesture-handler';
import MovieCard from '../../components/MovieCard';
import Month from '../../components/Month';
import MovieCardUpcoming from '../../components/MovieCardUpcoming';
import Membership from '../../components/Membership';
import Footer from '../../components/Footer';

const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

export default function Home(props) {
  const [monthId, setMonthId] = useState('');
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  const toViewAll = () => {
    props.navigation.navigate('ViewAll');
  };

  const handleMonthId = sortMonth => {
    console.log(sortMonth);
    setMonthId(sortMonth);
  };

  console.log(monthId);

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <View style={styles.wrapper}>
        <View style={styles.container}>
          <View style={styles.section1}>
            <Image style={styles.tagline} source={TagLine} />
            <Image style={styles.ImageJumbotron} source={ImageJumbotron} />
          </View>
        </View>
      </View>
      <View style={styles.wrapper2}>
        <View style={styles.container2}>
          <View style={styles.section2}>
            <View style={styles.nowshowing}>
              <Text style={styles.nowshowText}>Now Showing</Text>
            </View>
            <View style={styles.viewall}>
              <Text style={styles.viewallText} onPress={toViewAll}>
                view all
              </Text>
            </View>
          </View>
        </View>
        <MovieCard {...props} />
      </View>
      <View style={styles.wrapper3}>
        <View style={styles.container3}>
          <View style={styles.section3}>
            <View style={styles.upcomingmovie}>
              <Text style={styles.upcomingText}>Upcoming Movie</Text>
            </View>
            <View style={styles.viewall}>
              <Text style={styles.viewallText} onPress={toViewAll}>
                view all
              </Text>
            </View>
          </View>
        </View>
        <Month {...props} sortMonth={handleMonthId} />
        <MovieCardUpcoming {...props} monthId />
      </View>
      <Membership />
      <Footer {...props} />
    </ScrollView>
  );
}
