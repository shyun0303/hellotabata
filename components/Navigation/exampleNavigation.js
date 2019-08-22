import React from "react";
import styled from "styled-components";
import { TouchableOpacity } from "react-native";
import {LinearGradient} from "expo-linear-gradient" 


const View = styled.View`
    justify-content: flex-start;
    align-items: flex-end;
    padding : 100px 100px;
    flex:1;
`;

const Text = styled.Text`

`;

export default ({navigation})=>{


   return (
     <LinearGradient colors={["#F7FFF3","#2ABDEB"]} style={{flex:1}}>
   <View>

    <Text>준비중</Text>
    
    </View>
    </LinearGradient>
 
)}