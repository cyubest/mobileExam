import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ImageBackground,
    TextInput,
    StyleSheet,
    Image,
    StatusBar,
    FlatList
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Animated from 'react-native-reanimated';
import fabuPic from '../images/fabu.png';
import { useSelector } from 'react-redux';



const ProfileScreen = () => {
    const { profile } = useSelector(state => state.currentUser);
    const { info } = useSelector(state => state.currentUser);
    // const userInfo = Object.setPrototypeOf(info, Object.prototype);


    const renderItem = ({ item, index }) => (
        <View style={{ paddingLeft: 15 }}>
            <View style={styles.action}>
                <Feather name="phone" color='black' size={20} />
                <TextInput
                    placeholder={item.phone}
                    placeholderTextColor="#666666"
                    keyboardType="number-pad"
                    autoCorrect={false}
                    style={[
                        styles.textInput,
                        {
                            color: 'black',
                        },
                    ]}
                />
            </View>
            <View style={styles.action}>
                <FontAwesome name="envelope-o" color='black' size={20} />
                <TextInput
                    placeholder={item.email}
                    placeholderTextColor="#666666"
                    keyboardType="email-address"
                    autoCorrect={false}
                    style={[
                        styles.textInput,
                        {
                            color: 'black',
                        },
                    ]}
                />
            </View>
            <View style={styles.action}>
                <FontAwesome name="globe" color='black' size={20} />
                <TextInput
                    placeholder={item.country}
                    placeholderTextColor="#666666"
                    autoCorrect={false}
                    style={[
                        styles.textInput,
                        {
                            color: 'black'
                        },
                    ]}
                />
            </View>
            <View style={styles.action}>
                <Icon name="map-marker-outline" color='black' size={20} />
                <TextInput
                    placeholder={item.city}
                    placeholderTextColor="#666666"
                    autoCorrect={false}
                    style={[
                        styles.textInput,
                        {
                            color: 'black',
                        },
                    ]}
                />
            </View>
        </View>
    )
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#2e0ebd' barStyle="light-content" />
            <View style={{ alignItems: 'center', paddingTop: 15 }}>
                <TouchableOpacity onPress={() => { }}>
                    <View
                        style={{
                            height: 100,
                            width: 100,
                            borderRadius: 15,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                        <ImageBackground
                            source={fabuPic}
                            style={{ height: 100, width: 100 }}
                            imageStyle={{ borderRadius: 15 }}>
                            <View
                                style={{
                                    flex: 1,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>
                                <Icon
                                    name="camera"
                                    size={35}
                                    color="#fff"
                                    style={{
                                        opacity: 0.7,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        borderWidth: 1,
                                        borderColor: '#fff',
                                        borderRadius: 10,
                                    }}
                                />
                            </View>
                        </ImageBackground>
                    </View>
                </TouchableOpacity>
                <Text style={{ marginTop: 10, fontSize: 18, fontWeight: 'bold' }}>
                    {profile.user.username}
                </Text>
            </View>

            <View style={{ paddingLeft: 15 }}>
                <View style={styles.action}>
                    <FontAwesome name="user-o" color='black' size={20} />
                    <TextInput
                        placeholder={profile.user.FirstName}
                        placeholderTextColor="#666666"
                        autoCorrect={false}
                        style={[
                            styles.textInput,
                            {
                                color: 'black',
                            },
                        ]}
                    />
                </View>
                <View style={styles.action}>
                    <FontAwesome name="user-o" color='black' size={20} />
                    <TextInput
                        placeholder={profile.user.LastName}
                        placeholderTextColor="#666666"
                        autoCorrect={false}
                        style={[
                            styles.textInput,
                            {
                                color: 'black',
                            },
                        ]}
                    />
                </View>
            </View>
            <FlatList
                data={info.results}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                onEndReachedThreshold={0}
                // ItemSeparatorComponent={() => <View style={homeStyles.itemSeparatorStyle} />}
                ListFooterComponent={
                    <TouchableOpacity style={styles.commandButton} onPress={() => { }}>
                        <Text style={styles.panelButtonTitle}>EDIT PROFILE</Text>
                    </TouchableOpacity>
                }
            />


        </View>
    );
};

export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    commandButton: {
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#2e0ebd',
        alignSelf: 'center',
        marginTop: 10,
        width: 300
    },
    panel: {
        padding: 20,
        backgroundColor: '#FFFFFF',
        paddingTop: 20,
        // borderTopLeftRadius: 20,
        // borderTopRightRadius: 20,
        // shadowColor: '#000000',
        // shadowOffset: {width: 0, height: 0},
        // shadowRadius: 5,
        // shadowOpacity: 0.4,
    },
    header: {
        backgroundColor: '#FFFFFF',
        shadowColor: '#333333',
        shadowOffset: { width: -1, height: -3 },
        shadowRadius: 2,
        shadowOpacity: 0.4,
        // elevation: 5,
        paddingTop: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    panelHeader: {
        alignItems: 'center',
    },
    panelHandle: {
        width: 40,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#00000040',
        marginBottom: 10,
    },
    panelTitle: {
        fontSize: 27,
        height: 35,
    },
    panelSubtitle: {
        fontSize: 14,
        color: 'gray',
        height: 30,
        marginBottom: 10,
    },
    panelButton: {
        padding: 13,
        borderRadius: 10,
        backgroundColor: '#FF6347',
        alignItems: 'center',
        marginVertical: 7,
    },
    panelButtonTitle: {
        fontSize: 13,
        fontWeight: 'bold',
        color: 'white',
        alignSelf: 'center'
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5,
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5,
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
});