import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  Switch,
  Pressable,
  TouchableOpacity,
  View,
  Image,
  ViewBase,
} from 'react-native';
import globalStyles from '../../assets/styles/globalStyles';
import styles from './style';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const About = ({navigation}) => {
  return (
    <SafeAreaView>
      <ScrollView style={globalStyles.backgroundMainForeground}>
        <View>
          <Header />
        </View>
        <View style={styles.sections}>
          <Text style={styles.sectionText}>
            JLF Auto has taken a significant step forward in enhancing customer
            convenience by developing a user-friendly mobile phone application
            that complements our website. This innovative app offers a range of
            features designed to streamline the customer experience. One notable
            feature is the seamless appointment booking option, allowing users
            to schedule service appointments at their fingertips. The intuitive
            interface ensures a quick and hassle-free booking process, providing
            flexibility and convenience for our valued customers.
          </Text>
          <Text style={styles.sectionText}>
            Furthermore, the mobile app provides a comprehensive history log,
            detailing all the services previously done on a customer's vehicle.
            This feature offers transparency and allows users to access their
            car's service history with ease. Whether it's checking previous
            repairs, inspections, or routine maintenance, customers can
            conveniently review their vehicle's history at any time. Fowler
            Automotive Care's dedication to technological advancements through
            this mobile application reflects our commitment to providing a
            modern and efficient automotive service experience for our valued
            clientele.
          </Text>
        </View>
        <View style={styles.sections}>
          <Text style={styles.sectionText}>
            Contacting me for quotes and scheduling fair-priced services is a
            straightforward process that prioritizes your convenience. I
            understand the importance of clear communication and transparency
            when it comes to pricing. Whether you're looking for a detailed
            quote for a specific automotive service or seeking information about
            the affordability of a comprehensive package, I am here to provide
            you with all the information you need. Feel free to reach out
            through the contact form, and I'll respond promptly to discuss your
            requirements, answer any questions you may have, and work with you
            to schedule services that align with your budget and timeline.
          </Text>
          <Text style={styles.sectionText}>
            Beyond automotive expertise, I am concurrently pursuing a degree in
            Information Technology, aiming to bring innovation to the field of
            mobile applications. My dedication to technology seamlessly
            complements my hands-on approach to automotive work. Additionally,
            my passion extends to woodworking, where I craft unique furniture
            pieces and take on handyman projects. This multifaceted skill set
            ensures that when you choose Joshua Lee Fowler Auto, you're not just
            getting expert car care; you're accessing fair pricing,
            transparency, and a commitment to excellence that spans the
            automotive, technological, and artisanal realms.
          </Text>
        </View>
        <View>
          <Footer />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default About;
