import React from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';


const BookmarkScreen = () => {
    return(
        <View style={styles.container}>
         <Text>Book mark Screen</Text>
         <Button 
          title="Click here"
          onPress={() =>alert('Button clicked')}
         />
        </View>
        );
};

export default BookmarkScreen;

const styles = StyleSheet.create({
  container:{
      flex:1,
      alignItems:'center',
      justifyContent:"center"
  }
})