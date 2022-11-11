import * as React from "react";
import * as ReactDOM from "react-dom";
import QuestionList from "./QuestionList";

const Hello = () => {
  return (
    <div className="container">
      <QuestionList/>
    </div>
  );
};

// Use it if you don't plan to use "remount"
// document.addEventListener('DOMContentLoaded', () => {
// ReactDOM.render(<Hello />, document.getElementById('hello'))
// })

export default Hello;
