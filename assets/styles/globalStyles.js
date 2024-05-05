import {StyleSheet} from 'react-native';
import {getFontFamily} from '../fonts/helper';
import {horizontalScale, scaleFontSize, verticalScale} from './scaling';

const globalStyles = StyleSheet.create({
  backgroundWhite: {
    backgroundColor: '#FFFFFF',
  },
  flex: {
    flex: 1,
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  flexGrow: {
    flexGrow: 1,
  },
  backgroundMainAccent: {
    backgroundColor: '#2F446E',
  },
  backgroundMainForeground: {
    backgroundColor: '#C7C9BE',
  },
  sections: {
    marginLeft: verticalScale(20),
    marginRight: verticalScale(20),
    marginTop: horizontalScale(20),
    borderWidth: verticalScale(2),
    borderRadius: verticalScale(15),
    borderColor: 'white',
    backgroundColor: '#516378',
  },
  sectionText: {
    fontFamily: getFontFamily('Inter', '600'),
    fontSize: scaleFontSize(15),
    padding: verticalScale(10),
    color: 'white',
    textAlign: 'center',
  },
  sectionTitleText: {
    padding: verticalScale(10),
    color: 'white',
    textAlign: 'center',
    fontSize: scaleFontSize(20),
    fontFamily: getFontFamily('Inter', '900'),
    paddingBottom: horizontalScale(0),
  },
  defaultTextStyling: {
    textAlign: 'center',
    color: '#2F446E',
    borderWidth: verticalScale(2),
    borderRadius: verticalScale(5),
    padding: verticalScale(10),
    borderColor: '#2F446E',
  },
});

export default globalStyles;
