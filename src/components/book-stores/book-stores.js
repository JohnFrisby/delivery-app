import React from "react";
import './book-stores.css';
import BookStoreItem from "../book-stores-item/book-stores-item";

const BookStores = (props) => {
const {stores, onItemSelected} = props;
    return (
        <ul className="book-store">
        {
                stores.map((store) => {
                    return (
                        <li key={store.id}>
                            <BookStoreItem
                                store={store}
                                onItemSelected={() => onItemSelected(store.id)} />
                        </li>
                    );
                })
            }
        </ul>
    );
};

export default (BookStores);