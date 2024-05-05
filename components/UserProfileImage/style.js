/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';
import { horizontalScale } from '../../assets/styles/scaling';


const style = StyleSheet.create({

    userImageContainer: {
        borderWidth: horizontalScale(2),
        borderColor: '#2F446E',
        padding: horizontalScale(3),
    },
});

export default style;
