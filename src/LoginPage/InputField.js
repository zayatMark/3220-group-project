/**
 * @version 1.0.0
 * this class contains input field components for the login page
 */

import React, {Component} from 'react'
import './styles/detailed-view.css'
class InputField extends React.Component {
    render() {
      return (
        <div className="input-wrapper">
          <input
            type={this.props.type}
            name={this.props.name}
            placeholder={this.props.placeholder}
            className="input-field"
          />
        </div>
      );
    }
  }

  export default InputField; 