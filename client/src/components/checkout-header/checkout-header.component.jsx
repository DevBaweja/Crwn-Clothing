import React from 'react';
import CheckoutHeaderItem from '../checkout-header-item/checkout-header-item.component';
import './checkout-header.styles.scss';

const CheckoutHeader = ({ checkout }) => {
    const renderCheckoutHeaderItem = () => {
        return checkout.map(el => <CheckoutHeaderItem key={el}>{el}</CheckoutHeaderItem>);
    };
    return <div className="checkout-header">{renderCheckoutHeaderItem()}</div>;
};

export default CheckoutHeader;
