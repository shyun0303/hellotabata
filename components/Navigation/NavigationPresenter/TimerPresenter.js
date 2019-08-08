import React from "react";
import reducer from "../../../reducer";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Timer from "../../Timer";
import {View} from "react-native"

export default () =>{
    let store = createStore(reducer);
 
    return(<View style = {{
        flex:1
    }}>
               <Timer />
               </View>)
    
}