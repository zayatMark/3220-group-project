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