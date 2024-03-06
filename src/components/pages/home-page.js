import React from "react";
import BookList from "../book-list";
import BookStores from "../book-stores/book-stores";
import Row from "../row"
const HomePage = () => {
    return (
        <Row
          left={<BookStores />}
          right={<BookList />} />
      );
        
};

export default HomePage;