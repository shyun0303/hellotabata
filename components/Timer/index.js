import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../reducer";
import Timer from "./presenter";

function mapStateToProps(state) {
  const { isPlaying,isPaused, elapsedTime, timerDuration,isRestart } = state;
  return {
    isPlaying,
    isPaused,
    elapsedTime,
    timerDuration,
    isRestart
  };
}

function mapDispatchToProps(dispatch) {
  return {
    startTimer: bindActionCreators(actionCreators.startTimer, dispatch),
    restartTimer: bindActionCreators(actionCreators.restartTimer, dispatch),
    addSecond: bindActionCreators(actionCreators.addSecond, dispatch),
    pauseTimer: bindActionCreators(actionCreators.pauseTimer, dispatch),
    reTimer : bindActionCreators(actionCreators.reTimer,dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
