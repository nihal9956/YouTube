import { Avatar } from '@material-ui/core'
import React from 'react'
import './Video.css'
import '../MediaQueries/videoQuery.css'
function Video({thumbnail,avatar,title,views,timestamp,channelName}) {
    return (
        <div>
        <div className='video__card'>
            <img src={thumbnail}
             alt='thumbnail' />
             <div className='video__info'>
                 <Avatar className='avatar' src={avatar}/>
    <h2>{title}</h2>
             </div>
             <div className='video__channel'>
    <h3>{channelName}</h3>
             </div>
             <div className='video__detailes'>
              <p>{views}<span>.</span></p>
    <p>{timestamp}</p>
             </div>
            
        </div>
       
        </div>
    )
}

export default Video

// AIzaSyBRViXP04K-8prmQVpx_i0NG5wS8VX2QjU Youtube api key