// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from  './CommentDetail';

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
      <CommentDetail author="Sam" timeAgo="Today at 4:45PM" comment="Nice blog post" avatar={faker.image.image()} />
      <CommentDetail author="Alex" timeAgo="Today at 2:00AM" comment="I like the subject" avatar={faker.image.image()} />
      <CommentDetail author="Jane" timeAgo="Yesterday at 5:00PM" comment="I like the writing" avatar={faker.image.image()} />
    </div>
  )
}

// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector('#root'))