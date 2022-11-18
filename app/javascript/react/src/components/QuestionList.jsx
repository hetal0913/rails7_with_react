import * as React from "react";
import * as ReactDOM from "react-dom";
import { useState, useEffect } from "react";
import QuestionDetail from "./QuestionDetail";
import ErrorMessage from "./ErrorMessage";
import Loader from "./Loader";
import AddQuestion from "./AddQuestion";
// import useFetch from "../useFetch";

const QuestionList = () => {
  const questionTags = [
    { label: "All", value: 0 },
    { label: "Ruby", value: 1 },
    { label: "Rails", value: 2 },
    { label: "React", value: 3 },
    { label: "Bootstrap", value: 4 },
    { label: "Javascript", value: 5 },
  ];

  const [questionsList, setQuestionsList] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  const [selectedTag, setSelectedTag] = useState(questionTags[0].value);

  const fetchData = (url) => {
    const abortCont = new AbortController();
    fetch(url, { signal: abortCont.signal })
      .then((res) => {
        if (!res.ok) {
          throw Error("Data is not fetch");
        }
        return res.json();
      })
      .then((data) => {
        if (data.length > 0) {
          setError(null);
        } else {
          setError("There is no matching data available");
        }
        setQuestionsList(data);
        setIsPending(false);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("abort error");
        } else {
          setError(err.message);
          setIsPending(false);
        }
      });
  };

  useEffect(() => {
    fetchData("http://localhost:3000/api/v1/questions");
  }, []);

  const handleChange = (e) => {
    setSelectedTag(e.target.value);
    setIsPending(true);
    setQuestionsList([]);
    fetchData(
      "http://localhost:3000/api/v1/questions?tag=" +
        questionTags[e.target.value].label
    );
  };

  return (
    <div className="row">
      <div className="col-lg-10 mx-auto">
        <p className="lead fw-bold">Filter Questions By Tags</p>
        <button type="button" className="btn btn-primary mt-1 mb-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Contribute your Question
        </button>
        <select
          className="form-select form-select-lg"
          value={selectedTag}
          onChange={(e) => handleChange(e)}
        >
          {questionTags.map((tag) => (
            <option value={tag.value} key={tag.value}>
              {tag.label}
            </option>
          ))}
        </select>
        
        {error && <ErrorMessage error={error} />}
        {isPending && (
          <Loader/>
        )}
        {questionsList && questionsList.length > 0
          ? questionsList.map((question) => (
              <QuestionDetail question={question} key={question.id} />
            ))
          : ""}
      </div>
      <AddQuestion/>
    </div>
  );
};

export default QuestionList;
