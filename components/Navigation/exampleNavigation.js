import React from "react";
import styled from "styled-components";
import { TouchableOpacity } from "react-native";
import {LinearGradient} from "expo" 

const View = styled.View`
    justify-content: flex-start;
    align-items: flex-end;
    padding : 100px 100px;
    flex:1;
`;

const Text = styled.Text`

`;

export default ({navigation})=>(
    <LinearGradient colors={["#F7FFF3","#2ABDEB"]} style={{flex:1}}>
   <View>
        <TouchableOpacity onPress={() => navigation.navigate("SettingNavigation")}>
        <Text>Setting</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("TimerNavigation")}>
        <Text>바로가기</Text>
        </TouchableOpacity>
    </View>
    </LinearGradient>
)