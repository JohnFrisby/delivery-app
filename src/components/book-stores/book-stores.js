import React from "react";
import './book-stores.css';
import BookList from "../book-list/book-list";

const BookStores = (props) => {
const {books, onItemSelected} = props;
    return (
        <ul className="book-store">
        books
        </ul>
    );
};

export default (BookStores);