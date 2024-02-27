import React from "react";
import './book-stores.css';
import BookList from "../book-list/book-list";

const BookStores = (props) => {
const {books, onItemSelected} = props;
    return (
        <ul className="book-store">
            {
                books.map((book) => {
                    return (
                        <li key={book.id}>
                            <BookList
                            book={book}
                            onItemSelected={() => onItemSelected(book.id)} />
                        </li>
                    )
                })

            }

        </ul>
    );
};

export default (BookStores);