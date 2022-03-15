import React from 'react';
import Navbar from './components/Navbar'
import Feed from './components/Feed'
import Post from './components/Post'
import './App.css';


function App() {
  return (
    <div className="App">
     <Navbar />
     <Feed />
     <Post />
     <Post />
    </div>
  );
}

export default App;
