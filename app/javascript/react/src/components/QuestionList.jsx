import * as React from "react";
import * as ReactDOM from "react-dom";
import QuestionDetail from "./QuestionDetail";
import useFetch from "../useFetch";

const QuestionList = () => {
  const {data: questionsList, isPending, error} = useFetch("http://localhost:3000/api/v1/questions");
  return (
    <div className="row">
      <div className="col-lg-10 mx-auto">
        { error && <div> {error }</div>}
        {isPending && <div className="center">Loading...</div>}
        {questionsList && questionsList.length > 0 ? (
          questionsList.map((question) => (
            <QuestionDetail question={question} key={question.id} />
          ))
        ) : (
          <p className="center">There is no data available</p>
        )}
      </div>
    </div>
  );
};

export default QuestionList;
