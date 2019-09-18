import React from "react";
import styled from "styled-components";
import { TouchableOpacity,StyleSheet,View } from "react-native";
import { NavigationActions } from 'react-navigation';

const Container = styled.View`
  height: 100%;

`;
const IphoneHeader = styled.View`
  height : 3.5%;

`
const BackButtonContainer = styled.View`
  height : 8%;
  margin-top:15px;
  margin-left:15px;
`;
const SettingContainer = styled.View`
  height : 70%;
  align-items : center;
`;
const SettingButtonContainer = styled.View`
  padding : 50px;
  margin : 50px;
  border-radius: 5px;
  border-width : 2px;
  background-color : #A1DFFF
`;


const Text = styled.Text`
 
`;

 const SettingNavigation = ({navigation}) =>{
  return (
    <Container>
      <IphoneHeader/>
      <BackButtonContainer>

    <TouchableOpacity onPress={()=>navigation.goBack()}>
      <Text>뒤로 가기</Text>
    </TouchableOpacity>
    </BackButtonContainer>
    <SettingContainer>
    
    <TouchableOpacity onPress = {()=>navigation.navigate("SettingPresenter")}>
    <SettingButtonContainer>
      <Text>운동 세팅</Text>
    </SettingButtonContainer>
    </TouchableOpacity>
    <TouchableOpacity onPress = {()=>navigation.navigate("AudioSettingPresenter")}>
    <SettingButtonContainer>
      <Text>음성 세팅</Text>
    </SettingButtonContainer>
    </TouchableOpacity>
    </SettingContainer>
    </Container>
  )
}

export default SettingNavigation
