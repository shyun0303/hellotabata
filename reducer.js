// Imports
// Actions

const START_TIMER = "START_TIMER";
const RESTART_TIMER = "RESTART_TIMER";
const ADD_SECOND = "ADD_SECOND";
const PAUSE_TIMER = "PAUSE_TIMER";
const RE_TIMER ="RE_TIMER";
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

// Reducer

export const TIMER_DURATION = 250;

const initialState = {
  isPlaying: false,
  isPaused : false,
  isRestart: false,
  elapsedTime: 0,
  timerDuration: TIMER_DURATION
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
    default:
      return state;
  }
}

// Reducer Functions
function applyReTimer(state,action){
  return{
    ...state,
    isPlaying:true,
    isPaused:false,
    isRestart:true
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
  reTimer
};
export { actionCreators };

// Default

export default reducer;
