import globalStyles from '../../assets/styles/globalStyles';
import styles from './style';
import {assets} from '../../react-native.config';
import {ProfileTabsNavigation} from '../../navigation/MainNavigation';
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
import {Routes} from '../../navigation/Routes';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
// import {ThemeContext} from './android/Context/ThemeContext';
// import HomeScreen from './components/HomeScreen/HomeScreen';
// import useToggle from './android/Toggle/Toggle';
// import Item from './components/Item/Item';
// import style from './components/MyText/style';
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
// import { faCheck } from '@fortawesome/free-solid-svg-icons';
import AutoScroll from 'react-native-auto-scrolling';

const Home = ({navigation}) => {
  const [image1Source, setImage1Source] = useState({
    uri: 'https://ewcstatic.thehartford.com/thehartford/the_hartford/pubimgs/M/higcom-image-marquee-ind-sc-auto-repair-shop.jpg',
  });
  const [image2Source, setImage2Source] = useState({
    uri: 'https://di-uploads-pod1.dealerinspire.com/depaulachevy/uploads/2020/12/Men-Working-on-Cars.jpg',
  });
  const [image3Source, setImage3Source] = useState({
    uri: 'https://us.images.westend61.de/0000932202pw/mechanics-working-on-car-engine-CUF01063.jpg',
  });
  const [image4Source, setImage4Source] = useState({
    uri: 'https://news.ohiopowertool.com/wp-content/uploads/2022/07/mechanic.jpg',
  });
  const [image5Source, setImage5Source] = useState({
    uri: 'https://di-uploads-pod1.dealerinspire.com/depaulachevy/uploads/2020/12/Men-Working-on-Cars.jpg',
  });

  return (
    <SafeAreaView>
      <ScrollView style={globalStyles.backgroundMainForeground}>
        <View>
          <Header />
        </View>
        <View style={styles.sections}>
          <Text style={globalStyles.sectionTitleText}> Oil Service</Text>
          <Text style={styles.sectionText}>
            Elevate your maintenance routine with JLF Auto's full oil change
            service. In addition to oil replacement, our team ensures the
            meticulous replacement of the oil filter, offering comprehensive
            lubrication and enhanced protection for your engine. This option
            provides a more in-depth solution for those seeking optimal engine
            health and longevity.
          </Text>
        </View>
        <View style={styles.statContainer}>
          <Text style={globalStyles.sectionTitleText}>
            Water Pump Replacement
          </Text>
          <Text style={styles.sectionText}>
            JLF Auto offers expert Water Pump Replacement services to address
            issues affecting your vehicle's cooling system. Whether it's leaks,
            unusual noises, or diminished performance, our skilled technicians
            replace the water pump with precision, ensuring proper circulation
            of coolant to prevent engine overheating. Trust us for reliable
            water pump replacements that contribute to the longevity and
            performance of your vehicle.
          </Text>
          <AutoScroll>
            <ScrollView
              onScroll={() => {}}
              contentContainerStyle={styles.previewImageContainer}
              style={{borderRadius: 15}}
              horizontal={true}>
              <Image
                source={image1Source}
                style={styles.previewImageSizeStyle}
                onError={() => {
                  console.log('Error has been detected while loading an image');
                  setImage1Source(
                    require('../../assets/images/mechanicImage4.webp'),
                  );
                }}
              />
              <Image
                source={image2Source}
                style={styles.previewImageSizeStyle}
                onError={() => {
                  console.log('Error has been detected while loading an image');
                  setImage2Source(
                    require('../../assets/images/mechanicImage1.png'),
                  );
                }}
              />
              <Image
                source={image3Source}
                style={styles.previewImageSizeStyle}
                onError={() => {
                  console.log('Error has been detected while loading an image');
                  setImage3Source(
                    require('../../assets/images/mechanicImage2.jpeg'),
                  );
                }}
              />
              <Image
                source={image4Source}
                style={styles.previewImageSizeStyle}
                onError={() => {
                  console.log('Error has been detected while loading an image');
                  setImage4Source(
                    require('../../assets/images/mechanicImage3.webp'),
                  );
                }}
              />
              <Image
                source={image5Source}
                style={styles.previewImageSizeStyle}
                onError={() => {
                  console.log('Error has been detected while loading an image');
                  setImage5Source(
                    require('../../assets/images/mechanicImage4.webp'),
                  );
                }}
              />
            </ScrollView>
          </AutoScroll>
        </View>
        <View style={styles.sections}>
          <Text style={globalStyles.sectionTitleText}> Suspension</Text>
          <Text style={styles.sectionText}>
            JLF Auto specializes in providing comprehensive suspension services
            to ensure a smooth and safe driving experience. Our skilled
            technicians take a meticulous approach to address critical
            components, including tie rods, CV axles, ball joints, and wheel
            bearings. Whether it's an inspection, repair, or replacement, we
            prioritize precision and reliability in every aspect of our
            suspension services.
          </Text>
        </View>
        <View style={styles.sections}>
          <Text style={globalStyles.sectionTitleText}>
            Aftermarket installations
          </Text>
          <Text style={styles.sectionText}>
            JLF Auto extends its expertise to aftermarket installations,
            meticulously examining every aspect of your vehicle to ensure a
            seamless fit and a functional experience. Our skilled technicians
            pay careful attention to detail, ensuring that aftermarket
            components, whether it's a new stereo system, lighting upgrades, or
            other accessories, integrate seamlessly with your vehicle's existing
            features. With a commitment to precision, we guarantee a
            professional installation that enhances both the aesthetic and
            functional aspects of your vehicle.
          </Text>
        </View>
        <View style={styles.sections}>
          <TouchableOpacity
            onPress={() => [navigation.navigate(Routes.Contact)]}>
            <Text style={styles.sectionText}>
              Need a service done you don’t see? Contact us and well get back to
              you about helping you out! (Click Here!)
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <Footer />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
