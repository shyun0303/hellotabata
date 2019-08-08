import React, { Component } from 'react';
import { SectionList, StyleSheet, Text, View, Picker,TouchableOpacity,AsyncStorage } from 'react-native';
import styled from "styled-components";

const Container = styled.View`
    justify-content: center;
    align-items: center;
    flex: 2;

`;
export let _1roundVar = null;
export let _2roundVar = null;
export let _3roundVar = null;
export let _4roundVar = null;
export let _5roundVar = null;
export let _6roundVar = null;
export let _7roundVar = null;
export let _8roundVar = null;

class Exercise extends Component{
    
    state={
       __1round:this.props._1round,
       __2round:this.props._2round,
       __3round:this.props._3round,
       __4round:this.props._4round,
       __5round:this.props._5round,
       __6round:this.props._6round,
       __7round:this.props._7round,
       __8round:this.props._8round                 
    }
   
    helll = () =>{
        console.log(this.props._1round,this.props._2round,this.props._3round,this.props._4round,this.props._5round,this.props._6round,this.props._7round,this.props._8round)
    }

 
    render(){
        _1roundVar=this.state.__1round
        _2roundVar=this.state.__2round
        _3roundVar=this.state.__3round
        _4roundVar=this.state.__4round
        _5roundVar=this.state.__5round
        _6roundVar=this.state.__6round
        _7roundVar=this.state.__7round
        _8roundVar=this.state.__8round

        const{
            settingEx,
            _1round,
            _2round,
            _3round,
            _4round,
            _5round,
            _6round,
            _7round,
            _8round,
            
        }=this.props
        console.log(this.props._1round,this.props._2round,this.props._3round,this.props._4round,this.props._5round,this.props._6round,this.props._7round,this.props._8round)

    return(
        <>
        <Container>
            {this.hhhhh}
        <Text>1라운드 : </Text>
        <Picker
          selectedValue={this.state.__1round}
          style={{ height: 50, width: 200 }}
          onValueChange={(itemValue, itemIndex) => this.setState({ __1round: itemValue })}>
        <Picker.Item label="a" value="a" />
        <Picker.Item label="b" value="b" />
        <Picker.Item label="c" value="c" />
        <Picker.Item label="d" value="d" />
        <Picker.Item label="e" value="e" />
        <Picker.Item label="f" value="f" />
        <Picker.Item label="g" value="g" />
        <Picker.Item label="h" value="h" />
        <Picker.Item label="i" value="i" />
        <Picker.Item label="j" value="j" />
        <Picker.Item label="k" value="k" />
        <Picker.Item label="l" value="l" />
        <Picker.Item label="m" value="m" />
        <Picker.Item label="n" value="n" />
        </Picker>
       
        <Text>2라운드 : </Text>
        <Picker
          selectedValue={this.state.__2round}
          style={{ height: 50, width: 200 }}
          onValueChange={(itemValue, itemIndex) => this.setState({ __2round: itemValue })}>
         <Picker.Item label="a" value="a" />
        <Picker.Item label="b" value="b" />
        <Picker.Item label="c" value="c" />
        <Picker.Item label="d" value="d" />
        <Picker.Item label="e" value="e" />
        <Picker.Item label="f" value="f" />
        <Picker.Item label="g" value="g" />
        <Picker.Item label="h" value="h" />
        <Picker.Item label="i" value="i" />
        <Picker.Item label="j" value="j" />
        <Picker.Item label="k" value="k" />
        <Picker.Item label="l" value="l" />
        <Picker.Item label="m" value="m" />
        <Picker.Item label="n" value="n" />
        </Picker>
        <Text>3라운드 : </Text>
        <Picker
          selectedValue={this.state.__3round}
          style={{ height: 50, width: 200 }}
          onValueChange={(itemValue, itemIndex) => this.setState({ __3round: itemValue })}>
         <Picker.Item label="a" value="a" />
        <Picker.Item label="b" value="b" />
        <Picker.Item label="c" value="c" />
        <Picker.Item label="d" value="d" />
        <Picker.Item label="e" value="e" />
        <Picker.Item label="f" value="f" />
        <Picker.Item label="g" value="g" />
        <Picker.Item label="h" value="h" />
        <Picker.Item label="i" value="i" />
        <Picker.Item label="j" value="j" />
        <Picker.Item label="k" value="k" />
        <Picker.Item label="l" value="l" />
        <Picker.Item label="m" value="m" />
        <Picker.Item label="n" value="n" />
        </Picker>
        <Text>4라운드 : </Text>
        <Picker
          selectedValue={this.state.__4round}
          style={{ height: 50, width: 200 }}
          onValueChange={(itemValue, itemIndex) => this.setState({ __4round: itemValue })}>
         <Picker.Item label="a" value="a" />
        <Picker.Item label="b" value="b" />
        <Picker.Item label="c" value="c" />
        <Picker.Item label="d" value="d" />
        <Picker.Item label="e" value="e" />
        <Picker.Item label="f" value="f" />
        <Picker.Item label="g" value="g" />
        <Picker.Item label="h" value="h" />
        <Picker.Item label="i" value="i" />
        <Picker.Item label="j" value="j" />
        <Picker.Item label="k" value="k" />
        <Picker.Item label="l" value="l" />
        <Picker.Item label="m" value="m" />
        <Picker.Item label="n" value="n" />
        </Picker>
        <Text>5라운드 : </Text>
        <Picker
          selectedValue={this.state.__5round}
          style={{ height: 50, width: 200 }}
          onValueChange={(itemValue, itemIndex) => this.setState({ __5round: itemValue })}>
         <Picker.Item label="a" value="a" />
        <Picker.Item label="b" value="b" />
        <Picker.Item label="c" value="c" />
        <Picker.Item label="d" value="d" />
        <Picker.Item label="e" value="e" />
        <Picker.Item label="f" value="f" />
        <Picker.Item label="g" value="g" />
        <Picker.Item label="h" value="h" />
        <Picker.Item label="i" value="i" />
        <Picker.Item label="j" value="j" />
        <Picker.Item label="k" value="k" />
        <Picker.Item label="l" value="l" />
        <Picker.Item label="m" value="m" />
        <Picker.Item label="n" value="n" />
        </Picker>
        <Text>6라운드 : </Text>
        <Picker
          selectedValue={this.state.__6round}
          style={{ height: 50, width: 200 }}
          onValueChange={(itemValue, itemIndex) => this.setState({ __6round: itemValue })}>
         <Picker.Item label="a" value="a" />
        <Picker.Item label="b" value="b" />
        <Picker.Item label="c" value="c" />
        <Picker.Item label="d" value="d" />
        <Picker.Item label="e" value="e" />
        <Picker.Item label="f" value="f" />
        <Picker.Item label="g" value="g" />
        <Picker.Item label="h" value="h" />
        <Picker.Item label="i" value="i" />
        <Picker.Item label="j" value="j" />
        <Picker.Item label="k" value="k" />
        <Picker.Item label="l" value="l" />
        <Picker.Item label="m" value="m" />
        <Picker.Item label="n" value="n" />
        </Picker>
        <Text>7라운드 : </Text>
        <Picker
          selectedValue={this.state.__7round}
          style={{ height: 50, width: 200 }}
          onValueChange={(itemValue, itemIndex) => this.setState({ __7round: itemValue })}>
         <Picker.Item label="a" value="a" />
        <Picker.Item label="b" value="b" />
        <Picker.Item label="c" value="c" />
        <Picker.Item label="d" value="d" />
        <Picker.Item label="e" value="e" />
        <Picker.Item label="f" value="f" />
        <Picker.Item label="g" value="g" />
        <Picker.Item label="h" value="h" />
        <Picker.Item label="i" value="i" />
        <Picker.Item label="j" value="j" />
        <Picker.Item label="k" value="k" />
        <Picker.Item label="l" value="l" />
        <Picker.Item label="m" value="m" />
        <Picker.Item label="n" value="n" />
        </Picker>
        <Text>8라운드 : </Text>
        <Picker
          selectedValue={this.state.__8round}
          style={{ height: 50, width: 200 }}
          onValueChange={(itemValue, itemIndex) => this.setState({ __8round: itemValue })}>
         <Picker.Item label="a" value="a" />
        <Picker.Item label="b" value="b" />
        <Picker.Item label="c" value="c" />
        <Picker.Item label="d" value="d" />
        <Picker.Item label="e" value="e" />
        <Picker.Item label="f" value="f" />
        <Picker.Item label="g" value="g" />
        <Picker.Item label="h" value="h" />
        <Picker.Item label="i" value="i" />
        <Picker.Item label="j" value="j" />
        <Picker.Item label="k" value="k" />
        <Picker.Item label="l" value="l" />
        <Picker.Item label="m" value="m" />
        <Picker.Item label="n" value="n" />
        </Picker>

        </Container>
        <Container>
         <TouchableOpacity onPress = {settingEx}>
         <Text>aa</Text>
        </TouchableOpacity>
        </Container>
        </>
    )
        }
}

export default Exercise;