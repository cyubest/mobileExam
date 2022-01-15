import axios from 'axios';
import React, { useEffect, Component, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Button, ImageBackground, StatusBar, FlatList, TextInput, Image, Animated } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import AucaPic from '../images/auca_Logo.jpg';
import { getUseInfo } from '../redux/actions/currentUser';
import { getExams } from '../redux/actions/exams';
import Empty from '../securityUtils/Empty';
import homeStyles from './style';



const HomeScreen = () => {
  const [isLoading, setisLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [text, setText] = useState('');
  const { exam } = useSelector(state => state.exams);
  const { profile } = useSelector(state => state.currentUser);
  const [data, setData] = useState();
  const dispatch = useDispatch();
  const newArr = Object.keys(exam).map((key) => exam[key]);
  console.log(newArr)
  useEffect(() => {
    setisLoading(true)
    searchData();
    getUserInformation();
  }, [newArr.length]);

  const searchData = () => {
    if (newArr.length === 0) {
      setLoading(true)
      // const payload = {
      //   latitude: "27.964157",
      //   longitude: "-82.452606"
      // };
      let std_id = profile.user.username
      dispatch(getExams(std_id))
      setData(newArr);
      setFilteredDataSource(newArr);
    } else if (newArr.length != 0) {
      setData(newArr);
      setFilteredDataSource(newArr);
      setLoading(false)
    }
  };

  const getUserInformation = () => {
    let user_id = profile.user.id;
    dispatch(getUseInfo(user_id))
  }

  const renderLoader = () => {
    return (
      isLoading ?
        <View style={homeStyles.loaderStyle}>
          <ActivityIndicator size="large" color="#aaa" />
        </View> : null
    )
  }
  const handleLoadMore = () => {
    console.log("Load more item");
  }

  const searchFilterFunction = (text) => {
    if (text) {
      const newData = data.filter(item => {
        const itemData = item.students ? item.students.toUpperCase() : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setText(text);
      console.log(newData, 'jhjsjashajhasjpoooo')
    } else {
      setFilteredDataSource(data);
      setText(text);
    }
  };


  const renderItem = ({ item, index }) => (
    <View>
      <Image
        source={AucaPic}
        style={StyleSheet.absoluteFillObject}
        blurRadius={20}
        center

      />
      <View key={index} style={styles.mainView} >
        <Text style={{ color: 'gray', }}>{"COURSE NAME    : "}  {item.courseName} </Text>
        <Text style={{ color: 'gray', }}>{"COURSE CODE    : "}  {item.course} </Text>
        <Text style={{ color: 'gray', }}>{"PROGRAM   : "}  {item.program} </Text>
        <Text style={{ color: 'gray', }}>{"FLOOR     : "}  {item.floor} </Text>
        <Text style={{ color: 'gray', }}>{"ROOM NAME : "}  {item.roomName} </Text>
        <Text style={{ color: 'gray', }}>{"SEAT Number: "} {item.seats} </Text>
        <Text style={{ color: 'gray', }}>{"DATE OF EXAM: "} {item.date} </Text>
        <Text style={{ color: 'gray', }}>{"TIME OF EXAM: "} {item.time} </Text>

      </View>

    </View>


  )



  return (
    <View style={{ flex: 1, backgroundColor: 'transparent' }}>
      <StatusBar backgroundColor='#2e0ebd' barStyle="light-content" />
      <Image
        source={AucaPic}
        style={[StyleSheet.absoluteFillObject, { height: '100%' }]}
        blurRadius={20}
        center
      />

      <Searchbar
        placeholder="Search"
        onChangeText={searchFilterFunction}
        value={text}
        style={{
          margin: 10,
          width: 340,
          borderWidth: 1,
          marginLeft: 10,
          alignSelf: 'center',
          borderColor: '#D6D6D6'
        }}
      />
      {loading && (
        <ActivityIndicator animating size="large" color="blue" />
      )}
      {filteredDataSource && filteredDataSource.length > 0 && (

        <FlatList
          data={exam.results}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          onEndReachedThreshold={0}
        // ItemSeparatorComponent={() => <View style={homeStyles.itemSeparatorStyle} />}
        />
      )}
      {filteredDataSource && filteredDataSource.length < 3 && !loading && (
        <Empty />
      )}
      {console.log(filteredDataSource.length)}
    </View>
  );
}




export default HomeScreen;

const styles = StyleSheet.create({
  mainView: {
    marginHorizontal: 10,
    marginVertical: 5,
    backgroundColor: '#fbfbfb',
    borderRadius: 17,
    borderColor: '#ddd',
    borderWidth: 1,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 20
    },
    shadowOpacity: .3,
    shadowRadius: 20
  }
})