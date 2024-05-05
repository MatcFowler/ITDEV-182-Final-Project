/* eslint-disable react-native/no-inline-styles */
import {React, useState, useRef} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  ScrollView,
  TextInput,
  Button,
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import styles from '../Contact/style';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import {appointmentUpcoming, appointmentHistory} from '../../assets/data/data';
import {SendEmail} from '../../components/Emailing/SendEmail';
import globalStyles from '../../assets/styles/globalStyles';

const AddApointment = ({navigation}) => {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');

  const [exampleState, setExampleState] = useState(appointmentUpcoming);
  const [idx, incr] = useState(2);

  const addElement = () => {
    var newArray = [
      ...appointmentUpcoming,
      {
        id: toString(idx),
        fullname: fullname,
        email: email,
        phone: phone,
        date: date,
        message: message,
      },
    ];
    appointmentUpcoming.push({
      id: toString(idx),
      fullname: fullname,
      email: email,
      phone: phone,
      date: date,
      message: message,
    });
    incr(idx + 1);
    setExampleState(newArray);
    console.log(exampleState);
  };

  SendEmail(
    email,
    'Appointment ' + fullname + ' ' + email + ' ' + date,
    message,
  ).then(() => {
    console.log('Our email successful provided to device mail ');
  });

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.sectionOuterContainer}>
          <View style={styles.statContainer}>
            <Text style={styles.titleText}>Make Appointment Form</Text>
            <View style={styles.sections}>
              <Text style={styles.tinyTitleText}>Full Name</Text>
              <TextInput
                value={fullname}
                keyboardType={'default'}
                style={globalStyles.defaultTextStyling}
                placeholder={'Please enter your Full Name'}
                onChangeText={value => setFullname(value)}
              />
            </View>
            <View style={styles.sections}>
              <Text style={styles.tinyTitleText}>Email</Text>
              <TextInput
                value={email}
                keyboardType={'email-address'}
                style={globalStyles.defaultTextStyling}
                placeholder={'Please enter your Email'}
                onChangeText={value => setEmail(value)}
              />
            </View>
            <View style={styles.sections}>
              <Text style={styles.tinyTitleText}>Phone Number</Text>
              <TextInput
                value={phone}
                keyboardType={'phone-pad'}
                style={globalStyles.defaultTextStyling}
                placeholder={'Please enter your Phone Number'}
                onChangeText={value => setPhone(value)}
              />
            </View>
            <View style={styles.sections}>
              <Button
                title="Pick Date and Time"
                onPress={() => setOpen(true)}
              />
              <DatePicker
                modal
                open={open}
                date={date}
                onConfirm={date => {
                  setOpen(false);
                  setDate(date);
                }}
                onCancel={() => {
                  setOpen(false);
                }}
              />
            </View>
            <View style={styles.sections}>
              <Text style={styles.tinyTitleText}>Services Requested</Text>
              <TextInput
                value={message}
                style={[globalStyles.defaultTextStyling, {height: 250}]}
                placeholder={'Please enter your Services Requested'}
                onChangeText={value => setMessage(value)}
              />
            </View>
            <View style={styles.sections}>
              <TouchableOpacity
                style={[
                  globalStyles.backgroundMainAccent,
                  {borderRadius: 10},
                  (fullname.length === 0 ||
                    email.length === 0 ||
                    message.length === 0) && {opacity: 0.7},
                ]}
                onPress={() => {
                  console.log('nothing');
                  addElement();
                  this.SendEmail;
                  navigation.pop(2);
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

export default AddApointment;
