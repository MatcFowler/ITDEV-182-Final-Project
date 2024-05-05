/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  Button,
  TouchableOpacity,
  View,
  Image,
  Pressable,
  TextInput,
  FlatList,
  Switch,
} from 'react-native';
import globalStyles from '../../assets/styles/globalStyles';
import styles from './style';
import {appointmentUpcoming} from '../../assets/data/data';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import {SendEmail} from '../../components/Emailing/SendEmail';

const Contact = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [phoneNum, setPhoneNum] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [exampleState, setExampleState] = useState(appointmentUpcoming);
  const [idx, incr] = useState(2);
  const addElement = () => {
    var newArray = [
      ...appointmentUpcoming,
      {
        id: toString(idx),
        fullname: name,
        email: email,
        phone: phoneNum,
        message: message,
      },
    ];
    appointmentUpcoming.push({
      id: toString(idx),
      fullname: name,
      email: email,
      phone: phoneNum,
      message: message,
    });
    incr(idx + 1);
    setExampleState(newArray);
    console.log(exampleState);
  };

  SendEmail(email, 'Appointment ' + name + ' ' + email, message).then(() => {
    console.log('Our email successful provided to device mail ');
  });

  return (
    <SafeAreaView>
      <ScrollView>
        <Header />
        <View style={styles.sectionOuterContainer}>
          <View style={styles.statContainer}>
            <Text style={styles.titleText}>Contact Form</Text>
            <View style={styles.sections}>
              <Text style={styles.tinyTitleText}>Full Name</Text>
              <TextInput
                value={name}
                keyboardType={'default'}
                style={globalStyles.defaultTextStyling}
                placeholder={'Please enter your Full Name'}
                onChangeText={value => setName(value)}
              />
            </View>
            <View style={styles.sections}>
              <Text style={styles.tinyTitleText}>Email</Text>
              <TextInput
                value={email}
                style={globalStyles.defaultTextStyling}
                placeholder={'Please enter your Email'}
                onChangeText={value => setEmail(value)}
              />
            </View>
            <View style={styles.sections}>
              <Text style={styles.tinyTitleText}>Phone Number</Text>
              <TextInput
                value={phoneNum}
                keyboardType={'phone-pad'}
                style={globalStyles.defaultTextStyling}
                placeholder={'Please enter your Phone Number'}
                onChangeText={value => setPhoneNum(value)}
              />
            </View>
            <View style={styles.sections}>
              <Text style={styles.tinyTitleText}>Message</Text>
              <TextInput
                value={message}
                style={[globalStyles.defaultTextStyling, {height: 250}]}
                placeholder={'Please enter your Message'}
                onChangeText={value => setMessage(value)}
              />
            </View>
            <View style={styles.sections}>
              <TouchableOpacity
                style={[
                  globalStyles.backgroundMainAccent,
                  {borderRadius: 10},
                  (email.length < 10 ||
                    name.length === 0 ||
                    message.length === 0) && {opacity: 0.7},
                ]}
                onPress={() => {
                  console.log('Email:   ' + name + email + phoneNum + message);
                  addElement();
                  this.SendEmail;
                }}>
                <Text style={globalStyles.sectionText}>Submit</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Contact;
