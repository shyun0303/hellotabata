
export const audioList = [
    "hey.mp3",
    "hey2.mp3",
    "hey3.mp3"
]


export const RandomSound = () =>{
    const randommusic = Math.floor(Math.random() * audioList.length);
    const RandomMusic = audioList[randommusic]
  return RandomMusic;
}