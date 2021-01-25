import React from "react";
function Results(props) {
  return (
    <div>
      {props.books.length > 0
        ? props.books.map((book) => {
            return (
              <div className="card">
                <div className="card-header">Results</div>
                <div className="card-body">
                  <h5 className="card-title" name="title">
                    {book.volumeInfo.title}
                  </h5>
                  <img src={book.volumeInfo.imageLinks.smallThumbnail} />
                  <p className="card-text" name="synopsis">
                    {book.volumeInfo.description}
                  </p>
                  <a
                    href={book.volumeInfo.infoLink}
                    target="blank"
                    className="btn btn-primary"
                  >
                    More Information
                  </a>
                  <button className="btn btn-primary">Save</button>
                </div>
              </div>
            );
          })
        : "no result found"}
    </div>
  );
}
export default Results;
