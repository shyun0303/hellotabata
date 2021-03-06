import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../reducer";
import Exercise from "./exerciseRoundSetting";


function mapStateToProps(state) {
  const { isPlaying,isPaused, elapsedTime, timerDuration,isRestart,isMuted, _1round,_2round,_3round,_4round,_5round,_6round,_7round,_8round } = state;
  return {
    isPlaying,
    isPaused,
    elapsedTime,
    timerDuration,
    isRestart,
    isMuted,
    _1round,
    _2round,
    _3round,_4round,_5round,_6round,_7round,_8round
  };
}

function mapDispatchToProps(dispatch) {
  return {
    startTimer: bindActionCreators(actionCreators.startTimer, dispatch),
    restartTimer: bindActionCreators(actionCreators.restartTimer, dispatch),
    addSecond: bindActionCreators(actionCreators.addSecond, dispatch),
    pauseTimer: bindActionCreators(actionCreators.pauseTimer, dispatch),
    reTimer : bindActionCreators(actionCreators.reTimer,dispatch),
    muteMusic: bindActionCreators(actionCreators.muteMusic, dispatch),
    unmuteMusic: bindActionCreators(actionCreators.unmuteMusic, dispatch),
    settingEx: bindActionCreators(actionCreators.settingEx, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Exercise)
