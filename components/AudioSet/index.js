import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../reducer";
import AudioSetting from "./AudioSetting";



function mapStateToProps(state) {
  const { isFemaleAudio, isMaleAudio,isBgAudio } = state;
  return {

    isFemaleAudio, isMaleAudio,isBgAudio
  };
}

function mapDispatchToProps(dispatch) {
  return {
    settingAud: bindActionCreators(actionCreators.settingAud, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AudioSetting)
