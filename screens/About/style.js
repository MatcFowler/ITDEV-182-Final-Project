import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';
import {horizontalScale, verticalScale} from '../../assets/styles/scaling';
import {getFontScale} from 'react-native-device-info';
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
    borderWidth: verticalScale(2),
    borderRadius: verticalScale(20),
    borderColor: 'white',
    backgroundColor: '#516378',
  },
});

export default style;
