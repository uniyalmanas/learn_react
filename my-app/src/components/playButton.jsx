import React, { useContext, useState } from 'react'
import '../styles/playButton.css'
import ThemeContext from './ThemeContext';
const PlayButton = ({message,children,onPlay,onPause}) => {
  let [playing,setPlaying] = useState(false) ;// donot use this approach 

    const theme = useContext(ThemeContext);

    function handleckick(e)
    {
      // event object , event call karne pe  aata hai
      // e.stopPropogation();
      if(playing)
     { onPause()
      // playing = !playing;     
      setPlaying(!playing)       
   
     }
      else
      {
      onPlay()
      setPlaying(!playing)       
      }

    }
  return (
    <button className={` ${theme}`} onClick={handleckick}>
      {children} :{playing?'▶️':'⏯️'}</button>  )
}

export default PlayButton;




