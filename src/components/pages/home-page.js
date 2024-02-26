import React from "react";
import BookList from "../book-list";
import BookStores from "../book-stores/book-stores";
import ShoppingCartTable from "../shopping-cart-table";
const HomePage = () => {
    return <div>
        <BookStores/>
        <BookList />
        <ShoppingCartTable /></div>
};

export default HomePage;