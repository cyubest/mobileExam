import React, { useState } from 'react';
import { View, Text, ActivityIndicator, TouchableOpacity, StatusBar, ScrollView, TextInput, Platform, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';
import Loader from './Loader';
import { useDispatch } from 'react-redux';
import { submitSignup } from '../redux/actions/auth';

const SignInScreen = ({ navigation }) => {
    const [loading, setLoading] = useState(false);
    const [errorUsername, setErrorUsername] = useState('');
    const [errorpassword, setErrorpassword] = useState('');
    const [errorfirst_name, setErrorfirst_name] = useState('');
    const [errorlast_name, setErrorlast_name] = useState('');
    const [errorconfirm_password, setErrorconfirm_password] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [errorWrong, setErrorWrong] = useState('');
    const dispatch = useDispatch();


    const [data, setData] = React.useState({
        username: '',
        password: '',
        first_name: '',
        last_name: '',
        confirm_password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        confirm_secureTextEntry: true,

    });

    const textInputChange = (val) => {
        if (val.length != 0) {
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

    const textInputChangeFirst = (val) => {
        if (val.length != 0) {
            setData({
                ...data,
                first_name: val,
                check_textInputChange: true
            });
        } else {
            setData({
                ...data,
                first_name: val,
                check_textInputChange: false
            });
        }
    }

    const textInputChangeLast = (val) => {
        if (val.length != 0) {
            setData({
                ...data,
                last_name: val,
                check_textInputChange: true
            });
        } else {
            setData({
                ...data,
                last_name: val,
                check_textInputChange: false
            });
        }
    }
    const handlePasswordChange = (val) => {
        setData({
            ...data,
            password: val
        });
    }

    const handleConfirmPasswordChange = (val) => {
        setData({
            ...data,
            confirm_password: val
        });
    }


    const updateConfirmSecureTextEntry = () => {
        setData({
            ...data,
            confirm_secureTextEntry: !data.confirm_secureTextEntry
        });
    }
    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    const registerNewUser = () => {
        if (!data.username) {
            setErrorUsername('This field is required')
            return;
        } else {
            setErrorUsername('')
        }
        if (!data.first_name) {
            setErrorfirst_name('This field is required')
            return;
        } else {
            setErrorfirst_name('')
        }
        if (!data.last_name) {
            setErrorlast_name('This field is required')
            return;
        }
        else {
            setErrorlast_name('')
        }
        if (!data.password) {
            setErrorpassword('This field is required')
            return;
        } {
            setErrorpassword('')
        }
        if (!data.confirm_password) {
            setErrorconfirm_password('This field is required')
            return;
        } {
            setErrorconfirm_password('')
        }
        setLoading(true)
        const payload = {
            first_name: data.first_name,
            last_name: data.last_name,
            username: data.username,
            password: data.password,
        };
        dispatch(submitSignup(payload))
            .then(async res => {
                if (res.status === 201) {
                    navigation.navigate('SignInScreen');
                    setLoading(false);
                } else if (res.status === 400) {
                    setErrorMessage(res.username);
                    setLoading(false);
                } else {
                    setErrorWrong('Something wrong');
                    setLoading(false);
                }
            });
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <StatusBar backgroundColor='#2e0ebd' barStyle="light-content" />

                <View style={styles.header}>
                    <Text style={styles.text_header}>Register Now!</Text>
                </View>
                <Animatable.View
                    animation="fadeInUpBig"
                    style={styles.footer}
                >
                    <Text style={styles.text_footer}>Student Id</Text>
                    <View style={styles.action}>
                        <FontAwesome
                            name="user-o"
                            color="#05375a"
                            size={20}
                        />
                        <TextInput
                            placeholder="Your Id"
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

                    <Animatable.View animation="fadeInLeft" duration={500}>
                        <Text style={styles.errorNotesMessage}>{errorUsername}</Text>
                    </Animatable.View>
                    {errorMessage ?
                        <Animatable.View animation="fadeInLeft" duration={500}>
                            <Text style={styles.errorNotesMessage}>{errorMessage}</Text>
                        </Animatable.View>
                        : null
                    }
                    <Text style={styles.text_footer}>Fist Name</Text>
                    <View style={styles.action}>
                        <FontAwesome
                            name="user-o"
                            color="#05375a"
                            size={20}
                        />
                        <TextInput
                            placeholder="Your firstName"
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={(val) => textInputChangeFirst(val)}
                        />
                        {data.first_name ?
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

                    <Animatable.View animation="fadeInLeft" duration={500}>
                        <Text style={styles.errorNotesMessage}>{errorfirst_name}</Text>
                    </Animatable.View>
                    <Text style={styles.text_footer}>Last Name</Text>
                    <View style={styles.action}>
                        <FontAwesome
                            name="user-o"
                            color="#05375a"
                            size={20}
                        />
                        <TextInput
                            placeholder="Your lastName"
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={(val) => textInputChangeLast(val)}
                        />
                        {data.last_name ?
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

                    <Animatable.View animation="fadeInLeft" duration={500}>
                        <Text style={styles.errorNotesMessage}>{errorlast_name}</Text>
                    </Animatable.View>
                    <Text style={[styles.text_footer, { marginTop: 2 }]}>Password</Text>
                    <View style={styles.action}>
                        <FontAwesome
                            name="lock"
                            color="#05375a"
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

                    <Animatable.View animation="fadeInLeft" duration={500}>
                        <Text style={styles.errorNotesMessage}>{errorpassword}</Text>
                    </Animatable.View>
                    <Text style={[styles.text_footer, { marginTop: 2 }]}>Confirm Password</Text>
                    <View style={styles.action}>
                        <FontAwesome
                            name="lock"
                            color="#05375a"
                            size={20}
                        />
                        <TextInput
                            placeholder="Confirm password"
                            secureTextEntry={data.confirm_secureTextEntry ? true : false}
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={(val) => handleConfirmPasswordChange(val)}
                        />
                        <TouchableOpacity
                            onPress={updateConfirmSecureTextEntry}
                        >

                            {data.confirm_secureTextEntry ?
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

                    <Animatable.View animation="fadeInLeft" duration={500}>
                        <Text style={styles.errorNotesMessage}>{errorconfirm_password}</Text>
                    </Animatable.View>
                    <View style={styles.button}>
                        <TouchableOpacity onPress={() => registerNewUser()} style={styles.signUp}>
                            <LinearGradient
                                colors={['#2e0ebd', '#fbfafd']}
                                style={styles.signIn}
                            >
                                {loading ? (
                                    <ActivityIndicator
                                        animating={loading}
                                        size={'large'}
                                        color={'white'}
                                        style={{ alignSelf: 'center', marginTop: 2 }}
                                    />
                                ) :
                                    (
                                        <Text style={[styles.textSign, { color: '#fff' }]}>Sign Up</Text>
                                    )
                                }
                            </LinearGradient>
                        </TouchableOpacity>
                        {errorWrong ?
                            <Animatable.View animation="fadeInLeft" duration={500}>
                                <Text style={styles.errorNotesMessage}>{errorWrong}</Text>
                            </Animatable.View>
                            : null
                        }
                        <TouchableOpacity
                            onPress={() => navigation.goBack()}
                            style={[styles.signIn, {
                                borderColor: '#303fda',
                                borderWidth: 1,
                                marginTop: 15
                            }]}
                        >
                            <Text style={[styles.textSign, { color: '#303fda' }]}>Sign In</Text>
                        </TouchableOpacity>
                    </View>
                </Animatable.View>
            </View>
        </ScrollView>
    );
};

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
        paddingBottom: 50
    },
    footer: {
        flex: 7,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
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
        marginTop: 20
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
    },
    signUp: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    errorNotesMessage: {
        color: 'red',
        marginLeft: 12
    },

});