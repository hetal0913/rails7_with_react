import * as React from "react";
import * as ReactDOM from "react-dom";
import QuestionDetail from "./QuestionDetail";

const QuestionList = () => {
  const questionsList = [
    {
        id:1,
      title: "What is difference between strings and symbol?",
      tag: "ruby",
    },
    {
        id: 2,
      title: "What is array?",
      tag: "ruby",
    },
    {
        id: 3,
      title: "What is hash?",
      tag: "ruby",
    },
    {
        id:4,
      title: "What is hash keys?",
      tag: "ruby",
    },
    {
        id: 5,
      title: "What is difference between array and hash?",
      tag: "ruby",
    },
  ];
  
  return (
    <div className="row">
      <div className="col-lg-10 mx-auto">
        {
            questionsList.map((question) => <QuestionDetail question={question} key={question.id} />)
        }
      </div>
    </div>
  );
};

export default QuestionList;
