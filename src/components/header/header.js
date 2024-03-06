import React from 'react';
import './header.css';
import { Link } from "react-router-dom";
import { connect } from "react-redux";


const Header = ( { count, total, book }) => {
    if (count === 1) {
        book = "book";
    }
    else {
        book = "books";
    }
    return (
        <header className="header row">
            <Link to="/">
                <div className="logo text-dark">Delivery-App</div>
            </Link>

            <Link to="cart">
                <div className="shopping-cart">
                    <i className="cart-icon fa-shoping-cart" />
                    {count} {book} (${total})
                </div>
            </Link>
        </header>
    )
}

const mapStateToProps = (state) => {
    return {
        count: state.shoppingCart.totalCount,
        total: state.shoppingCart.orderTotal
    };
};

export default connect(mapStateToProps)(Header);