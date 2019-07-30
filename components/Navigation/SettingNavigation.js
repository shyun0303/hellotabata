import React,{Component} from "react";
import styled from "styled-components";
import { TouchableOpacity,StyleSheet } from "react-native";
import {LinearGradient} from "expo" 
import Button from "../Button";
import { initialState } from "../../reducer";

const View = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;

`;

const Text = styled.Text`
 
`;


class MuteButton extends Component {


  render(){

    const {
      isMuted,
      unmuteMusic,
      muteMusic
    } = this.props
    return(
  <LinearGradient colors={["#F7FFF3","#2ABDEB"]} style={{flex:1}}>
    <View>
    {!isMuted && (<Button iconName={"volume-off"} onPress={muteMusic} />)} 
    {isMuted && (<Button iconName={"volume-up"} onPress={unmuteMusic} />)}
    </View>
  </LinearGradient>)
}}

export default MuteButton;