import React from "react";
import {createBottomTabNavigator,createAppContainer,createStackNavigator} from "react-navigation";
import {View,Text,TouchableOpacity} from "react-native";
import TimerPresenter from "./NavigationPresenter/TimerPresenter";
import SettingPresenter from "./NavigationPresenter/SettingPresenter";
import SettingNavigation from "./SettingNavigation";
import exampleNavigation from "./exampleNavigation";




export default createBottomTabNavigator({
    타이머 :TimerPresenter,
    운동세팅 :SettingNavigation,
    SHOP :exampleNavigation
        
});
