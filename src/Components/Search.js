import React from 'react'
import './Search.css'
import '../MediaQueries/searchQuery.css'
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import { useSelector } from 'react-redux';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { useParams } from 'react-router-dom';
function Search() {
 
    const {searchTerm}=useParams();

    const channelDetailes=useSelector(state=>state.channelDetailes)
 
    return (
        <div className='body'>
            <div className='search__results'>
           <TuneOutlinedIcon/>
           <h1>FILTER</h1>
           </div>
           <div className='channelDescription'>
               <hr/>
              <h1>Latest from {searchTerm} <CheckCircleIcon/></h1> 
               <hr/>
    {channelDetailes?.items?.map(item=>{return(
        
      <div className='searchResult' onClick={()=>{window.open( `http://www.youtube.com/embed/${item?.id.videoId}` , "_blank")}}>
          {/* {console.log(item?.id.videoId)} */}
          {/* `http://www.youtube.com/embed/${item?.id.videoId}` */}
    <img  src={item?.snippet?.thumbnails.medium.url} alt='thumbnail'/>
    <div className='searchResult_desc'>
    <h2>{item?.snippet?.title}</h2>
    <div className='searchResult_info'>
    <p>{item?.snippet?.channelTitle}</p>
    <p>Views</p>
    <p>TimeStamp</p>
    </div>
    <h3>{item?.snippet?.description}</h3>

    </div>
    </div>
    
    )})}

  
           </div>

          
        </div>
    )
}

export default Search
