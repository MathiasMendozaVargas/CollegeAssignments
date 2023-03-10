import React, { Component } from 'react'

const studentList = [
  'Randall Malfoy',
  'Kvothe Black',
  'Chun Zorander',
  'Leomund Ridcully',
  'Rary Stibbons',
  'Gandalf Dresden',
  'Zeddicus Doom',
]

export default class ChallengeTwo extends Component {
  //declare the states
  state = {
    arr: []
  }

  //componentDidMount will execute when the page has loaded (this will only run once)
  componentDidMount() {
    //display the student list after 3 seconds
    setTimeout(() => {
      this.setState({ arr: studentList });
    }, 3000);
  }

  //random button handler
  randomize = (studentList) => {
    //shuffle the array and set the state
    const randomize = (studentList) => {
      const shuffledList = [...studentList];
      for (let i = shuffledList.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledList[i], shuffledList[j]] = [shuffledList[j], shuffledList[i]];
      }
      setState({ arr: shuffledList });
    };
  }

  render() {
    return (
      <>
        <h2>Challenge 2</h2>
        <div className='msg'>
          <ul>
            {this.state.arr.map((el, i) => (
              <li key={i}>{el}</li>
            ))}
          </ul>
        </div>
        <button className='btn large' onClick={() => this.randomize(studentList)}>Randomize</button>
      </>
    )
  }
}
