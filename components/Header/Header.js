import {Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import styles from './style';

const Header = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Text style={styles.titleText}>JLF AUTO</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Header;
