import React from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import {CategoryList} from '../../src/utils/Constants';
import {TouchableOpacity} from 'react-native-gesture-handler';
import styles from './CategoryStyle';

export const Category = props => {
  const renderListItem = (item, index) => {
    if (index <= 2) {
      console.log(item, 'item+++++++++');
      return (
        <View style={styles.flexStyle}>
          <TouchableOpacity>
            <View style={styles.cardViewContainer}>
              <View style={styles.imageContainer}>
                <Image source={item.image} style={styles.cardImage} />
              </View>
              <View>
                <Text style={styles.cardText}>{item.title}</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      );
    } else {
      return (
        <View style={styles.flexStyle}>
          <TouchableOpacity onPress={() => props.onPressProductListing()}>
            <View style={styles.viewAllContainer}>
              <View style={{alignSelf: 'center'}}>
                <Text style={styles.viewAllText}>View All</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      );
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        data={CategoryList}
        renderItem={({item, index}) => renderListItem(item, index)}
      />
    </View>
  );
};
