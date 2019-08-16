import React, { Component } from "react";
import { View, StyleSheet, Text, StatusBar, BackHandler } from "react-native";
import Button, { Button_2 } from "../Button";
import {TIMER_DURATION} from  "../../reducer";
import { hellMusic, hellMusicPlay, hellMusicStop, hellMusicPause, hellMusicRepyla, hellMusicLoad, hellMusicMute, hellMusicunMute } from "../Audio/audio";



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

const showExercise = (time,_1round,_2round,_3round,_4round,_5round,_6round,_7round,_8round)=>{
  var remainSeconds = parseInt(time)
  if(remainSeconds!=0){
    if(remainSeconds<=240&&remainSeconds>=220){
      return(<Text>{_1round}</Text>)
    }else if(remainSeconds<=210&&remainSeconds>=191){
      return(<Text>{_2round}</Text>)
    }else if(remainSeconds<=180&&remainSeconds>=161){
      return(<Text>{_3round}</Text>)
    }else if(remainSeconds<=150&&remainSeconds>=131){
      return(<Text>{_4round}</Text>)
    }else if(remainSeconds<=120&&remainSeconds>=101){
      return(<Text>{_5round}</Text>)
    }else if(remainSeconds<=90&&remainSeconds>=71){
      return(<Text>{_6round}</Text>)
    }else if(remainSeconds<=60&&remainSeconds>=41){
      return(<Text>{_7round}</Text>)
    }else if(remainSeconds<=30&&remainSeconds>=11){
      return(<Text>{_8round}</Text>)
    }
  }
  
}

class Timer extends Component {
  state = {
    currentColor : "#29ABE1"
  }

  componentWillReceiveProps(nextProps) {
   
    BackHandler.addEventListener('hardwareBackPress',()=>{
  {   
    nextProps.isPlaying=false;
    nextProps.isPaused=false;
    nextProps.isRestart=false;
    this.props.elapsedTime=0;
    clearInterval(this.state.interval);
    hellMusicStop() 
  }
  return 
  } 
)
    const currentProps = this.props;
    
 /* play music */
    if(nextProps.isRestart&&nextProps.isPlaying&&!nextProps.isPaused){
      hellMusicRepyla()
    }else if(!nextProps.isRestart&&!nextProps.isPlaying&&nextProps.isPaused){
      hellMusicPause()
    }else if(!nextProps.isRestart&&nextProps.isPlaying&&!nextProps.isPaused){
      hellMusicPlay()
    }else if(!nextProps.isRestart&&!nextProps.isPlaying&&!nextProps.isPaused){
      hellMusicStop()
    }
    if(nextProps.isMuted==true){
      hellMusicMute()
    }else if(nextProps.isMuted==false){
      hellMusicunMute()
    }
 /*--------------------------------------------------*/
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
  /*------------add second -----------------*/
  render() {

    hellMusicLoad()
    if((this.props.timerDuration-this.props.elapsedTime)%30==0){
      this.state.currentColor="#CE0B24"
    }
    
    if((this.props.timerDuration-this.props.elapsedTime)%30==10){
      this.state.currentColor="#29ABE1"
    }
    console.log(this.props._1round,this.props._2round,this.props._3round,this.props._4round,this.props._5round,this.props._6round,this.props._7round,this.props._8round)
    
    const {
      isPlaying,
      elapsedTime,
      timerDuration,
      startTimer,
      restartTimer,
      pauseTimer,
      reTimer,
      isPaused,
      isRestart,
      isMuted,
      muteMusic,
      unmuteMusic,
      _1round,_2round,_3round,_4round,_5round,_6round,_7round,_8round,
    } = this.props;
    
       
    return (
   
      <View style={[styles.container, {backgroundColor: this.state.currentColor}]}>
        <StatusBar barStyle="light-content" />
        <View style={styles.upper}>
      {!isMuted && (<Button_2 iconName={"volume-strike"} onPress={muteMusic} />)} 
      {isMuted && (<Button_2 iconName={"volume"} onPress={unmuteMusic} />)}
          <Text style={styles.time}>
            {formatTime(timerDuration - elapsedTime)}
               </Text>
            <Text style={styles.exercise}>
               {showExercise(timerDuration-elapsedTime,_1round,_2round,_3round,_4round,_5round,_6round,_7round,_8round)}
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
    flex: 1
   },
  lower: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    
  },
  upper: {
    flex: 6,
    borderColor:"white",
    justifyContent: "flex-start",
    alignItems: "center",
    
  },
  time: {
    marginTop:-40,
    color: "white",
    fontSize: 80,
    fontWeight: "100",
    textAlign:"center",

  },
  exercise:{
    color: "white",
    fontSize:30,
    marginTop:100,
    marginBottom : 30
  },
  timea:{
    color: "white",
    fontSize: 80,
    fontWeight: "100",
    marginTop:100,
    
    },

});

export default Timer;
