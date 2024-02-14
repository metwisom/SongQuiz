import {useEffect} from 'react';


function Player(){

  let audio:HTMLAudioElement
  useEffect(() => {
    audio = new Audio()
    audio.src = '/files/a0d9fd3ee8f80b35e2df3a01d1ef784d.mp3'
    console.log(1)
    audio.oncanplay = ()=> {
      audio.oncanplay = null
      console.log(audio.duration)
      audio.currentTime = audio.duration * Math.random();
      console.log(audio.currentTime)
    }

  });

  const play = function (){
    if(typeof audio != undefined){

      audio.play()
    }
  }


  return <div>
    <button onClick={play}></button>
  </div>

}


export default Player