import * as React from "react";
import * as ReactDOM from "react-dom";
import { useState } from "react";
import ServerSideError from "./ServerSideError";

const AddQuestion = () => {
  const questionTags = [
    { label: "Ruby", value: "Ruby" },
    { label: "Rails", value: "Rails" },
    { label: "React", value: "React" },
    { label: "Bootstrap", value: "Bootstrap" },
    { label: "Javascript", value: "Javascript" },
  ];
  const [formField, setFormField] = useState({
    title: "",
    tag: questionTags[0].value,
  });
  const [error, setError] = useState([]);

  const handleChange = (e) => {
    setFormField({ ...formField, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(":: form ::");
    fetch("http://localhost:3000/api/v1/questions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formField),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("New question added", data);
        if(data.status === "error"){
          setError(data["data"])
        } else {
          setError([])
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Add Your Question
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="modal-body">
                {error.length > 0 && <ServerSideError errors={error} />}
                <div className="form-group">
                  <label className="mt-1 mb-1">Title</label>
                  <input
                    type="text"
                    name="title"
                    className="form-control font-control-lg rounded-0"
                    value={formField.title}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className="form-group">
                  <label className="mt-3 mb-3">Select Question Tag</label>
                  <select
                    className="form-select form-select-lg mt-1 mb-3"
                    value={formField.tag}
                    name="tag"
                    onChange={(e) => handleChange(e)}
                  >
                    {questionTags.map((tag) => (
                      <option value={tag.value} key={tag.value}>
                        {tag.label}
                      </option>
                    ))}
                  </select>
                </div>

                {formField.title}
                {formField.tag}
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="submit" className="btn btn-primary">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddQuestion;
