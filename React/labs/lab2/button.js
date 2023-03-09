import React from 'react';

class Button extends React.Component {
  render() {
    const { iconClass, text } = this.props;
    return (
      <div className="button">
        <div className="icon">
          <i className={`fa ${iconClass}`}></i>
        </div>
        <span>{text}</span>
      </div>
    );
  }
}

export default Button;