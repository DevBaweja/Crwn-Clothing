import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import { toggleCartHidden } from '../../redux/cart/cart.actions';

import { selectCartItems } from '../../redux/cart/cart.selector';

import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems, history, dispatch }) => {
    const clickHandler = () => {
        history.push('/checkout');
        dispatch(toggleCartHidden());
    };

    const renderCartItem = () => {
        return cartItems.map(item => <CartItem key={item.id} item={item} />);
    };
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {cartItems.length ? renderCartItem() : <span className="empty-message">Your cart is empty.</span>}
            </div>
            <CustomButton onClick={clickHandler}>Go to checkout</CustomButton>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
