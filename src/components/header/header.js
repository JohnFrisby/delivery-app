import React from 'react';
import './header.css';
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Header = ( { items, total }) => {
    return (
        <header className="header row">
            <Link to="/">
                <div className="logo text-dark">Delivery-App</div>
                {items} item (${total})
            </Link>

            <Link to="cart">
                <div className="shopping-cart">
                    <i className="cart-icon fa-shoping-cart" />
                </div>
            </Link>
        </header>
    )
}

const mapStateToProps = (state) => {
    return {
        items: state.shoppingCart.cartItems,
        total: state.shoppingCart.orderTotal
    };
};

export default connect(mapStateToProps)(Header);