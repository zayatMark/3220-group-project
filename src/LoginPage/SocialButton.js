/**
 * @version 1.0.0
 * this class contains buttons with social media icons (purpose is to direct user to a social media page)
 */


import React, {Component} from 'react'
import Button from './Button';
import './styles/detailed-view.css'
class SocialButton extends React.Component {
    render() {
      return (
        <Button className={`social-button social-button-${this.props.type}`} label={''} />
        // <Button className={`social-button social-button-${this.props.type}`} label={<img src={this.props.icon} alt={`${this.props.type} `} />} />
      );
    }
  }

export default SocialButton; 
