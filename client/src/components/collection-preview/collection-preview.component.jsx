import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import CollectionItem from '../collection-item/collection-item.component';

import { selectCartItems } from '../../redux/cart/cart.selector';

import './collection-preview.styles.scss';
const CollectionPreview = ({ title, items, cartItems, history, match }) => {
    const renderCollectionItem = () => {
        const limit = 4;
        return items.slice(0, limit).map(item => {
            const already = cartItems.find(cur => cur.id === item.id);
            return <CollectionItem key={item.id} item={item} alreadyAdded={already ? 'alreadyAdded' : ''} />;
        });
    };
    return (
        <div className="collection-preview">
            <h1
                className="collection-preview__title"
                onClick={() => history.push(`${match.path}/${title.toLowerCase()}`)}
            >
                {title}
            </h1>
            <div className="preview">{renderCollectionItem()}</div>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CollectionPreview));
