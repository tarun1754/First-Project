import React from 'react';
import {Text,View,TouchableOpacity} from 'react-native';

export default class HomeScreen extends React.Component{
  render(){
    return(
      <View>
      <Text>HomeScreen</Text>
      <TouchableOpacity onPress={()=>{ this.props.navigation.navigate('NotificationScreen')}}><Text>Go to Notification Screen</Text></TouchableOpacity>
      </View>
    )
  }
}