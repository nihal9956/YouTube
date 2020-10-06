import React, { useState} from 'react'
import './Header.css'
import '../MediaQueries/headerQuery.css'
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import {Avatar} from '@material-ui/core'
import Collapse from '../VanilaJs/Collapse';
import {Expand} from '../VanilaJs/Collapse';
import {auth,provider} from '../firebase';
import { useDispatch, useSelector } from 'react-redux';
import { searchChannel, signInUser } from '../ActionType/ActionType';
import {Link, useHistory} from 'react-router-dom'
function Header() {

    const history=useHistory()
   const[state,setState]=useState(true);
   const [input,setInput]=useState('');
   const dispatch=useDispatch();
   const user = useSelector(state => state.user)
 
   const url=`https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyCahK5GX-BIwZO1vdJyE17Ik4TAejt1FFs&type=video&maxResults=100&q=${input}`

  

   function Click(){
       return(
       <div>
       {setState(!state)}
       {state?Collapse():Expand()}
       </div>)
   }
  function searchResult(){
      if(!input){
          history.push('/')
      }
     fetch(url).then(response=>{
        return response.json()
     }).then(data=>{
       dispatch({
           type:searchChannel,
           channelDetailes:data
       })
     })

   setInput('')
  }
   const signIn=()=>{
       auth.signInWithPopup(provider)
       .then(result=>{
           dispatch({
               type:signInUser,
               user:result.user
           })

       })
       .catch(error=>{
          alert(error.message)
       })
       
   }
 
    return (
        <div className="header">
           <div className='header__left'>
               <MenuIcon className='Menu' onClick={Click}/>
             <Link to='/'>  <img className='logo' src='https://www.logo.wine/a/logo/YouTube/YouTube-White-Full-Color-Dark-Background-Logo.wine.svg' alt='logo'/></Link>

           </div>
           <div className='header__center'>
   <div className='headerSearch__container'>
       <input value={input} placeholder="Search" type='text' onChange={e=>setInput(e.target.value)}/>
       <div className='headerSearch__icon'>
<Link className='search_icon' to={`search/${input}`} onClick={searchResult}><SearchIcon/></Link>
       </div>
   </div>
</div>
<div className='header__right'>
<VideoCallIcon/>
<AppsIcon/>
<NotificationsIcon/>
<Avatar className='avatar' src={user?.photoURL} onClick={signIn} />
</div>

        </div>
    )
}

export default Header
