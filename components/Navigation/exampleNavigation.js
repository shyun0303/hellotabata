import React from "react";
import styled from "styled-components";
import { TouchableOpacity,Image } from "react-native";
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

   <Image source = {require("../img/buf.gif")} style={{borderWidth:5,width:150, height:300,}} />
    
    </View>
    </LinearGradient>
 
)}