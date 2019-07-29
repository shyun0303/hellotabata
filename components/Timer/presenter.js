import React, { Component } from "react";
import { View, StyleSheet, Text, StatusBar, BackHandler } from "react-native";
import Button from "../Button";
import {TIMER_DURATION} from  "../../reducer";
import { hellMusicPlay, hellMusicStop, hellMusicPause, hellMusicRepyla, hellMusicLoad } from "../Audio/audio";



function formatTime(time) {
  var minutes = Math.floor(time / 60);
  time -= minutes * 60;

  var seconds = parseInt(time % 60, 10);

  return `${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10
    ? `0${seconds}`
    : seconds}`;

  return;
}

export const mainTime = (time) =>{
  var seconds = parseInt((time)%30)
  var remainSeconds = parseInt(time)

  if(remainSeconds!=0)
  {if(seconds>=10&&remainSeconds!=TIMER_DURATION){
    if(seconds-10>0){
        return (seconds-10)
      }else if(seconds-10 == 0){
        return (<Text>휴식!</Text>)
      }
  }else if(seconds<10&&seconds>=0){
    if(seconds == 0){
        return (<Text>시작!</Text>)}
        else{
          return seconds
        }
  }
}else if(remainSeconds==0){
  return (<Text style={[{fontSize:80},{color:"white"}]}>훌륭하다!!</Text>)
}
}


class Timer extends Component {
  state = {
    currentColor : "#29ABE1"
  }

  componentWillReceiveProps(nextProps) {
   BackHandler.addEventListener('hardwareBackPress',()=>{
  {
     hellMusicStop() 
  }
  return 
  } 
)
    const currentProps = this.props;
    
    
    if(nextProps.isRestart&&nextProps.isPlaying&&!nextProps.isPaused){
      hellMusicRepyla()
    }else if(!nextProps.isRestart&&!nextProps.isPlaying&&nextProps.isPaused){
      hellMusicPause()
    }else if(!nextProps.isRestart&&nextProps.isPlaying&&!nextProps.isPaused){
      hellMusicPlay()
    }else if(!nextProps.isRestart&&!nextProps.isPlaying&&!nextProps.isPaused){
      hellMusicStop()
    }

    
    if (!currentProps.isPlaying && nextProps.isPlaying) {
      const timerInterval = setInterval(() => {
        currentProps.addSecond();
      }, 1000);
      this.setState({
        interval: timerInterval
      });
     
    }
     else if (currentProps.isPlaying && !nextProps.isPlaying) {
      clearInterval(this.state.interval);
     
     }
  }
  render() {
    hellMusicLoad()
    if((this.props.timerDuration-this.props.elapsedTime)%30==0){
      this.state.currentColor="#CE0B24"
    }
 
    if((this.props.timerDuration-this.props.elapsedTime)%30==10){
      this.state.currentColor="#29ABE1"
    }
    
   const {
      isPlaying,
      elapsedTime,
      timerDuration,
      startTimer,
      restartTimer,
      pauseTimer,
      reTimer,
      isPaused,
      isRestart 
    } = this.props;

       
    return (
      <View style={[styles.container, {backgroundColor: this.state.currentColor}]}>
        <StatusBar barStyle="light-content" />
        <View style={styles.upper}>
          <Text style={styles.time}>
            {formatTime(timerDuration - elapsedTime)}
               </Text>
          <Text style={styles.timea}>
            {mainTime(timerDuration - elapsedTime)}
          </Text>
        </View>
        <View style={styles.lower}>
          {!isPlaying && !isPaused && !isRestart&&(
            <Button iconName={"play-circle"} onPress={startTimer} />
          )}
          {isPlaying && (
            <Button iconName={"stop-circle"} onPress={restartTimer} />
          )}
          {isPlaying && (
            <Button  iconName={"pause-circle"} onPress={pauseTimer} />
          )}
          {!isPlaying && isPaused && (
            <Button  iconName={"play-circle"} onPress={reTimer} />
          )}
        </View>
      </View>
    );
 
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  lower: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    paddingLeft: 25,
    paddingRight: 25
  },
  upper: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center"
  },
  time: {
    color: "white",
    fontSize: 120,
    fontWeight: "100",
    marginBottom: 100
  },
  timea:{
    color: "white",
    fontSize: 100,
    fontWeight: "100",
    alignItems:"center"
  }
});

export default Timer;
