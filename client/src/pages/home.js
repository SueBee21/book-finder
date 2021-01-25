import React, { useState } from "react";
import Search from "../components/search";
import Results from "../components/results/index";
import Api from "../utils/api";

function Home() {
  // set starting state
  const [books, setBooks] = useState([]);
  const [keyword, setKeyword] = useState("");
  const handleInputChange = (event) => {
    const { value } = event.target;
    setKeyword(value);
    console.log(value);
  };

  const handleSubmit = () => {
    Api.getGoogleBooks(keyword).then((res) => {
      setBooks(res.data.items);
    });
  };

  const handleSave = (book) => {
    const newBook = {
      title: book.volumeInfo.title,
      authors: book.volumeInfo.authors,
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks.smallThumbnail,
      link: book.volumeInfo.infoLink,
    };
    Api.saveBooks(newBook).then((res) => {
      console.log(res);
    });
  };

  return (
    <div>
      {console.log(books)}
      <Search
        handleSubmit={handleSubmit}
        keyword={keyword}
        handleInputChange={handleInputChange}
      />
      <Results books={books} name="title" placeholder="Title" />
    </div>
  );
}

export default Home;
