import {StyleSheet, Text, View, TouchableOpacity, Linking} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {React} from 'react';
import {
  faFacebook,
  faInstagram,
  faTwitch,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import styles from './style';
import {scaleFontSize} from '../../assets/styles/scaling';
const Footer = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.titleText}>Socials</Text>
      <TouchableOpacity onPress={() => Linking.openURL('http://facebook.com')}>
        <FontAwesomeIcon
          icon={faFacebook}
          size={scaleFontSize(20)}
          color={'#2F446E'}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Linking.openURL('http://twitter.com')}>
        <FontAwesomeIcon
          icon={faTwitter}
          size={scaleFontSize(20)}
          color={'#2F446E'}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Linking.openURL('http://instagram.com')}>
        <FontAwesomeIcon
          icon={faInstagram}
          size={scaleFontSize(20)}
          color={'#2F446E'}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Linking.openURL('http://youtube.com')}>
        <FontAwesomeIcon
          icon={faYoutube}
          size={scaleFontSize(20)}
          color={'#2F446E'}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Linking.openURL('http://twitch.com')}>
        <FontAwesomeIcon
          icon={faTwitch}
          size={scaleFontSize(20)}
          color={'#2F446E'}
        />
      </TouchableOpacity>
    </View>
  );
};
export default Footer;
