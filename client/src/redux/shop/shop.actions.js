import ShopActionTypes from './shop.types';

export const fetchCollectionsStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = collectionsMap => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap,
});

export const fetchCollectionsFailure = err => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: err,
});

// Passing fn as action object is possible here due to thunk
/*
export const fetchCollections = () => {
    return async dispatch => {
        const collectionRef = firestore.collection('collection');
        dispatch(fetchCollectionsStart());

        try {
            const snapshot = await collectionRef.get();
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            dispatch(fetchCollectionsSuccess(collectionsMap));
        } catch (err) {
            dispatch(fetchCollectionsFailure(err));
        }
    };
};
*/
