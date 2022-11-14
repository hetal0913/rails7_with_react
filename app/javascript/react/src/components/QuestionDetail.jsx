import * as React from "react";
import * as ReactDOM from "react-dom";
import { useState } from "react";

const QuestionDetail = (props) => {
  let question = props.question;
  console.log(question);
  const [likeCount, setLikeCount] = useState(question.like_count);
  const [disLikeCount, setDisLikeCount] = useState(question.dislike_count);

  const handleClick = (value) => {
    fetch(`http://localhost:3000/api/v1/questions/${question.id}/update_counter`, {
      method: 'PUT',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({"count_for": value})
    }).then(() => {
      if (value == "like"){
        setLikeCount(prev => prev + 1)
      }else if (value == "dislike"){
        setDisLikeCount(prev => prev + 1)
      }
    }).catch(err => {
      console.log("error" + err);
    })
  }
 
  return (
    <div className="card rounded-0 mt-3">
      <div className="card-body">
        <h3 className="card-title">{question.title}</h3>
        <p className="lead">
          <span className="badge bg-primary">{question.tag}</span>
        </p>
        <button type="button" className="btn btn-primary position-relative" style={{marginRight: '1em'}} onClick={() => handleClick("like")}>
          Like
          {likeCount > 0 ? <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {likeCount}
          </span> : ''}
          
        </button>
        <button type="button" className="btn btn-secondary position-relative" onClick={() => handleClick("dislike")}>
          Dislike
          {disLikeCount > 0 ? <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {disLikeCount}
          </span> : ''}
          
        </button>
      </div>
    </div>
  );
};

export default QuestionDetail;
