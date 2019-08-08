import Exercise, { _1roundVar, _2roundVar, _3roundVar, _4roundVar, _5roundVar, _6roundVar, _7roundVar, _8roundVar } from "./components/Setting/exerciseRoundSetting";

// Imports
// Actions

const START_TIMER = "START_TIMER";
const RESTART_TIMER = "RESTART_TIMER";
const ADD_SECOND = "ADD_SECOND";
const PAUSE_TIMER = "PAUSE_TIMER";
const RE_TIMER ="RE_TIMER";
const MUTE_MUSIC = "MUTE_MUSIC";
const UNMUTE_MUSIC = "UNMUTE_MUSIC";
const SETTING_EXCERCISE = "SETTING_EXCERCISE";
// Action Creators

function startTimer() {
  return {
    type: START_TIMER,
  
  };
}
function restartTimer() {
  return {
    type: RESTART_TIMER
  };
}

function addSecond() {
  return {
    type: ADD_SECOND
  };
}
function reTimer() {
  return {
    type: RE_TIMER
  };
}
function pauseTimer(){
  return {
    type : PAUSE_TIMER
  }
}
function muteMusic(){
  return{
    type: MUTE_MUSIC
  }
}
function unmuteMusic(){
  return{
    type: UNMUTE_MUSIC
  }
}
function settingEx(){
  return{
    type: SETTING_EXCERCISE
  }
}

// Reducer

export const TIMER_DURATION = 250;

export const initialState = {
  isPlaying: false,
  isPaused : false,
  isRestart: false,
  elapsedTime: 0,
  timerDuration: TIMER_DURATION,
  _1round:"h",_2round:"g",_3round:"f",_4round:"e",_5round:"d",_6round:"c",_7round:"b",_8round:"a"

};

function reducer(state = initialState, action) {
  switch (action.type) {
    case START_TIMER:
      return applyStartTimer(state, action);
    case RESTART_TIMER:
      return applyRestartTimer(state, action);
    case ADD_SECOND:
      return applyAddSecond(state, action);
    case PAUSE_TIMER:
      return applyPauseTimer(state,action);
    case RE_TIMER:
      return applyReTimer(state,action);
    case MUTE_MUSIC:
      return applyMuteMusic(state,action);
    case UNMUTE_MUSIC:
      return applyUnMuteMusic(state,action);
    case SETTING_EXCERCISE:
      return settingExercise(state,action);
    default:
      return state;
  }
}

// Reducer Functions
function settingExercise(state,action){
  const __1round = _1roundVar
  const __2round = _2roundVar
  const __3round = _3roundVar
  const __4round = _4roundVar
  const __5round = _5roundVar
  const __6round = _6roundVar
  const __7round = _7roundVar
  const __8round = _8roundVar

  return{
  ...state,
  _1round:__1round,
  _2round:__2round,
  _3round:__3round,
  _4round:__4round,
  _5round:__5round,
  _6round:__6round,
  _7round:__7round,
  _8round:__8round,
  }
}

function applyReTimer(state,action){
  return{
    ...state,
    isPlaying:true,
    isPaused:false,
    isRestart:true,
  }
}
function applyPauseTimer(state, action){
  return{
    ...state,
    isPlaying: false,
    isPaused:true,
    isRestart:false
   }
}
function applyStartTimer(state, action) {
  return {
    ...state,
    isPlaying: true,
    isPaused: false,
    isRestart:false,
    elapsedTime: 0,
  };
}

function applyRestartTimer(state, action) {
  return {
    ...state,
    isPlaying: false,
    isPaused: false,
    isRestart: false,
    elapsedTime: 0
  };
}
function applyMuteMusic(state,action){
  return{
    ...state,
    isMuted: true
  }
}
function applyUnMuteMusic(state,action){
  return{
    ...state,
    isMuted: false
  }
}


function applyAddSecond(state, action) {
  const { elapsedTime } = state;
  if (elapsedTime < TIMER_DURATION) {
    return {
      ...state,
      elapsedTime: elapsedTime + 1
    };
  } else {
    return {
      ...state,
      isPlaying: false
    };
  }
}

// Exports

const actionCreators = {
  startTimer,
  restartTimer,
  addSecond,
  pauseTimer,
  reTimer,
  muteMusic,
  unmuteMusic,
  settingEx
};
export { actionCreators };

// Default

export default reducer;
