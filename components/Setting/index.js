import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../reducer";
import MuteButton from "../Navigation/SettingNavigation";


function mapStateToProps(state) {
    const { isPlaying,isPaused, elapsedTime, timerDuration,isRestart,isMuted } = state;
    return {
      isPlaying,
      isPaused,
      elapsedTime,
      timerDuration,
      isRestart,
      isMuted
    };
  }


  function mapDispatchToProps(dispatch) {
    return {
      muteMusic: bindActionCreators(actionCreators.muteMusic, dispatch),
      unmuteMusic: bindActionCreators(actionCreators.unmuteMusic, dispatch)
    }
}
  export default connect(mapStateToProps,mapDispatchToProps)(MuteButton);