import React from 'react';
import {Text,View,TouchableOpacity} from 'react-native';

export default class WelcomeScreen extends React.Component{
  render(){
    return(
      <View>
      <Text>WelcomeScreen</Text>
      <TouchableOpacity onPress={()=>{ this.props.navigation.navigate('HomeScreen')}}><Text>Go to Home Screen</Text></TouchableOpacity>
      </View>
    )
  }
}