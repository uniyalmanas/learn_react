import React from 'react'
import '../styles/video.css'


const Video = ({title,channel,views,time,id,verefied,children,editVideo,dispatch}) => {
  const url =`https://picsum.photos/id/${id}/180/120`;
  return (
    <>
    <div className="container">
    <button className="close" onClick={()=>{ dispatch({type:'DELETE',payload:id})}}>❌</button>   
    <button className="edit" onClick={()=>{editVideo(id)}}>✨</button>   
   
    <div className='pic'>
    <img src={`https://picsum.photos/id/${id}/180/120`} alt="demo image" />
    </div>
    <div className="title">{title}</div> 
    <div className="channel">{channel} {verefied ? '✅': null} </div> 
    <div className="views">
        {views} views <span>.</span> {time}
    </div>
    <div>
      {children}
    </div>
    </div>

    
    
    </> 
  )
}

export default Video