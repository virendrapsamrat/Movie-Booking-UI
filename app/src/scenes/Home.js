import React from 'react';
import {
  View,
  Text,
  Button,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
//local imports
import R from '../R';
import {Category} from '../components/Category';
import styles from './CategoryStyles';
import {TopMovies} from '../utils/Constants';
import {CButton} from '../components/CButton';
import {ScrollView} from 'react-native-gesture-handler';
export const Home = ({navigation}) => {
  const renderListItem = ({item}) => {
    console.log(item, '============');
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('MovieDetails', (name = {item}))}>
        <View style={styles.moviesContainer}>
          <Image source={item.image} style={styles.moviesContainerImages} />
          <Text style={styles.titleMovie}>{item.Category}</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{alignSelf: 'center', marginLeft: 10}}>
              <Text>Price : $500</Text>
              <Text>Rate :7.6/10</Text>
            </View>
            <CButton
              title="Book"
              onPress={() => navigation.navigate('Payment')}
            />
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <ScrollView style={{flex: 1}}>
      <Category onPressProductListing={() => navigation.navigate('Category')} />
      <Text style={styles.topMovies}>Top Movies List</Text>

      <FlatList data={TopMovies} renderItem={renderListItem} />
    </ScrollView>
  );
};
