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

const learningEx = ({navigation}) =>{
  return (
  <View>
    <TouchableOpacity>
      <Text>운동배우기</Text>
    </TouchableOpacity>
  </View>
  )
}

export default learningEx
