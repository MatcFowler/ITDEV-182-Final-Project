/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';
import { getFontFamily } from '../../assets/fonts/helper';
import { horizontalScale, scaleFontSize, verticalScale } from '../../assets/styles/scaling';


const style = StyleSheet.create({
    titleText: {
        fontSize: scaleFontSize(22),
        fontFamily: getFontFamily('Inter', '800'),
        textAlign: 'center',
        paddingVertical: verticalScale(10),
        color: '#2F446E',
      },
      header: {
        paddingHorizontal: horizontalScale(15),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'white',
      },
});

export default style;
