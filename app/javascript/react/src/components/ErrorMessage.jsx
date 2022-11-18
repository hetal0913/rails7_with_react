import * as React from "react";
const ErrorMessage = (props) => {
  return (
    <div>
      <div className="mt-2 alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Oops</strong> {props.error}
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
    </div>
  );
};

export default ErrorMessage;
