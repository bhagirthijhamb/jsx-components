// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

// function getButtonText(){
//   return 'Click on me!';
// }

// Create a react component
const App = () => {
  // const buttonText = 'Click Me!'
  // const btnText = 1234;
  // const btnText = ['Hi', 'there'];
  // const btnText = [10, 20];
  // const btnText = {text: 'Click me'};
  // const style = { backgroundColor:  'blue', color: 'white' };
  return (
    // <div>
      // {/* <label className="label" htmlFor="name">Enter name:</label>
      // <input if="name" type="text" /> */}
      // {/* <button style={{ backgroundColor:  'blue', color: 'white'}}>Submit</button> */}
      // {/* <button style={{ backgroundColor:  'blue', color: 'white'}}>{buttonText}</button> */}
      // {/* <button style={{ backgroundColor:  'blue', color: 'white'}}>{getButtonText()}</button> */}
      // {/* <button style={{ backgroundColor:  'blue', color: 'white'}}>{btnText}</button> */}
      // {/* <button style={style}>{btnText.text}</button> */}
    // </div>  
    <div className="ui container comments">
      <div className="comment">
        <a href="/" className="avatar">
          {/* <img alt="avatar" src={faker.image.avatar()} /> */}
          <img alt="avatar" src={faker.image.cats()} />
        </a>
        <div className="content"> 
          <a href="/" className="author">
            Sam
          </a>
          <div className="metadata">
            <span className="date">Today st 6:00PM</span>
          </div>
          <div className="text">Nice blog post!</div>
        </div>
      </div>
    </div>
  )
}

// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector('#root'))