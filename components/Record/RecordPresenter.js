import React,{Component} from "react";
import styled from "styled-components";
import { TouchableOpacity,StyleSheet } from "react-native";
import Body from "../recordComponents/Body";
import Header from "../recordComponents/Header";


const View = styled.View`
 
`;
const Text = styled.Text``;

class Record extends Component{
   state={
       records:[]
   }
   addRecord = () =>{
    const newRecord = {
        nowTime: Date.now(),
        exerciseTime : `${this.props.elapsedTime} 초`,
        kCal:`${this.props.elapsedTime*7} Kcal 소모`
    }
     return(
         <View>
         <Text>{newRecord}</Text>
         </View>
     )
 }

   
    render(){
        const {
            isPlaying,
            elapsedTime,

        }=this.props;
        
        return(
            <View>
       
            </View>
                
                           
        )
    }
}

export default Record