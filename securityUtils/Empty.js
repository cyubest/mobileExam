import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50
    },
    text: {
        fontSize: 25,
        color: 'gray'
    }
});

const Empty = () => (
    <View style={styles.container}>
        <MaterialCommunityIcon name="delete-empty-outline" size={200} />
        <Text style={styles.text}>No Exam Found</Text>
    </View>
);

export default Empty;
