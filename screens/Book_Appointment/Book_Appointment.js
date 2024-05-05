import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import globalStyles from '../../assets/styles/globalStyles';
import styles from './style';
import {ProfileTabsNavigation} from '../../navigation/MainNavigation';
import Header from '../../components/Header/Header';

const Book_Appointment = ({navigation}) => {
  return (
    <SafeAreaView style={[globalStyles.backgroundWhite, globalStyles.flex]}>
      <Header />
      <View style={styles.profileImageContainer}>
        <View style={styles.profieImageContent}>
          <Image
            style={styles.profileImage}
            source={require('../../assets/images/profilePic.webp')}
          />
        </View>
      </View>
      <Text style={styles.statAmount}>Joshua Fowler</Text>
      <View style={styles.statContainer}>
        <View>
          <Text style={styles.statAmount}>155,000</Text>
          <Text style={styles.statType}>Miles (Estimated)</Text>
        </View>
        <View style={styles.statBorder} />
        <View>
          <Text style={styles.statAmount}>Next Appointment</Text>
          <Text style={styles.statType}>May 12 2024</Text>
        </View>
        <View style={styles.statBorder} />
      </View>
      <View style={globalStyles.flex}>
        <ProfileTabsNavigation />
      </View>
    </SafeAreaView>
  );
};

export default Book_Appointment;
