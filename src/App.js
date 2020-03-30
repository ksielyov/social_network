import React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './component/Header'
import Navbar from './component/Navbar'
import Profile from './component/Profile'

function App()
{
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <Profile />
    </div>
  );
}

export default App;
