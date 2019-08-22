import React from "react";
import reducer from "../../../reducer";
import { createStore } from "redux";
import { Provider } from "react-redux";
import {View} from "react-native"
import AudioSet from "../../AudioSet";


export default () =>{

 
    return(<View style = {{
        flex:1}}>
                 <AudioSet />
       </View>)
    
}