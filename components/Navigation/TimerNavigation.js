import React from "react";
import styled from "styled-components";
import { TouchableOpacity } from "react-native";
import {LinearGradient} from "expo-linear-gradient" 

const View = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;

`;


const Text = styled.Text`
  background-color: red;
  font-size : 70px;
  color: white;
  border : 10px solid red;
  border-radius:10px;
`;

export default ({ navigation }) => (
  <LinearGradient colors={["#F7FFF3","#2ABDEB"]} style={{flex:1}}>
  <View>
    <TouchableOpacity onPress={() => navigation.navigate("TimerPresenter")}>
        <Text>시작 하기</Text>
    </TouchableOpacity>
  </View>
  </LinearGradient>
);