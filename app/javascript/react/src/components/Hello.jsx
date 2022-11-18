import * as React from "react";
import * as ReactDOM from "react-dom";
import QuestionList from "./QuestionList";

const Hello = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-10 mx-auto">
          <h1 className="text-center">Hetsha Academy</h1>
          <p className="text-center">Here you can find the list of questions to prepare for the interview.</p>

        </div>
      </div>
      

      <QuestionList/>
    </div>
  );
};

// Use it if you don't plan to use "remount"
// document.addEventListener('DOMContentLoaded', () => {
// ReactDOM.render(<Hello />, document.getElementById('hello'))
// })

export default Hello;
