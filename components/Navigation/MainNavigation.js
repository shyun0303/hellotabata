import TimerPresenter from "./NavigationPresenter/TimerPresenter";
import {createStackNavigator, createAppContainer} from "react-navigation";
import exampleNavigation from "./exampleNavigation";
import SettingNavigation from "./SettingNavigation";
import SettingPresenter from "./NavigationPresenter/SettingPresenter";
import TabNavigation from "./TabNavigation";
import learningEx from "./learningExNavigation";
import AudioSettingPresenter from "./NavigationPresenter/AudioSettingPresenter";

const MainNavigation = createStackNavigator({
    TabNavigation,
    exampleNavigation,
    SettingPresenter,
    TimerPresenter,
    SettingNavigation,
    learningEx,
    AudioSettingPresenter
},{
    headerMode:"none"
})
export default createAppContainer(MainNavigation)