import React from 'react';
import {Text, View, Image} from 'react-native';
import style from './style';
import PropTypes from 'prop-types';

const UserProfileImage = props => {
  return (
    <View
      style={[style.userImageContainer, {borderRadius: props.imageDimensions}]}>
      <Image
        source={props.profileImage}
        style={{
          width: props.imageDimensions,
          height: props.imageDimensions,
          borderRadius: props.imageDimensions,
        }}
      />
    </View>
  );
};

UserProfileImage.propTypes = {
  profileImage: PropTypes.object.isRequired,
  imageDimensions: PropTypes.number.isRequired,
};

export default UserProfileImage;
