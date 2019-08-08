import TimerPresenter from "./NavigationPresenter/TimerPresenter";
import {createStackNavigator, createAppContainer} from "react-navigation";
import TimerNavigation from "./TimerNavigation"
import exampleNavigation from "./exampleNavigation";
import SettingNavigation from "./SettingNavigation";
import SettingPresenter from "./NavigationPresenter/SettingPresenter";

const MainNavigation = createStackNavigator({
    exampleNavigation,
    SettingPresenter,
    TimerNavigation,
    TimerPresenter,
    SettingNavigation,
},{
    headerMode:"none"
})
export default createAppContainer(MainNavigation)