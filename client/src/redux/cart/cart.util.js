export const addItemToCart = (items, addItem) => {
    const exists = items.find(item => item.id === addItem.id);
    if (exists) {
        return items.map(item => (item.id === addItem.id ? { ...item, quantity: item.quantity + 1 } : item));
    }

    return [...items, { ...addItem, quantity: 1 }];
};
export const removeItemFromCart = (items, removeItem) => {
    const item = items.find(item => item.id === removeItem.id);

    if (item.quantity === 1) return clearItemFromCart(items, removeItem);

    return items.map(item => (item.id === removeItem.id ? { ...item, quantity: item.quantity - 1 } : item));
};

export const clearItemFromCart = (items, clearItem) => {
    const index = items.findIndex(item => item.id === clearItem.id);
    items.splice(index, 1);
    return [...items];
};
