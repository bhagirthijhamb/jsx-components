// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from  './CommentDetail';
import ApprovalCard from './ApprovalCard';
import Segment from './Segment';

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
    <div>
      <div>
        {/* <label className="label" htmlFor="name">Enter name:</label>
        // <input if="name" type="text" /> */}
        {/* <button style={{ backgroundColor:  'blue', color: 'white'}}>Submit</button> */}
        {/* <button style={{ backgroundColor:  'blue', color: 'white'}}>{buttonText}</button> */}
        {/* <button style={{ backgroundColor:  'blue', color: 'white'}}>{getButtonText()}</button> */}
        {/* <button style={{ backgroundColor:  'blue', color: 'white'}}>{btnText}</button> */}
        {/* <button style={style}>{btnText.text}</button> */}
      </div>  

      <div className="ui container comments">
        <ApprovalCard>Are you sure you want to do this ?</ApprovalCard>
        <ApprovalCard>
          <div>
            <h4>Warning!</h4>
            Are you sure you want to do this ?
          </div>
        </ApprovalCard>
        <ApprovalCard>
          <CommentDetail author="Sam" timeAgo="Today at 4:45PM" comment="Nice blog post" avatar={faker.image.image()} />
        </ApprovalCard>
        <ApprovalCard>
          <CommentDetail author="Alex" timeAgo="Today at 2:00AM" comment="I like the subject" avatar={faker.image.image()} />
        </ApprovalCard>
        <ApprovalCard>
          <CommentDetail author="Jane" timeAgo="Yesterday at 5:00PM" comment="I like the writing" avatar={faker.image.image()} />
        </ApprovalCard>
      </div>
      
      <div className="ui container">
        <Segment>
          <div className="ui icon header">
            <i className="pdf file outline icon"></i>
            No documents are listed for this customer.
          </div>
        </Segment>
        <Segment>
          <h4 className="ui header">For your information</h4>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam possimus et iusto sequi ducimus molestiae nesciunt, sit atque adipisci id nostrum accusantium, ullam facere, totam quis rem! Cum, minus necessitatibus.</p>
        </Segment>
      </div>
    </div>
  )
}

// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector('#root'))