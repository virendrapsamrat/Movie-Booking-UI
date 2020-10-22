import {StyleSheet} from 'react-native';
import scale, {verticalScale} from '../../src/utils/Scale';

export default StyleSheet.create({
  container: {
    padding: 10,
  },

  flexStyle: {
    flex: 1,
  },

  cardViewContainer: {
    backgroundColor: 'white',
    height: scale(80),
    width: scale(160),
    margin: scale(10),
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: scale(5),
  },

  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: scale(70),
    height: scale(70),
    borderRadius: scale(70 / 2),
    backgroundColor: 'white',
    overflow: 'hidden',
    borderWidth: scale(0.1),
    marginLeft: scale(5),
  },

  cardView: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: scale(15),
  },

  cardImage: {
    height: scale(70),
    width: scale(70),
  },

  cardText: {
    marginHorizontal: scale(9.6),
    color: 'red',
    fontSize: scale(14),
    lineHeight: scale(16),
  },

  viewAllContainer: {
    backgroundColor: 'white',
    height: scale(80),
    flex: 1,
    margin: scale(10),
    borderWidth: scale(1),
    borderColor: 'green',
    borderRadius: scale(5),
  },

  viewAllText: {
    marginTop: scale(30),
    color: 'red',
    opacity: 0.8,
    fontSize: scale(14),
    lineHeight: scale(16),
    textAlign: 'center',
  },
});
