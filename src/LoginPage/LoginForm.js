/**
 * @version 1.0.0
 * this class contains the different html fields for logging into the form
 */

import React, {Component} from 'react'
import SocialButton from './SocialButton'; 
import Button from './Button'; 
import InputField from './InputField';
import './styles/detailed-view.css'
class LoginForm extends React.Component {
  render() {
    return (
      <div className = "login-wrapper"> 

        <div className="login-form">
          {/* text fields for ID and password */}
          <InputField type="text" name="id" placeholder="ID" className="primary-input" />
          <InputField type="password" name="password" placeholder="Password" className="primary-input"/>
          {/* login button */}
          <Button label="LOGIN" className="login-button" />
          <Button label="Create account" className="create-account-link" />
          <div className="social-buttons">
            {/* adds the social media buttons */}
            <SocialButton type="" icon="../images/facebook-icon.jpg"/>
            <SocialButton type="" icon="\images\facebook-icon.jpg" />
            <SocialButton type="" icon="\images\facebook-icon.jpg" />
          </div>

        </div>
      </div>
    );
  }
}

export default LoginForm; 
