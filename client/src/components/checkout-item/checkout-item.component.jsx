import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { addItem, removeItem, clearItem } from '../../redux/cart/cart.actions';
import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem, addItem, removeItem, clearItem }) => {
    const { name, price, quantity, imageUrl } = cartItem;
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="item" />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={() => removeItem(cartItem)}>
                    &#10094;
                </div>
                <div className="value">{quantity}</div>
                <div className="arrow" onClick={() => addItem(cartItem)}>
                    &#10095;
                </div>
            </span>
            <span className="price">${price}</span>
            <span className="total">${price * quantity}</span>

            <div className="clear-button" onClick={() => clearItem(cartItem)}>
                &#10005;
            </div>
        </div>
    );
};
const mapDispatchToProps = dispatch => bindActionCreators({ clearItem, addItem, removeItem }, dispatch);

export default connect(null, mapDispatchToProps)(CheckoutItem);
