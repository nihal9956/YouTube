import React from 'react'
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import PlaylistPlayTwoToneIcon from '@material-ui/icons/PlaylistPlayTwoTone';
import AccessTimeTwoToneIcon from '@material-ui/icons/AccessTimeTwoTone';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TheatersIcon from '@material-ui/icons/Theaters';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import SettingsIcon from '@material-ui/icons/Settings';
import FlagIcon from '@material-ui/icons/Flag';
import HelpIcon from '@material-ui/icons/Help';
import FeedbackIcon from '@material-ui/icons/Feedback';
import './Sidebar.css'
import '../MediaQueries/sidebarQuery.css'
import { Link } from 'react-router-dom';

function Sidebar() {
    return (
        <div className='sidebar'>
          <Link className='home-link' to='/'> <div className='sidebar__row active'>
            <HomeIcon/>
               <h2>Home</h2>
           </div></Link>
           <div className='sidebar__row'>
           <WhatshotIcon/>
           <h2>Trending</h2>
           </div>
           <div className='sidebar__row'>
           <SubscriptionsIcon/>
           <h2>Subscriptions</h2>
           </div>

           <hr className='divider'/>

           <div className='sidebar__row'>
           <VideoLibraryIcon/>
           <h2>Library</h2>
           </div>
           <div className='sidebar__row'>
           <HistoryIcon/>
           <h2>History</h2>
           </div>
           <div className='sidebar__row'>
           <VideoLibraryIcon/>
           <h2>Library</h2>
           </div>
           <div className='sidebar__row'>
           <OndemandVideoIcon/>
           <h2>Your videos</h2>
           </div>
           <div className='sidebar__row'>
           <AccessTimeTwoToneIcon/>
           <h2>Watch later</h2>
           </div>
           <div className='sidebar__row'>
           <ThumbUpIcon/>
           <h2>Liked videos</h2>
           </div>
           <div className='sidebar__row'>
           <PlaylistPlayTwoToneIcon/>
           <h2>Playlist</h2>
           </div>
           <hr className='divider'/>
           <div className='sidebar__row'>
           
           <h2>SUBSCRIPTIONS</h2>
           </div>
           <hr className='divider'/>

           <div className='sidebar__row'>
           <YouTubeIcon/>
           <h2>YouTube Premium</h2>
           </div>
           <div className='sidebar__row'>
           <TheatersIcon/>
           <h2>Movies</h2>
           </div>
           <div className='sidebar__row'>
           <SportsEsportsIcon/>
           <h2>Gaming</h2>
           </div>
           <div className='sidebar__row'>
           <EmojiObjectsIcon/>
           <h2>Learning</h2>
           </div>
            <hr className='divider'/>
            <div className='sidebar__row'>
           <SettingsIcon/>
           <h2>Settings</h2>
           </div>
           <div className='sidebar__row'>
           <FlagIcon/>
           <h2>Report history</h2>
           </div>
           <div className='sidebar__row'>
           <HelpIcon/>
           <h2>Help</h2>
           </div>
           <div className='sidebar__row'>
           <FeedbackIcon/>
           <h2>Send feedback</h2>
           </div>
        </div>
    )
}

export default Sidebar
