import React from "react";
import {createBottomTabNavigator,createAppContainer,createStackNavigator} from "react-navigation";
import Ionicons from 'react-native-vector-icons/Ionicons';
import TimerPresenter from "./NavigationPresenter/TimerPresenter";
import SettingNavigation from "./SettingNavigation";
import exampleNavigation from "./exampleNavigation";
import learningEx from "./learningExNavigation";


export default createBottomTabNavigator({
    타이머 :TimerPresenter,
    운동법 :learningEx,
    세팅 :SettingNavigation,
    SHOP :exampleNavigation
        
}, {
    defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
          const { routeName } = navigation.state;
          let IconComponent = Ionicons;
          let iconName;
          if (routeName === '타이머') {
            iconName = `ios-alarm`;
          }else if (routeName === '운동법') {
            iconName = `ios-body`;
          }  else if (routeName === '세팅') {
            iconName = `ios-options`;
          } else if (routeName === 'SHOP') {
            iconName = `ios-cart`;
          }
  
          // You can return any component that you like here!
          return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    })}

);
