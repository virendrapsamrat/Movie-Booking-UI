import React from 'react';
import {View, Text, Button, Image, ScrollView} from 'react-native';
import styles from './DetailStyle';
import {CButton} from '../components/CButton';
import scale, {verticalScale} from '../utils/Scale';
import {TouchableOpacity} from 'react-native-gesture-handler';
import R from '../R';
export class MovieDetails extends React.Component {
  render() {
    console.log('this', this.props.route.params.item);
    return (
      <ScrollView>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <View style={styles.moviesContainer}>
            <Image
              source={this.props.route.params.item.image}
              style={styles.moviesContainerImages}
            />
            <Text style={styles.titleMovie}>
              {this.props.route.params.item.Category}
            </Text>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={{alignSelf: 'center', marginLeft: scale(20)}}>
                <View
                  style={{
                    flexDirection: 'row',
                    marginVertical: verticalScale(10),
                  }}>
                  <Text style={{fontSize: scale(25)}}>Name:-</Text>
                  <Text
                    style={{
                      alignSelf: 'center',
                      marginLeft: scale(20),
                      fontSize: scale(20),
                      opacity: 0.6,
                    }}>
                    MOVIE NAME XYZ
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    marginVertical: verticalScale(10),
                  }}>
                  <Text style={{fontSize: 25}}>Price:-</Text>
                  <Text
                    style={{
                      alignSelf: 'center',
                      marginLeft: scale(20),
                      fontSize: scale(20),
                      opacity: 0.6,
                    }}>
                    $500
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    marginVertical: verticalScale(10),
                  }}>
                  <Text style={{fontSize: scale(25)}}>Rating:-</Text>
                  <Text
                    style={{
                      alignSelf: 'center',
                      marginLeft: scale(20),
                      fontSize: scale(20),
                      opacity: 0.6,
                    }}>
                    7.6/10
                  </Text>
                </View>

                <Text
                  style={{marginTop: verticalScale(10), fontSize: scale(20)}}>
                  Description:-
                </Text>
                <Text
                  style={{
                    marginTop: verticalScale(10),
                    textAlign: 'left',
                    marginHorizontal: scale(10),
                    marginBottom: verticalScale(20),
                  }}>
                  The concept is often used interchangeably with that of film
                  reviews. A film review implies a recommendation aimed at
                  consumers, however not all film criticism takes the form of
                  reviews.
                </Text>
              </View>
            </View>
          </View>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Payment')}
            style={{
              width: scale(300),
              height: verticalScale(50),
              backgroundColor: R.colors.primaryRed,
              marginTop: verticalScale(40),
              marginBottom: verticalScale(50),
              borderRadius: 10,
            }}>
            <Text
              style={{
                alignSelf: 'center',
                justifyContent: 'center',
                fontSize: scale(20),
                color: R.colors.primaryWhite,
                marginTop: verticalScale(10),
              }}>
              MAKE PAYMENT
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}
