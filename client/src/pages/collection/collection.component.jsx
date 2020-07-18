import React from 'react';
import { connect } from 'react-redux';
import { selectShopCollection } from '../../redux/shop/shop.selector';
import { selectCartItems } from '../../redux/cart/cart.selector';

import CollectionItem from '../../components/collection-item/collection-item.component';

import './collection.styles.scss';

const CollectionPage = ({ collection, cartItems }) => {
    console.log(collection);

    const { title, items } = collection;

    const renderCollectionItem = () => {
        return items.map(item => {
            const already = cartItems.find(cur => cur.id === item.id);
            return <CollectionItem key={item.id} item={item} alreadyAdded={already ? 'alreadyAdded' : ''} />;
        });
    };
    return (
        <div className="collection-page">
            <h2 className="title">{title}</h2>
            <div className="items">{renderCollectionItem()}</div>
        </div>
    );
};

const mapStateToProps = (state, ownProps) => ({
    collection: selectShopCollection(ownProps.match.params.collectionType)(state),
    cartItems: selectCartItems(state),
});
export default connect(mapStateToProps)(CollectionPage);
