import React from 'react';
import './App.css';

import Header from './component/Header/Header';
import Navbar from './component/Navbar/Navbar';
import Profile from './component/Profile/Profile';
import Dialogs from './component/Dialogs/Dialogs';
import News from './component/News/News';
import Music from './component/Music/Music';

import { BrowserRouter, Route } from 'react-router-dom';

function App(props) {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route exact path={['/', '/profile']} render={() => <Profile name="Alexey Navalny" description="This is my status." postsData={props.postsData} />} />
          <Route path='/messages' render={() => <Dialogs messagesDialogData={props.messagesDialogData} dialogData={props.dialogData} />} />
          <Route exact path='/news' render={() => <News />} />
          <Route exact path='/music' render={() => <Music />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
