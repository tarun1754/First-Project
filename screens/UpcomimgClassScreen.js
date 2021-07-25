import React from 'react';
import {Text,View,TouchableOpacity} from 'react-native';

export default class UpcomingClassScreen extends React.Component{
  render(){
    return(
      <View>
      <Text>UpcomingClassScreen</Text>
      <TouchableOpacity onPress={()=>{ this.props.navigation.navigate('SettingScreen')}}><Text>Go to Setting Screen</Text></TouchableOpacity>
      </View>
    )
  }
}