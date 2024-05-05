import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';
import {horizontalScale, scaleFontSize, verticalScale} from '../../assets/styles/scaling';
import {getFontScale} from 'react-native-device-info';
const style = StyleSheet.create({
  sectionText: {
    fontFamily: getFontFamily('Inter', '600'),
    fontSize: scaleFontSize(20),
    padding: verticalScale(10),
    color: 'white',
    textAlign: 'center',
  },
  titleText: {
    fontFamily: getFontFamily('Inter', '800'),
    fontSize: scaleFontSize(28),
    padding: verticalScale(15),
    color: '#2F446E',
    textAlign: 'center',
  },
  tinyTitleText: {
    textAlign: 'left',
    color: '#2F446E',
    paddingBottom: horizontalScale(5),
  },
  sections: {
    paddingLeft: verticalScale(10),
    paddingRight: verticalScale(10),
    paddingTop: horizontalScale(30),
    backgroundColor: 'white',
  },
  sectionOuterContainer: {
    paddingLeft: verticalScale(20),
    paddingRight: verticalScale(20),
    paddingTop: horizontalScale(10),
    backgroundColor: '#C7C9BE',
  },
  previewImageContainer: {
    marginTop: horizontalScale(10),
    height: horizontalScale(200),
  },
  previewImageSizeStyle: {
    width: verticalScale(265),
    height: horizontalScale(200),
  },
  statContainer: {
    backgroundColor: 'white',
    borderWidth: verticalScale(3),
    borderRadius: verticalScale(4),
    paddingBottom: horizontalScale(20),
    borderColor: 'white',
  },
});

export default style;
