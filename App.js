import React, {Component, useEffect, useRef, useState} from 'react';
import {
  Button,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from './components/Header/Header';
import styles from './screens/Home/style';
// import {ThemeContext} from './android/Context/ThemeContext';
// import HomeScreen from './components/HomeScreen/HomeScreen';
// import useToggle from './android/Toggle/Toggle';
// import Item from './components/Item/Item';
// import style from './components/MyText/style';
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
// import { faCheck } from '@fortawesome/free-solid-svg-icons';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigation from './navigation/MainNavigation';

const App = () => {
  const [keepLoggedIn, setKeepLoggedIn] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [imageSource, setImageSource] = useState({uri: 'http://example.com'});
  const [textValue, setTextValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  );
};

export default App;
