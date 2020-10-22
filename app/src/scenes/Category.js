import React from 'react';
import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import R from '../R';
import {ExploreList} from '../utils/Constants';
import styles from './CategoryStyles';
export class Category extends React.Component {
  renderListItem = ({item}) => {
    return (
      <TouchableOpacity>
        <View style={styles.rootContainer}>
          <Image source={item.image} style={styles.images} />
          <Text style={styles.CategoryName}>{item.Category}</Text>
        </View>
        <View style={{marginTop: 20}} />
      </TouchableOpacity>
    );
  };
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={ExploreList}
          numColumns={2}
          renderItem={this.renderListItem}
        />
      </View>
    );
  }
}
