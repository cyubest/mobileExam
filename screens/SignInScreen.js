import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, TouchableOpacity, StatusBar, ScrollView, TextInput, Platform, StyleSheet, } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';
import Loader from './Loader';
import { useDispatch, useSelector } from 'react-redux';
import { submitLogin } from '../redux/actions/auth';


const SignInScreen = ({ props, navigation }) => {
    const [errorMessage, setErrorMessage] = useState(false);
    const [errorNotExists, setErrorNotExist] = useState(false);
    const [errortext, setErrortext] = useState('');
    const [loading, setLoading] = useState(false);
    const { loginMessage } = useSelector(state => state.auth);
    const [isLoading, setIsLoading] = useState(false);
    const [errorWrong, setErrorWrong] = useState('');
    const dispatch = useDispatch();

    const [data, setData] = React.useState({
        username: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,

    });

    const textInputChange = (val) => {
        if (val.length !== 0) {
            setData({
                ...data,
                username: val,
                check_textInputChange: true
            });
        } else {
            setData({
                ...data,
                username: val,
                check_textInputChange: false
            });
        }
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    const handlePasswordChange = (val) => {
        setData({
            ...data,
            password: val
        });
    }




    const handleSubmitPress = () => {
        if (data.username.length <= 0 && data.password.length <= 0) {
            setErrorMessage(true)
        } else {
            const payload = {
                username: data.username,
                password: data.password
            };
            setIsLoading(true)
            dispatch(submitLogin(payload))
                .then(async res => {
                    if (res.status === 200) {
                        setIsLoading(false)
                        navigation.reset({
                            index: 0,
                            routes: [{ name: 'APP' }]
                        });
                    } else if (res.status === 400) {
                        setErrorNotExist(res.detail)
                        setIsLoading(false)
                    } else {
                        setErrorWrong('SomeThing Went wrong')
                        setIsLoading(false)
                    }
                });
        }
    };





    return (
        <ScrollView>
            <View style={styles.container}>
                <StatusBar backgroundColor='#2e0ebd' barStyle="light-content" />
                <Loader loading={loading} />
                <View style={styles.header}>
                    <Text style={styles.text_header}>welcome!</Text>
                </View>
                <Animatable.View
                    animation="fadeInUpBig"
                    style={styles.footer}
                >
                    <Text style={styles.text_footer}>Username</Text>
                    <View style={styles.action}>
                        <FontAwesome
                            name="user-o"
                            color="#2e0ebd"
                            size={20}
                        />
                        <TextInput
                            placeholder="Your username"
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={(val) => textInputChange(val)}
                        />
                        {data.username ?
                            <Animatable.View
                                animation="bounceIn"
                            >
                                <Feather
                                    name="check-circle"
                                    color="green"
                                    size={20}
                                />
                            </Animatable.View>

                            : null}
                    </View>
                    {errorMessage ? (
                        <Animatable.View animation="fadeInLeft" duration={500}>
                            <Text style={styles.errorNotesMessage}>This field is required</Text>
                        </Animatable.View>) : null
                    }
                    <Text style={[styles.text_footer, { marginTop: 35 }]}>Password</Text>
                    <View style={styles.action}>
                        <FontAwesome
                            name="lock"
                            color="#2e0ebd"
                            size={20}
                        />
                        <TextInput
                            placeholder="Your password"
                            secureTextEntry={data.secureTextEntry ? true : false}
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={(val) => handlePasswordChange(val)}
                        />
                        <TouchableOpacity
                            onPress={updateSecureTextEntry}
                        >

                            {data.secureTextEntry ?
                                <Feather
                                    name="eye-off"
                                    color="grey"
                                    size={20}
                                />
                                :
                                <Feather
                                    name="eye"
                                    color="grey"
                                    size={20}
                                />
                            }
                        </TouchableOpacity>

                    </View>
                    {errorMessage ? (
                        <Animatable.View animation="fadeInLeft" duration={500}>
                            <Text style={styles.errorNotesMessage}>This field is required</Text>
                        </Animatable.View>) : null
                    }
                    <TouchableOpacity>
                        <Text style={{ color: '#2e0ebd', marginTop: 15 }}> Forgot Password</Text>
                    </TouchableOpacity>
                    <View>
                        <Text style={{ color: 'red', alignSelf: 'center', marginTop: 6 }}>{errortext}</Text>
                    </View>
                    <View style={styles.button}>
                        <TouchableOpacity
                            style={styles.signIn}
                            onPress={() => handleSubmitPress()}
                        >
                            <LinearGradient
                                colors={['#2e0ebd', '#fbfafd']}
                                style={styles.signIn}
                            >
                                {isLoading ? (
                                    <ActivityIndicator
                                        animating={isLoading}
                                        size={'large'}
                                        color={'white'}
                                        style={{ alignSelf: 'center', marginTop: 2 }}
                                    />
                                ) :
                                    (
                                        <Text style={[styles.textSign, { color: '#fff' }]}>Sign In</Text>
                                    )
                                }
                            </LinearGradient>
                        </TouchableOpacity>
                        {errorWrong ? (
                            <Animatable.View animation="fadeInLeft" duration={500}>
                                <Text style={styles.errorNotesMessage}>{errorWrong}</Text>
                            </Animatable.View>) : null
                        }
                        {errorNotExists ? (
                            <Animatable.View animation="fadeInLeft" duration={500}>
                                <Text style={styles.errorNotesMessage}>{errorNotExists}</Text>
                            </Animatable.View>) : null
                        }
                        <TouchableOpacity
                            onPress={() => navigation.navigate('SignUpScreen')}
                            style={[styles.signIn, {
                                borderColor: '#303fda',
                                borderWidth: 1,
                                marginTop: 15
                            }]}
                        >


                            <Text style={[styles.textSign, { color: '#303fda' }]}>Sign Up</Text>

                        </TouchableOpacity>
                    </View>
                </Animatable.View>
            </View>
        </ScrollView>
    );
}





export default SignInScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2e0ebd'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingTop: 100
    },
    footer: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30,
        marginTop: 100
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    errorNotesMessage: {
        color: 'red',
        marginLeft: 12
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});
