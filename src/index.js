import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";   //for fake data;
import CommentDetails from "./CommentDetails.js";
import ApprovalCard from "./ApprovalCard.js"

console.log(faker.image.avatar())

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>Warning!</h4>
                    Are you sure?
                </div>
            </ApprovalCard>
            
            <ApprovalCard>
                <CommentDetails 
                    author="Naruto" 
                    time="Today 3:00AM" 
                    comment="I am gonna be a Hokage one day!" 
                    pp={faker.image.avatar()}
                />   {/* This is a component so no need to add this in curly brackets. */}
            
            </ApprovalCard>
            
            <ApprovalCard>
                <CommentDetails 
                    author="Sasuke"
                    time="Today 5:00PM" 
                    comment="I am an Avenger!" 
                    pp={faker.image.avatar()}
                />
            </ApprovalCard>
            
            <ApprovalCard>
                <CommentDetails 
                    author="Gaara" 
                    time="Today 2:00AM" 
                    comment="You are my friend!" 
                    pp={faker.image.avatar()}
                />
            </ApprovalCard>
            
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector("#root"));