const musicnumber = [
    1,2,3
]

export const Randomnumber = () =>{
    const randomnumber = Math.floor(Math.random() * musicnumber.length);
    const hellMusicnumber = musicnumber[randomnumber]
  return hellMusicnumber;
}