import React from 'react';
import './App.css';
import Body from './Components/Body';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Search from './Components/Search';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'



  const App = () => {
    
    return(
    <div className='app'>
      <Router>
        <Switch>
        <Route path='/search/:searchTerm'>
    
    <Header/>
      <div className='app__body'>
      <Sidebar/>
      <Search/>
      </div>
      
     </Route>
     <Route path='/'>
          
      <Header/>
      <div className='app__body'>
      <Sidebar/>
      <Body/>
      </div>
     </Route>

   
     
      </Switch>
      </Router>
      
    </div>
    );
  
}

export default App

// api key=AIzaSyBRViXP04K-8prmQVpx_i0NG5wS8VX2QjU