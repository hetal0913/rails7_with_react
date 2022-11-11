import * as React from "react";
import * as ReactDOM from "react-dom";
import { useState } from "react";

const QuestionDetail = (props) => {
    let question = props.question;
    const [likeCount, setLikeCount] = useState(0);
    const handleClick = () => {
        console.log("click");
        setLikeCount(likeCount + 1)
    }
    return ( 
        <div className="card rounded-0 mt-3">
        <div className="card-body">
          <h3 className="card-title">{question.title}</h3>
          <p className="lead">
            <span className="badge bg-primary">{question.tag}</span>{" "}
          </p>
          <div className="d-flex bd-highlight justify-content-end">
            <button className="btn btn-sm btn-primary m-1" onClick={() => setLikeCount(likeCount + 1)}>Like</button>
            <button className="btn btn-sm btn-secondary m-1 " onClick={() => setLikeCount(likeCount - 1)}>Dislike</button>

            {likeCount > 0 ? <span className="badge bg-success rounded-pill">{likeCount}</span> : ''}
          </div>

          
        </div>
      </div>
     );
}
 
export default QuestionDetail;