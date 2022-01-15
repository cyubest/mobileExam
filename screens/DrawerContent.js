import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import fabuPic from '../images/fabu.png';
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from 'react-native-paper';
import {
  DrawerContentScrollView,
  DrawerItem
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-community/async-storage';
import { LOGIN } from '../constants/navigationNames';
import { useSelector } from 'react-redux';



export function DrawerContent({ props, navigation }) {

  const [isDarkTheme, setIsDarkTheme] = React.useState(false);
  const [tokens, setTokens] = useState();
  const [first_Name, setFirstName] = useState();
  const [last_Name, setLastName] = useState();
  const [userName, setUsername] = useState();
  const { profile } = useSelector(state => state.currentUser);
  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  }

  const getProfile = () => {
    try {
      AsyncStorage.getItem('token')
        .then(tokens => {
          setTokens(tokens);
        })
        .done();

      AsyncStorage.getItem('username')
        .then(usernames => {
          setUsername(usernames);
        })
        .done();

      AsyncStorage.getItem('firstName')
        .then(first_Name => {
          setFirstName(first_Name);
        })
        .done();

      AsyncStorage.getItem('lastName')
        .then(last_Name => {
          setLastName(last_Name);
        })
        .done();
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    fetch('http:192.168.8.100:8000/api_logout/', {
      method: 'POST',
      headers: {
        Authorization: `Token ${tokens}`,
        'Content-Type': 'application/json',
      },
    });
  };

  return (
    <View style={{ flex: 1 }}>
      {getProfile()}
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{ flexDirection: 'row', marginTop: 15 }}>
              <Avatar.Image
                source={fabuPic}
                size={50}
              />
              <View style={{ marginLeft: 15, flexDirection: 'column' }}>
                <Title style={styles.title}>{profile.user.FirstName} {profile.user.LastName}</Title>
                <Caption style={styles.caption}>@{profile.user.username}</Caption>
              </View>
            </View>
            {/*<View style={styles.row}>
                  <View> 
                    <Paragraph style={[styles.paragraph,styles.caption]}>80</Paragraph>
                    <Caption style={[styles.caption]}>Following</Caption>
                  </View>
                  <View> 
                  <Paragraph style={[styles.paragraph,styles.caption]}>100</Paragraph>
                  <Caption style={styles.caption}>Followers</Caption>
                  </View>
                   </View> */}
          </View>


          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({ color, size }) => (
                <Icon
                  name="home-outline"
                  color={color}
                  size={size}
                />
              )}
              label="Home"
              onPress={() => { }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon
                  name="account-outline"
                  color={color}
                  size={size}
                />
              )}
              label="Profile"
              onPress={() => { navigation.navigate('profile') }}
            />

          </Drawer.Section>

          <Drawer.Section title="Preferences">
            <TouchableRipple onPress={() => { toggleTheme() }}>
              <View style={styles.preference}>
                <Text>Dark Theme</Text>
                <View pointerEvents={'none'}>
                  <Switch value={isDarkTheme} />
                </View>

              </View>
            </TouchableRipple>
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({ color, size }) => (
            <Icon
              name="exit-to-app"
              color={color}
              size={size}
            />
          )}
          label=" Sign out"
          onPress={() => {
            Alert.alert(
              'Logout',
              'Are you sure? You want to logout?',
              [
                {
                  text: 'Cancel',
                  onPress: () => {
                    return null;
                  },
                },
                {
                  text: 'Confirm',
                  onPress: () => {
                    AsyncStorage.clear();
                    {
                      logout();
                    }
                    navigation.reset({
                      index: 0,
                      routes: [{ name: 'AUTH' }]
                    });
                  },
                },
              ],
              { cancelable: false },
            );
          }}
        />
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    marginLeft: 12,
    color: "#fff"
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#297ae1',
    borderTopWidth: 1
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});