import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../reducer";
import Timer from "./presenter";


function mapStateToProps(state) {
  const { isPlaying,isPaused, elapsedTime, timerDuration,isRestart,isMuted, _1round,_2round,_3round,_4round,_5round,_6round,_7round,_8round,isFemaleAudio, isMaleAudio,isBgAudio } = state;
  return {
    isPlaying,
    isPaused,
    elapsedTime,
    timerDuration,
    isRestart,
    isMuted,
    _1round,_2round,_3round,_4round,_5round,_6round,_7round,_8round,isFemaleAudio, isMaleAudio,isBgAudio
  
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
    settingEx : bindActionCreators(actionCreators.unmuteMusic, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
