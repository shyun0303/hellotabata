import React, { Component } from 'react';
import { SectionList, StyleSheet, Text, View, Picker,TouchableOpacity,AsyncStorage } from 'react-native';
import {Checkbox} from "react-native-paper";
import styled from "styled-components";

const Container = styled.View`
  flex:1;
  justify-content:center;
  align-items:center;
`;
export let _isFemaleAudioVar= null;
export let _isMaleAudioVar= null;
export let _isBgAudioVar= null;


class AudioSetting extends Component{
  hell = () =>{
    console.log(this.props.isFemaleAudio,this.props.isMaleAudio,this.props.isBgAudio)
  }
    state = {
        __isFemaleAudio:this.props.isFemaleAudio,
        __isMaleAudio:this.props.isMaleAudio,
        __isBgAudio:this.props.isBgAudio
      };
    
      render() {
          _isFemaleAudioVar=this.state.__isFemaleAudio
          _isMaleAudioVar=this.state.__isMaleAudio
          _isBgAudioVar=this.state.__isBgAudio

        const{
              settingAud,
              isFemaleAudio,
              isMaleAudio,
              isBgAudio
             }=this.props
       
       
        const { __isFemaleAudio,__isMaleAudio,__isBgAudio} = this.state;

        console.log(this.props.isFemaleAudio,this.props.isMaleAudio,this.props.isBgAudio)

        return (
          <Container>
          <Text>여성 목소리</Text>
          <Checkbox
            status={__isFemaleAudio ? 'checked' : 'unchecked'}
            onPress={() => { this.setState({ __isFemaleAudio: !__isFemaleAudio }); }}
          />
          <Text>남성 목소리</Text>         
          <Checkbox
            status={__isMaleAudio ? 'checked' : 'unchecked'}
            onPress={() => { this.setState({ __isMaleAudio: !__isMaleAudio }); }}
          />
          <Text>배경 음악</Text>
            <Checkbox
            status={__isBgAudio ? 'checked' : 'unchecked'}
            onPress={() => { this.setState({ __isBgAudio: !__isBgAudio }); }}
          />
          <TouchableOpacity onPress={settingAud}><Text>확인</Text></TouchableOpacity>
          </Container>
        );
      }
}

export default AudioSetting