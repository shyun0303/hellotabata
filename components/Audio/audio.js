import { Audio } from 'expo-av';
import { Randomnumber } from './randomlist';
import { initialState } from '../../reducer';


const hellMusic = new Audio.Sound();

export const hellMusicLoad = async (file)=>{
   file =parseInt(Randomnumber());
try {
   switch(file){
      case 1: await hellMusic.loadAsync(require("./hey2.mp3"));
      case 2: await hellMusic.loadAsync(require("./hey.mp3"));
      case 3: await hellMusic.loadAsync(require("./hey3.mp3"));
   }

} catch (error) {
} 
}

export const hellMusicPlay = async()=>{
try {
   await hellMusic.playAsync();
} catch (error) {
}}
export const hellMusicStop = async()=>{
   try {
   await hellMusic.unloadAsync()
   await hellMusic.stopAsync();     
   } catch (error) {     
   }}
export const hellMusicPause = async()=>{
   try {
      await hellMusic.pauseAsync();
   } catch (error) { 
   }}
export const hellMusicRepyla = async()=>{
   try{
      await hellMusic.playAsync()
   }catch{
      
   }
}
export const hellMusicMute = async()=>{
   try{
      await hellMusic.setStatusAsync({isMuted:true})      
   }catch{
   }
}
export const hellMusicunMute = async()=>{
   try{
    await hellMusic.setStatusAsync({isMuted:false})     
   }catch{
   }
}
