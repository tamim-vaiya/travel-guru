import { Link } from '@material-ui/core';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import * as firebase from "firebase/app";
import "firebase/auth";
import AnotherHeader from '../AnotherHeader/AnotherHeader';
import './Login.css';
import google from '../../images/Icon/google.png';
import fb from '../../images/Icon/fb.png';
import firebaseConfig from './firebase.config';

firebase.initializeApp(firebaseConfig);

const Login = () => {
    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: ''
    })

    // sign in with fb functionality
    const fbSignIn= () => {
        const fbProvider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(fbProvider)
    .then(res => {
        const { displayName, email } = res.user;
        const signInUser = {
            isSignedIn: true,
            name: displayName,
            email: email
        }
        setUser(signInUser);
    })
    .catch((error => {
        console.log(error.message);
      }))
    }

    // sign out with fb functionality
    const fbSignOut = () => {
        firebase.auth().signOut()
        .then(res => {
            const signedOutUser = {
                isSignedIn : false,
                name: '',
                email: '',
                error: '',
                success: false
            }
            setUser(signedOutUser);
        })
        .catch(error => {

        })
    }


    // sign in with google functionality
    const googleSignIn = () => {
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(googleProvider)
            .then(res => {
                const { displayName, email } = res.user;
                const signInUser = {
                    isSignedIn: true,
                    name: displayName,
                    email: email
                }
                setUser(signInUser);
            })
            .catch(error => {
                console.log(error.message);
            });
    }


    // sign out with google functionality
    const googleSignOut = () => {
        firebase.auth().signOut()
        .then(res => {
            const signedOutUser = {
                isSignedIn : false,
                name: '',
                email: '',
                error: '',
                success: false
            }
            setUser(signedOutUser);
        })
        .catch(error => {

        })
    }
    // email functionality
    const handleBlur = (e) => {
        let isFieldValid = true;
        if (e.target.name === 'email'){
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if (e.target.name === 'password'){
            const isPasswordValid = e.target.value.length > 8;
            const passwordHasNumber = /\d{1}/.test(e.target.value);
            isFieldValid = isPasswordValid && passwordHasNumber;
        }
        if(isFieldValid){
            const newUserInfo = {...user};
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
    }

    // submit with email functionality
    const handleSubmit = (e) => {
        if(user.password && user.email){
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then(res => {
                const newUserInfo = {...user};
                newUserInfo.error = '';
                newUserInfo.success = true;
                setUser(newUserInfo);
            })
            .catch(function(error) {
                const newUserInfo = {...user};
                newUserInfo.error = error.message;
                newUserInfo.success = false;
                setUser(newUserInfo);
                updateUserName(user.name);
              });
        }
        e.preventDefault();
    }

    const updateUserName = name => {
        const user = firebase.auth().currentUser;

        user.updateProfile({
        displayName: name,
        }).then(function() {
        
        }).catch(function(error) {
        
        });
    }

    return (
        <div className="whiteBg">
            <div >
                <AnotherHeader></AnotherHeader>
            </div>

            <div className="login-field">
                <div className="d-flex align-items-center justify-content-center ">
                    {/* working with Personal Email */}
            <Form className='form' onSubmit={handleSubmit}>
                {newUser ?
                <h4>Create an Account</h4>
                :
                <h4>Login</h4>
                }
                {newUser && <Form.Group >
                    <Form.Control name='firstName' onBlur= {handleBlur} className='inputField' type="text" placeholder="First Name" required/>
                    </Form.Group>}
                {newUser && <Form.Group >
                <Form.Control name='lastName' onBlur= {handleBlur} className='inputField' type="text" placeholder="Last Name" required/>
                </Form.Group>}
                <Form.Group >
                    <Form.Control name='email' onBlur= {handleBlur} className='inputField' type="email" placeholder="Email" required/>
                </Form.Group>

                <Form.Group >
                    <Form.Control name='password' onBlur= {handleBlur} className='inputField' type="password" placeholder="Password" required/>
                </Form.Group>

                {
                    newUser ?
                    '' 
                    :
                    <Form.Group className='extraDeeds d-flex justify-content-between'>
                        <Form.Check type="checkbox" label="Remember Me " />
                        <Link className='forgotPassword'>Forgot Password</Link>
                    </Form.Group>
                }
                {
                    user.success ?
                    <p style={{color: 'green'}}>User Created Successfully</p>
                    :
                    <p style={{color: 'red'}}>{user.error}</p>
                }

                <div className='d-flex justify-content-center login_btn'>
                    {
                        newUser ?
                        <input className='logOrCreateBtn' variant="primary" type="submit" value='Create an Account' />
                        :
                        <input className='logOrCreateBtn' variant="primary" type="submit" value='Log In' />
                    }
                </div> 
               <div className='checkingNewOrOld'>
                   {newUser ? 
                       <p style={{color:"black"}}>You already have an account? <span className='spanText' onClick={() =>setNewUser(!newUser)}> Log in </span> </p> 
                       :
                       <p>Don’t have an account? <span className='spanText' onClick={() => setNewUser(!newUser)}> Create an account</span> </p>
                   }
                </div>
            </Form>
                </div>


            <h3  className="d-flex align-items-center justify-content-center ">---------- Or ----------</h3>
     

            {/* Working with google and facebook button  */}

            <div className='signUpWithFbOrGoogle   align-items-center justify-content-center'>
                {/* fb btn functionality */}
                {
                    user.isSignedIn ?
                        <button className='fancyBtn' onClick={fbSignOut}>
                             Log Out
                        </button>
                        :
                        <button className='fancyBtn' onClick={fbSignIn}>
                            <img src={fb} style={{ width: '30px', float: 'left', marginLeft: '20px' }} alt="" /> Continue with Facebook
                        </button>
                }
                <br/>
                {/* google btn functionality */}
                {
                    user.isSignedIn ?
                        ''
                        :
                        <button className='fancyBtn' onClick={googleSignIn}>
                            <img src={google} style={{ width: '30px', float: 'left', marginLeft: '20px' }} alt="" /> Continue with Google
                        </button>
                }

            </div>
            </div>
        </div>
    );
};

export default Login;


