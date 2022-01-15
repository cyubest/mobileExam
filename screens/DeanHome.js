import axios from 'axios';
import React, { useEffect, Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button, SafeAreaView, StatusBar, FlatList, TextInput, Image, Animated } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AucaPic from '../images/auca_Logo.jpg';



class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            exams: []
        }
    }

    componentDidMount() {
        axios.get('http://192.168.8.100:8000/student_exam/')
            .then(res => {
                // console.log(res)
                this.setState({
                    exams: res.data,
                    filterExam: res.data
                })
            })
    }
    onScr() {
        const scrollY = React.useRef(new Animated.Value(0)).current;
    }
    onchangeText(text) {
        console.log('TextChanged', text)
        let filterArray = this.state.filterExam
        let searchResult = filterArray.filter(exam =>
            exam.students.includes(text)
        )
        this.setState({ exams: searchResult })
    }

    render() {

        const { exams } = this.state;
        const examList = exams.length ? (
            exams.map(exam => {
                return (
                    <View>
                        <View><Text key={exam.id}>
                            {exam.course}
                        </Text></View>
                    </View>

                )
            })
        ) : (<Text>No data yet.</Text>)

        return (

            <View style={{ flex: 1, backgroundColor: '#fff' }}>
                <Image
                    source={AucaPic}
                    style={StyleSheet.absoluteFillObject}
                    blurRadius={20}
                    center

                />
                <View style={{
                    borderBottomWidth: 1,
                    borderColor: '#ddd',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: 100

                }}>
                    <Text style={{
                        marginTop: 1,
                        fontSize: 16,
                        fontWeight: 'bold'
                    }}> Exam Timetable for all Courses </Text>

                </View>
                { /*<Text>{examList} </Text> */}
                {/*SEARCH BAR*/}
                <View style={{
                    flexDirection: 'row',
                    backgroundColor: '#fff',
                    marginTop: 5,
                    borderBottomWidth: 1,
                    paddingBottom: 1
                }}>

                    <TextInput
                        placeholder="search"
                        style={{
                            margin: 15,
                            padding: 7,
                            paddingLeft: 30,
                            borderWidth: 5,
                            borderColor: '#1672e3',
                            flex: 1,
                            borderRadius: 15,
                            fontSize: 16
                        }}
                        onChangeText={text => this.onchangeText(text)}
                    />

                </View>

                {/* LIST OF EXAMS*/}

                <Animated.FlatList
                    data={exams}

                    contentContainerStyle={{
                        padding: 20,
                        paddingTop: StatusBar.currentHeight || 32,
                    }}
                    renderItem={({ item }) => (
                        <View style={{
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
                        }}>
                            <Text style={{ color: 'gray', }}>{"COURSE    : "}  {item.course} </Text>
                            <Text style={{ color: 'gray', }}>{"PROGRAM   : "}  {item.program} </Text>
                            <Text style={{ color: 'gray', }}>{"FLOOR     : "}  {item.floor} </Text>
                            <Text style={{ color: 'gray', }}>{"ROOM NAME : "}  {item.rooms} </Text>
                            <Text style={{ color: 'gray', }}>{"SEAT Number: "} {item.seats} </Text>
                            <Text style={{ color: 'gray', }}>{"DATE OF EXAM: "} {item.date} </Text>
                            <Text style={{ color: 'gray', }}>{"TIME OF EXAM: "} {item.time} </Text>

                        </View>
                    )}
                    ListEmptyComponent={() =>
                        <View>
                            <Text>Nothing To show</Text>
                        </View>
                    }
                />
            </View>
        );
    }
}


// const HomeScreen = ()=>{

//   useEffect(() => {
//     try {
//       fetch('http://192.168.1.164:8000/student_exam/')
//         .then(res => res.json())
//         .then(res => console.log(res))
//     } catch (error) {
//       console.log(error)
//     }
//   })
//   return(
//     <View>
//     <Text>HHHHH</Text>
//     </View>
//   )
// }

export default HomeScreen;