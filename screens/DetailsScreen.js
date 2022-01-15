import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Button} from 'react-native';

const DetailsScreen = ({navigation}) => {
    return(
      <View style={{ flex:1, alignItems: 'center',justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      <Button  
        title="Go to the first Screen"
        onPress={()=>navigation.popToTop()}
      />
      </View>
    );
    };

    export default DetailsScreen;