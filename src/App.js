import React, { useEffect } from 'react';
import Quora from './components/Quora';
import './App.css';
import {login,logout, selectUser} from "./features/userSlice";
import {useSelector, useDispatch} from 'react-redux';
import Login from './components/auth/Login';
import { auth } from './firebase';
import {  onAuthStateChanged } from "firebase/auth";

function App() {

  const user = useSelector(selectUser)
  const dispatch = useDispatch();

  useEffect( ()=>{
    onAuthStateChanged( auth, (authUser)=>{
        if(authUser)
        {
          dispatch(
              login({
              uid: authUser.uid,
              photo: authUser.photoURL,
              displayName:authUser.displayName,
              email:authUser.email
          }));
          console.log(authUser);
        }
        else
        {
          dispatch(logout());
        }
    });

  }, [dispatch]);



  return (
    // initally The user is Null so will ask for Login
    <div className="App">
     
      {
          user ? (<Quora />) : (<Login />)
      }
     
    </div>
  );
}

export default App;
