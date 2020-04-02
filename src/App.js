import React from 'react';
import './App.css';

import Header from './component/Header/Header';
import Navbar from './component/Navbar/Navbar';
import Profile from './component/Profile/Profile';
import Dialogs from './component/Dialogs/Dialogs';
import News from './component/News/News';
import Music from './component/Music/Music';

import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route exact path='/' component={Profile} />
          <Route exact path='/profile' component={Profile} />
          <Route exact path='/messages' component={Dialogs} />
          <Route exact path='/news' component={News} />
          <Route exact path='/music' component={Music} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
