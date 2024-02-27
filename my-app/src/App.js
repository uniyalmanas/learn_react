import './styles/App.css';
import videoDB from './data/data'
// import Counter from './components/Counter';
import { useReducer, useState } from 'react';
import AddVideo from './components/AddVideo';
import VideoList from './components/VideoList';
import ThemeContext from './components/ThemeContext';
import { useContext } from 'react';



function App() {
  const[mode,setMode]=useState('darkMode')
  const [editableVideo,seteditableVideo] = useState(null);
  const [videos,dispatch] = useReducer(videoReducer,videoDB)
// const [videos,setVideos] = useState(videoDB); //use state hook 
  //  const themeContext = useContext(ThemeContext)
  //  console.log({themeContext});
  function videoReducer(videos,action)
{
   switch(action.type)
   {
    case'ADD':
    return [...videos,{...action.payload,id:videos.length+2}]

    case 'DELETE': 
    return videos.filter((video)=>video.id!==action.payload)

    case 'UPDATE':
      const index = videos.findIndex(v=>v.id===action.payload.id)
      const newVideos=[...videos]
      newVideos.splice(index,1,action.payload)
      console.log('the index that is updated is:',index,' is  updated video');
      seteditableVideo(null)
      return newVideos;

    default : return videos
   }
}

function editVideo(id)
{
  console.log('inside editable video');
  const obj = videos.find(video=> video.id ===id);
  seteditableVideo(obj);
}

return (
    <>
   <ThemeContext.Provider value={mode}> 

    <div className={`App ${mode}`}> 
    <button onClick={()=>{
    setMode(mode == 'darkMode'?'lightMode':'darkMode')}}
    >change color</button>
     
 <AddVideo  dispatch={dispatch} editableVideo={editableVideo} ></AddVideo>

 <VideoList videos={videos} dispatch={dispatch}  editVideo={editVideo}></VideoList>

   </div>
   </ThemeContext.Provider>
    </>
  );
}

export default App;
   