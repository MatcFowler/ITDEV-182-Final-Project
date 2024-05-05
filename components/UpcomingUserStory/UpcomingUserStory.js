import React from 'react';
import {Text, View, Image} from 'react-native';
import globalStyles from '../../assets/styles/globalStyles';
import PropTypes from 'prop-types';
import UserProfileImage from '../UserProfileImage/UserProfileImage';
import {horizontalScale} from '../../assets/styles/scaling';

const UpcomingUserStory = props => {
  return (
    // <View style={globalStyles.sections}>
    //   <Text style={globalStyles.sectionText}>{props.fullName}</Text>
    //   <Text style={globalStyles.sectionText}>{props.date}</Text>
    //   <Text style={globalStyles.sectionText}>{props.time}</Text>
    //   <Text style={globalStyles.sectionText}>{props.message}</Text>
    // </View>
    <View style={globalStyles.sections}>
      <View style={globalStyles.flexRow}>
        <Text style={globalStyles.sectionText}>Full Name:</Text>
        <Text style={globalStyles.sectionText}>{props.fullName}</Text>
      </View>
      <View style={globalStyles.flexRow}>
        <Text style={globalStyles.sectionText}>Date:</Text>
        <Text style={globalStyles.sectionText}>{props.date}</Text>
      </View>
      <View style={globalStyles.flexRow}>
        <Text style={globalStyles.sectionText}>Time:</Text>
        <Text style={globalStyles.sectionText}>{props.time}</Text>
      </View>
      <Text style={globalStyles.sectionText}>Appointment For:</Text>
      <View>
        <Text style={globalStyles.sectionText}>{props.message}</Text>
      </View>
    </View>
  );
};

UpcomingUserStory.propTypes = {
  fullName: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default UpcomingUserStory;