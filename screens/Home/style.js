import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';
import {getFontScale} from 'react-native-device-info';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  sectionText: {
    fontFamily: getFontFamily('Inter', '600'),
    fontSize: getFontScale(20),
    padding: verticalScale(10),
    color: 'white',
    textAlign: 'center',
  },
  sections: {
    marginLeft: verticalScale(20),
    marginRight: verticalScale(20),
    marginTop: horizontalScale(20),
    borderWidth: verticalScale(1),
    borderRadius: verticalScale(15),
    borderColor: 'white',
    backgroundColor: '#516378',
  },
  sectionTextContainer: {
    marginTop: horizontalScale(200),
    height: horizontalScale(200),
  },
  sectionTitleText: {
    padding: verticalScale(10),
    color: 'white',
    textAlign: 'center',
    fontSize: scaleFontSize(20),
    fontFamily: getFontFamily('Inter', '900'),
    paddingBottom: horizontalScale(0),
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
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#516378',
    marginLeft: verticalScale(20),
    marginRight: verticalScale(20),
    marginTop: horizontalScale(10),
    borderWidth: verticalScale(1),
    borderRadius: verticalScale(15),
    borderColor: 'white',
  },
});

export default style;
