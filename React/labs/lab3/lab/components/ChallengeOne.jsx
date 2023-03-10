import React, { Component } from 'react';
//import images

class ChallengeOne extends Component {
  //declare the state here
  state = {};

  //click left/right button handler goes here
  handleClickLeft = () => {
    this.setState({src: left})
  }

  handleClickRight = () => {
    this.setState({src: right})
  }


  render() {
    return (
      <>
        <h2>First Challenge</h2>
        <div className="msg">
          <img className="ch1" src={this.state.src} alt=""/>
        </div>
        <button className="btn" onClick={this.handleClickLeft}>⭠</button>
        <button className="btn" onClick={this.handleClickRight}>⭢</button>
      </>
    );
  }
}

export default ChallengeOne;