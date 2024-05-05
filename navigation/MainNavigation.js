// /* eslint-disable react/react-in-jsx-scope */
import {React, useState, useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Routes} from './Routes';
import Home from '../screens/Home/Home';
import Book_Appointment from '../screens/Book_Appointment/Book_Appointment';
import AddApointment from '../screens/AddAppointment/AddAppointment';
import Contact from '../screens/Contact/Contact';
import About from '../screens/About/About';
import UserStory from '../components/UserStory/UserStory';
import UpcomingUserStory from '../components/UpcomingUserStory/UpcomingUserStory';
import {useNavigation} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {ScrollView, Text, View, TouchableOpacity, FlatList} from 'react-native';
import globalStyles from '../assets/styles/globalStyles';
import {appointmentHistory, appointmentUpcoming} from '../assets/data/data';

const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();

const ProfileTabs = createMaterialTopTabNavigator();

const pagination = (database, currentPage, pageSize) => {
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  if (startIndex >= database.length) {
    return [];
  }
  return database.slice(startIndex, endIndex);
};

const Tab1 = () => {
  const navigation = useNavigation();

  const userStoriesPageSize = 100;
  const [userStoriesCurrentPage, setUserStoriesCurrentPage] = useState(1);
  const [userStoriesRenderedData, setUserStoriesRenderedData] = useState([]);
  const [isLoadingUserStories, setIsLoadingUserStories] = useState(false);

  const pagination = (database, currentPage, pageSize) => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    if (startIndex >= database.length) {
      return [];
    }
    return database.slice(startIndex, endIndex);
  };

  useEffect(() => {
    setIsLoadingUserStories(true);
    const getInitalData = pagination(
      appointmentUpcoming,
      1,
      userStoriesPageSize,
    );
    setUserStoriesRenderedData(getInitalData);
    setIsLoadingUserStories(false);
  }, []);

  return (
    <ScrollView style={globalStyles.backgroundMainForeground}>
      <View
        style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center'}}>
        <FlatList
          onEndReachedThreshold={0.5}
          onEndReached={() => {
            if (isLoadingUserStories) {
              return;
            }
            setIsLoadingUserStories(true);
            const contentToAppend = pagination(
              appointmentUpcoming,
              userStoriesCurrentPage + 1,
              userStoriesPageSize,
            );
            if (contentToAppend.length > 0) {
              setUserStoriesCurrentPage(userStoriesCurrentPage + 1);
              setUserStoriesRenderedData(prev => [...prev, ...contentToAppend]);
            }
            setIsLoadingUserStories(false);
          }}
          data={userStoriesRenderedData}
          renderItem={({item}) => (
            <UpcomingUserStory
              key={'userStory' + item.id}
              fullName={item.fullname}
              date={item.date}
              time={item.time}
              message={item.message}
            />
          )}
        />
      </View>
      <View style={globalStyles.sections}>
        <TouchableOpacity
          style={[
            {backgroundColor: '#2F446E'},
            {opacity: 1},
            {borderRadius: 15},
          ]}
          onPress={() => [navigation.navigate(Routes.AddApointment)]}>
          <Text style={globalStyles.sectionText}>Make Appointment</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
const Tab2 = () => {
  const userStoriesPageSize = 100;
  const [userStoriesCurrentPage, setUserStoriesCurrentPage] = useState(1);
  const [userStoriesRenderedData, setUserStoriesRenderedData] = useState([]);
  const [isLoadingUserStories, setIsLoadingUserStories] = useState(false);

  useEffect(() => {
    setIsLoadingUserStories(true);
    const getInitalData = pagination(
      appointmentHistory,
      1,
      userStoriesPageSize,
    );
    setUserStoriesRenderedData(getInitalData);
    setIsLoadingUserStories(false);
  }, []);
  return (
    <ScrollView style={globalStyles.backgroundMainForeground}>
      <View
        style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center'}}>
        <View style={{width: 375}}>
          <FlatList
            onEndReachedThreshold={0.5}
            onEndReached={() => {
              if (isLoadingUserStories) {
                return;
              }
              setIsLoadingUserStories(true);
              const contentToAppend = pagination(
                appointmentHistory,
                userStoriesCurrentPage + 1,
                userStoriesPageSize,
              );
              if (contentToAppend.length > 0) {
                setUserStoriesCurrentPage(userStoriesCurrentPage + 1);
                setUserStoriesRenderedData(prev => [
                  ...prev,
                  ...contentToAppend,
                ]);
              }
              setIsLoadingUserStories(false);
            }}
            data={userStoriesRenderedData}
            renderItem={({item}) => (
              <UserStory
                key={'userStory' + item.id}
                fullName={item.fullname}
                mileage={item.mileage}
                date={item.date}
                time={item.time}
                message={item.message}
              />
            )}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export const ProfileTabsNavigation = () => {
  return (
    <ProfileTabs.Navigator>
      <ProfileTabs.Screen name={'Upcoming'} component={Tab1} />
      <ProfileTabs.Screen name={'History'} component={Tab2} />
    </ProfileTabs.Navigator>
  );
};

const MainMenuNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={{header: () => null, headerShown: false}}
      initialRouteName={Routes.Home}>
      <Drawer.Screen name={Routes.Home} component={Home} />
      <Drawer.Screen
        name={Routes.Book_Appointment}
        component={Book_Appointment}
      />
      <Drawer.Screen name={Routes.Contact} component={Contact} />
      <Drawer.Screen name={Routes.About} component={About} />
    </Drawer.Navigator>
  );
};

const MainNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{header: () => null, headerShown: false}}
      initialRouteName={Routes.Home}>
      <Stack.Screen name={'Drawer'} component={MainMenuNavigation} />
      <Stack.Screen name={Routes.AddApointment} component={AddApointment} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
