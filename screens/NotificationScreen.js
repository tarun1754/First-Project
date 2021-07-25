import React from 'react';
import {Text,View,TouchableOpacity} from 'react-native';

export default class NotificationScreen extends React.Component{
  render(){
    return(
      <View>
      <Text>NotificationScreen</Text>
      <TouchableOpacity onPress={()=>{ this.props.navigation.navigate('UpcomingClassScreen')}}><Text>Go to Upcoming Class Screen</Text></TouchableOpacity>
      </View>
    )
  }
}