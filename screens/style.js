import { StyleSheet } from 'react-native';

const homeStyles = StyleSheet.create({
    container: {
        flex: 1,
        top: 20,
        width: 300,
        height: 300,
        alignSelf: 'center',
        bottom: 2
    },
    topBar: {
        width: '300%',
        height: 50,
        flexDirection: 'row',
        backgroundColor: '#fff'
    },
    textLoc: {
        color: 'black'
    },
    dataCard: {
        alignItems: 'center',
        alignContent: 'center'
    },
    resName: {
        top: 10,
        color: 'black'
    },
    resdist: {
        top: 15,
        color: 'gray'
    },
    chipStyle: {
        backgroundColor: '#E3F2FD',
    },
    chipTakeOutStyle: {
        backgroundColor: '#E3F2FD',
        marginLeft: 10,
    },
    chipKidStyle: {
        backgroundColor: '#E3F2FD',
        marginLeft: 8
    },
    chipFriendStyle: {
        backgroundColor: '#E3F2FD',
        marginLeft: 8
    },
    chipTextStyle: {
        color: 'blue',
    },
    styleName: {
        top: 10,
        fontWeight: 'bold',
        color: 'black'
    },

    editIconStyle: {
        marginLeft: 10, marginRight: 2,
    },
    locationStyleIcon: {
        marginLeft: 20, marginRight: 2
    },
    locationViewStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        top: 15
    },
    chipViewStyle: {
        flexDirection: 'row',
        top: 20, bottom: 10,
    },
    dotStyleIcon: {
        marginLeft: 20, marginRight: 2
    },
    imageStyles: {
        width: 340,
        height: 150,
        borderRadius: 5
    },
    viewContainerStyle: {
        alignSelf: 'center',
        flex: 1
    },
    eleventhDivider: {
        height: 1,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 100
    },
    title: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 8,
        marginTop: 130,
    },
    loaderStyle: {
        marginTop: 10,
        alignItems: 'center'
    }
})

export default homeStyles;