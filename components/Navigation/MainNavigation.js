import {createStackNavigator, createAppContainer} from "react-navigation";
import TimerPresenter from "../../TimerPresenter";
import TimerNavigation from "./TimerNavigation"


const MainNavigation = createStackNavigator({
    TimerNavigation,
    
    TimerPresenter
},{
    headerMode:"none",
    mode:"modal"
})
export default createAppContainer(MainNavigation)