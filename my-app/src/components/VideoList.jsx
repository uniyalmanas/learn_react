import React from 'react'
import Video from './Video';
import PlayButton from './playButton';
const VideoList = ({videos,deleteVideo,editVideo,dispatch}) => {
  return (
<>

{
       videos.map((val)=>{
     return <Video {...val} key={val.id} deleteVideo={deleteVideo} dispatch={dispatch} editVideo={editVideo}>
        <div style={{clear:'both'}}>
     <PlayButton  message="play-msg" onPlay={()=>{console.log('play')}} onPause={()=>{console.log('Pausse')}} > Play</PlayButton>
    </div> 
      </Video>
        
       })
    }  
</>  
)
}

export default VideoList