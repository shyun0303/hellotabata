import React, { Component } from "react";
import { View, StyleSheet, Text, StatusBar, BackHandler,Image,TouchableOpacity } from "react-native";
import Button, { Button_2 } from "../Button";
import {TIMER_DURATION} from  "../../reducer";
import { hellMusic, hellMusicPlay, hellMusicStop, hellMusicPause, hellMusicRepyla, hellMusicLoad, hellMusicMute, hellMusicunMute, } from "../Audio/audio";
import styled from "styled-components";


const Container = styled.View`
height : 100%;

`
const IphoneHeader = styled.View`
height : 3.5%;

`
const MuteButtonContainer = styled.View`
height : 8%;

`
const MainTimeContainer = styled.View`
height : 13%;

`
const ExerciseContainer = styled.View`
height : 50%;
align-items:center;
`
const SubTimeContainer = styled.View`
height : 13%;

`;
const PlayButtonContainer = styled.View`
height : 13%;

`;

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
    if(remainSeconds<=240&&remainSeconds>=222){
      switch(_1round){
        case "h":
          return(<Image source = {require("../img/buf.gif")} style={{width:150, height:300}}/>)
      }
      
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
    currentColor : "#29ABE1",
    records:[]
  }  

addRecord = (timerecord) =>{
 const newRecord = {
     시간 : Date.now(),
     운동시간 : `${timerecord} 초`,
     소모칼로리 :`${timerecord} Kcal 소모`
 }
 
 this.setState(prevState=>({
     records:[
         newRecord,
         ...prevState.records
     ]
 }));
 console.log(this.state.records)
}



  componentWillReceiveProps(nextProps) {
   
    BackHandler.addEventListener('hardwareBackPress',()=>{
  {   
    this.props.isPlaying=false;
    this.props.isPaused=false;
    this.props.isRestart=false;
    this.props.timerDuration=TIMER_DURATION;
    clearInterval(this.state.interval);
    hellMusicStop() 
  }
  return 
  } 
)
    const currentProps = this.props;
    
 /* play music */
 if(nextProps.isBgAudio){
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
    }}else {
      hellMusicStop()
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
      isFemaleAudio, isMaleAudio,isBgAudio
    } = this.props;
    
       
    return (
   <Container style = {{backgroundColor: this.state.currentColor}}>
      <IphoneHeader/>

     <MuteButtonContainer>
      {!isMuted && (<Button_2 iconName={"volume-strike"} onPress={muteMusic} />)} 
      {isMuted && (<Button_2 iconName={"volume"} onPress={unmuteMusic} />)}
      </MuteButtonContainer>
      <MainTimeContainer>
          <Text style = {styles.time}>
            {formatTime(timerDuration - elapsedTime)}
               </Text>
      </MainTimeContainer>
           <ExerciseContainer>
           
                  {showExercise(timerDuration-elapsedTime,_1round,_2round,_3round,_4round,_5round,_6round,_7round,_8round)}
            
             </ExerciseContainer>
        <SubTimeContainer>
          <Text style={styles.time}>
            {mainTime(timerDuration - elapsedTime)}
          </Text>
        </SubTimeContainer>
      <PlayButtonContainer style = {styles.lower}>
          {!isPlaying && !isPaused && !isRestart&&(
            <Button iconName={"play-circle"} onPress={()=>{this.props.startTimer()}} />
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
      </PlayButtonContainer>          
      
    
      </Container>
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
    color:"white",
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


});

export default Timer;
