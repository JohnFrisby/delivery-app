import React from 'react';
import './header.css';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

const Header = ({ numItems, total }) => {
    return (
        <header className="header row">
            <Link to="/">
                <div className="logo text-dark">Delivery-App</div>
            </Link>

            <Link to="cart">
                <div className="shopping-cart">
                    <i className="cart-icon fa-shoping-cart" />
                    {numItems} item (${total})
                </div>
            </Link>
        </header>
    )
}

const mapStateToProps = state => {
    return {
        total: state.orderTotal.total
    }
}

export default connect(mapStateToProps, null)(Header);