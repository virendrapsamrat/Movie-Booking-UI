import {StyleSheet} from 'react-native';
import scale, {verticalScale} from '../utils/Scale';
import R from '../R';
export default StyleSheet.create({
  CategoryName: {
    fontSize: scale(25),
    color: 'red',
    alignSelf: 'center',
    marginLeft: scale(10),
    textAlign: 'left',
  },

  topMovies: {
    marginLeft: scale(20),
    fontSize: scale(20),
  },

  moviesContainer: {
    marginTop: verticalScale(10),
    width: scale(360),
    backgroundColor: 'white',
    alignSelf: 'center',
  },
  moviesContainerImages: {
    marginBottom: verticalScale(5),
    width: scale(360),
    height: scale(180),
  },

  titleMovie: {
    marginLeft: scale(10),
    fontSize: scale(20),
    opacity: 0.5,
    color: R.colors.primaryRed,
  },

  customButtonStyle: {
    width: scale(3000),
    marginTop: verticalScale(200),
  },
});
