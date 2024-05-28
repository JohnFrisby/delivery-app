import React from "react";
import './book-stores-item.css';

const BookStoreItem = ({ store, onItemSelected }) => {
    const { name } = store;
    return (
        <div className="book-store-item">
            <div className="book-store-name">{name}</div>

        </div>
    );
};

export default BookStoreItem;