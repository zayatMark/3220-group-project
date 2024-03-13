// Button Component
import React, {Component} from 'react'
import './styles/detailed-view.css'

class Button extends React.Component {
    render() {
      return (
        <button className={this.props.className} onClick={this.props.onClick}>
          {this.props.label}
        </button>
      );
    }
  }

  export default Button; 

  