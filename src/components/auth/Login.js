import React,  { useState, useEffect} from 'react'
import "./Login.css";
import nexumLogo from "../../assets/nexumLogo.jpg";
import {auth, provider} from "../../firebase";
import { ConstructionOutlined } from '@mui/icons-material';
import {useSelector} from "react-redux";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  sendPasswordResetEmail

} from "firebase/auth";




function Login() {

  //  Creating the Custom Hook

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = ()=>{
    signInWithPopup(auth, provider).catch( (e)=>alert(e.message));

    console.log(auth);
  }

  const forgotPassword = (e)=>{
      e.preventDefault();

      sendPasswordResetEmail(auth, email)
      .then(() => {
            alert("Please Update Your Password from Your Main Inbox & Insert again to Login!")
      })
      .catch((error) => {
        alert(error.message);
      });
    
  }

  const handleLogin = (e)=>{
      e.preventDefault();

      signInWithEmailAndPassword(auth, email,password).
      then( (auth) =>{
          console.log(auth);
      }).catch( (e)=> alert(e.message));

      setEmail("");
      setPassword("");
      
  }

  const handleRegister = (e)=>{
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email,password).
    then( (auth) =>{

      if(auth){
        console.log(auth);
      }

    }).catch( (e)=> alert(e.message));

    setEmail("");
    setPassword("");
    
  }


  return (
    <div className="login">
      <div className="login__container">

        <div className="login__logo">
          <img
            src={ nexumLogo}
            alt=""
          />
        </div>

        <div className="login__desc">
          <p>A Place To Share Knowledge & Better Understand The World</p>
          <p style={{ color: "royalblue",  fontSize: "25px" }}>
            Designed with ❤️ by{" "}
          </p>
          <h3>Team NeXum</h3>
        </div>

        <div className="login__auth"> 

          <div className="login__authOptions">
            <div className="login__authOption">
              <img
                className="login__googleAuth"
                src="https://media-public.canva.com/MADnBiAubGA/3/screen.svg"
                alt=""
              />
              <span onClick={signIn}> Continue With Google</span>
            </div>

           

            <div className="login__authDesc">
              <p>
                <span style={{ color: "blue", cursor: "pointer" }}>
                  Sign Up With Email
                </span>
                . By continuing you indicate that you have read and agree to
                NeXum's
                <span style={{ color: "blue", cursor: "pointer" }}>
                  <br/>Terms of Service{" "}
                </span>
                and{" "}
                <span style={{ color: "blue", cursor: "pointer" }}>
                  Privacy Policy.
                </span>
              </p>
            </div>

          </div>

          <div className="login__emailPass">
            <div className="login__label">
              <h4>Login</h4>
            </div>
            <div className="login__inputFields">
              <div className="login__inputField">
                <input
                  value= {email}
                  onChange = { (e)=> setEmail(e.target.value)}
                  type="text"
                  placeholder="Email"
                />
              </div>
              <div className="login__inputField">
                <input
                  value={ password}
                  onChange = { (e)=> setPassword(e.target.value)}
                  type="password"
                  placeholder="Password"
                />
              </div>
            </div>
            <div className="login__forgButt">
              <small onClick={ forgotPassword }>Forgot Password?</small>
              <button type="submit" onClick = { handleLogin }>Login</button>
            </div>
            <button type="submit" onClick = { handleRegister }>Register</button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Login;
