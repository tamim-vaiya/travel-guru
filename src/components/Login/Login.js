import { Link } from '@material-ui/core';
import React from 'react';
import { Form } from 'react-bootstrap';
import AnotherHeader from '../AnotherHeader/AnotherHeader';
import './Login.css';
import google from '../../images/Icon/google.png';
import fb from '../../images/Icon/fb.png';

const Login = () => {
  return (
    <div className="loginBg">
            <div >
                <AnotherHeader></AnotherHeader>
            </div>
            <div className="banner_wrapper form_wrapper">
                <div className='container'>
                    <div className="row d-flex align-items-center">
                        <div className="col-md-6 offset-3">
            <Form className='log_form' onSubmit='{handleSubmit}'>
                <h4>Login</h4>
                {'user' && <Form.Group >
                    <Form.Control name='name' onBlur= '{handleChange}' className='form_border' type="text" placeholder="Enter Your Name" />
                    </Form.Group>}
                <Form.Group >
                    <Form.Control name='emails' onBlur= '{handleChange}' className='form_border' type="email" placeholder="Enter Your Email" />
                </Form.Group>

                <Form.Group >
                    <Form.Control name='password' onBlur= '{handleChange}' className='form_border' type="password" placeholder="Enter Your Password" />
                </Form.Group>

                <Form.Group className='forgot d-flex justify-content-between'>
                    <Form.Check type="checkbox" label="Remember Me " />
                    <Link className='password'>Forgot Password</Link>
                </Form.Group>

                <div className='d-flex justify-content-center login_btn'>
                    <input className='submit_btn' variant="primary" type="submit" value='Log In' />
                </div> 
               {/* <div className='text-center text-light span_link'>
                   {user ? 
                       <span>You alrady have an account? <button className='btn btn-outline-warning' onClick={() =>setUser(!user)}> Log in </button> </span> : <span>Don’t have an account? <button className='btn btn-outline-warning' onClick={() => setUser(!user)}> Create an account</button> </span>
                   }
               </div> */}
            </Form>

            <div className="form_bottom">
                <div className='d-flex justify-content-center'>
                    <span></span> <h6>OR</h6>
                    <span></span>
                </div>
                {/* fb login btn */}
                <div className='fbToGoogle'>
                    <button className='fb-btn' onClick="{fbLogIn}">
                        <img src={fb} style={{width:'30px', float:'left',marginLeft:'20px'}} alt=""/> Continue with Facebook
                        </button>
                {/* //google signin button */}
                    <button className='fb-btn' onClick="{googleLogIn}">
                        <img src={google}style={{width:'30px', float:'left',marginLeft:'20px'}} alt=""/> Continue with Google
                    </button>
                </div>
            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
  );
};

export default Login;