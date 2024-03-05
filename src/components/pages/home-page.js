import React from "react";
import BookList from "../book-list";
import BookStores from "../book-stores/book-stores";
const HomePage = () => {
    return <div>
        <BookStores/>
        <BookList />
        </div>
};

export default HomePage;