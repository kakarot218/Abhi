import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";   //for fake data;
import CommentDetails from "./CommentDetails.js";

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetails author="Naruto" time="Today 3:00AM" comment="I am gonna be a Hokage one day!" pp={faker.image.avatar()}/>   {/* This is a component so no need to add this in curly brackets. */}
            <CommentDetails author="Sasuke"time="Today 5:00PM" comment="I am an Avenger!" pp={faker.image.avatar()}/>
            <CommentDetails author="Gaara" time="Today 2:00AM" comment="You are my friend!" pp={faker.image.avatar()}/>
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector("#root"));