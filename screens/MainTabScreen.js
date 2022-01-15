import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/Ionicons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import ExploreScreen from './ExplorerScreen';
import ProfileScreen from './ProfileScreen';


const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
  <Tab.Navigator
    initialRouteName="Home"
    activeColor="#fff"
    barStyle={{ backgroundColor: '#2e0ebd' }}
  >
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarColor: '#2e0ebd',
        tabBarIcon: ({ color }) => (
          <Icon name="home" color={color} size={26} />
        ),
      }}
    />

    <Tab.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        tabBarLabel: 'Profile',
        tabBarColor: '#297ae1',
        tabBarIcon: ({ color }) => (
          <Icon name="user" color={color} size={26} />
        ),
      }}
    />

  </Tab.Navigator>
);

export default MainTabScreen;

const HomeStackScreen = ({ navigation }) => (
  <HomeStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: '#fff'
    },
    headerTintColor: '#032563',
    headerTitleStyle: {
      fontWeight: 'bold',
      alignSelf: 'center'
    },

  }}>
    <HomeStack.Screen name="Home" component={HomeScreen} options={{
      title: 'Home',
      headerLeft: () => (
        <Icon.Button name="bars" size={25}
          backgroundColor="white"
          color="#032563"
          onPress={() => navigation.openDrawer()}></Icon.Button>
      )
    }} />

  </HomeStack.Navigator>
);

const DetailsStackScreen = ({ navigation }) => (
  <DetailsStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: '#297ae1'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      alignSelf: 'center'
    }
  }}>
    <DetailsStack.Screen name="Details" component={DetailsScreen} options={{
      title: 'Details',
      headerLeft: () => (
        <Icon.Button name="bars" size={25}
          backgroundColor="#297ae1"
          onPress={() => navigation.openDrawer()}></Icon.Button>
      )
    }} />
  </DetailsStack.Navigator>
);
