import React, { useEffect, useState } from 'react'
import '../styles/Addvideo.css'

const initialState = 
                        {
                        title:"Next  Js Tutorial",
                        channel:"Sohan Tutorials",
                        time:"15 days ago",
                        verefied: true,
                        views:'',
                        title:''
                        }

const AddVideo = ({dispatch,editableVideo }) => {
const [video,setVideo] = useState({title:"Next  Js Tutorial",
                                  channel:"Sohan Tutorials",
                                  time:"15 days ago", 
                                  verefied: true})
    function handlesubmit(e)
    {
        e.preventDefault();
        if(editableVideo)
        {
            dispatch({type:'UPDATE',payload:video})

        }
        else
        {
            dispatch({type:'ADD',payload:video})
        }
        // addVideos(video);
        setVideo(initialState)


    }
    function handlechange(e)
    {
      console.log(e.target.name,e.target.value);
      setVideo({...video,
        [e.target.name]:e.target.value})
        
    }

   useEffect(()=>{
    console.log('this is the useeffect hook ');
    if(editableVideo)
    {
        setVideo(editableVideo)    

    }
   },[editableVideo])
    
 return (
<>
<form>
<input type="text"onChange={handlechange} placeholder='title' name='title' value={video.title}/>
<input type="text" onChange={handlechange} placeholder='views' name='views'value={video.views}/>
<button onClick={handlesubmit}>{editableVideo?'edit':'Add Video'}</button>
</form>

</>
    )
}

export default AddVideo;