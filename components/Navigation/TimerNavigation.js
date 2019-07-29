import React from "react";
import styled from "styled-components";
import { TouchableOpacity } from "react-native";

const View = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
  background-color: #5e7e9b;

`;


const Text = styled.Text`
  background-color: red;
  font-size : 70px;
  color: white;
  border : 10px solid red;
  border-radius:10px;
`;

export default ({ navigation }) => (
  <View>
    <TouchableOpacity onPress={() => navigation.navigate("TimerPresenter")}>
        <Text>시작 하기</Text>
    </TouchableOpacity>
  </View>
);