import {createStackNavigator, createAppContainer} from "react-navigation";
import TimerPresenter from "./NavigationPresenter/TimerPresenter";
import TimerNavigation from "./TimerNavigation"
import exampleNavigation from "./exampleNavigation";
import SettingNavigation from "./SettingNavigation";


const MainNavigation = createStackNavigator({
    exampleNavigation,
    TimerNavigation,
    TimerPresenter,
    SettingNavigation
},{
    headerMode:"none"
})
export default createAppContainer(MainNavigation)