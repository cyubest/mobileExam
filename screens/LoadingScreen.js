import React, { Component, useState, useEffect } from 'react';
import {
    View,
    Text,
    Animated,
    Dimensions,
    StyleSheet,
    ActivityIndicator,
    StatusBar,
    Image,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

// const SwitchtoAuth = (navigation) => {
//   Actions.replace('LoginScreen')
// }

// const {navigate} = this.props.navigation;

const LoadingScreen = (props, { navigation }) => {
    const [loadingSpinner, setLoadingSpinner] = useState(false);

    useEffect(() => {
        setLoadingSpinner(true);

        setTimeout(() => {
            setLoadingSpinner(false);

            AsyncStorage.getItem('MR_Token').then(value => {
                if (value != null) {
                    props.navigation.replace('UserDrawerContent');
                } else if (value === null) {
                    props.navigation.replace("SplashScreen")
                }
            })

        }, 1200);
    }, []);

    // componentDidMount(){
    //     this.setState({
    //         loadingSpinner: true,
    //     });
    //     setTimeout(()=>{
    //         this.props.navigation.navigate("OnboardScreen")
    //     },1200);

    // }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#2e0ebd' barStyle="light-content" />
            <View style={{ paddingTop: 200 }}>
                <View style={styles.header}>
                    <Image source={require('../images/photo-removebg-preview.png')} />
                </View>
                <Animated.View style={{ marginTop: 20 }}>
                    {loadingSpinner ? (
                        <ActivityIndicator
                            style={{
                                position: 'absolute',
                                left: 0,
                                right: 0,
                                top: 120,
                                bottom: 0,
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                            size="large"
                            color="white"
                        />
                    ) : null}
                </Animated.View>
            </View>
        </View>
    );
};

export default LoadingScreen;

const { height } = Dimensions.get('screen');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2e0ebd',
        flexDirection: 'column',
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    footer: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30,
    },

    title: {
        color: '#05375a',
        fontSize: 30,
        fontWeight: 'bold',
    },
    text: {
        color: 'grey',
        marginTop: 5,
    },
    button: {
        alignItems: 'flex-end',
        marginTop: 30,
    },
    signIn: {
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row',
    },
    textSign: {
        color: 'white',
        fontWeight: 'bold',
    },

    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -55,
        marginBottom: -55,
    },
    header: {
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'center'
    },
});
