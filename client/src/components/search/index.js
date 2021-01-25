import React from "react";
function Search(props) {
  return (
    <div className="card">
      <div className="card-body">
        <div className="input-group mb-3">
          <input
            type="text"
            name="keyword"
            value={props.keyword}
            onChange={props.handleInputChange}
            className="form-control"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="button-addon2"
          />
          <button
            className="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
            onClick={props.handleSubmit}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
export default Search;
