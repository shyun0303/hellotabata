import React from "react";
import styled from "styled-components";
import { TouchableOpacity,StyleSheet } from "react-native";

const View = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;

`;

const Text = styled.Text`
 
`;

const SettingNavigation = ({navigation}) =>{
  return (
  <View>
    <TouchableOpacity onPress = {()=>navigation.navigate("SettingPresenter")}>
      <Text>운동 셋팅</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress = {()=>navigation.navigate("AudioSettingPresenter")}>
      <Text>음성 셋팅</Text>
    </TouchableOpacity>
  </View>
  )
}

export default SettingNavigation
