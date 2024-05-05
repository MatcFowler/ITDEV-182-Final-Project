import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';
import {horizontalScale, verticalScale} from '../../assets/styles/scaling';
import {getFontScale} from 'react-native-device-info';
const style = StyleSheet.create({
  profileImage: {
    width: horizontalScale(220),
    height: verticalScale(120),
  },
  profileImageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: verticalScale(15),
  },
  profieImageContent: {
    borderWidth: 1,
    borderColor: '#2F446E',
    padding: horizontalScale(4),
    borderRadius: horizontalScale(110),
  },
  username: {
    marginTop: verticalScale(20),
    textAlign: 'center',
    fontFamily: getFontFamily('Inter', '600'),
    fontSize: getFontScale(20),
  },
  statAmount: {
    fontFamily: getFontFamily('Inter', '600'),
    fontSize: getFontScale(20),
    color: '#2F446E',
    textAlign: 'center',
    marginTop: horizontalScale(10),
  },
  statType: {
    fontFamily: getFontFamily('Inter', '400'),
    fontSize: getFontScale(16),
    color: '#2F446E',
    textAlign: 'center',
  },
  statContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: horizontalScale(40),
    marginVertical: verticalScale(30),
  },
});

export default style;
