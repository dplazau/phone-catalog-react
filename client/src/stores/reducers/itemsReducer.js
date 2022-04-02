import { ACTION_TYPES } from "../constants";

const itemsReducer = (items = [], action) => {
    switch (action.type) {
        case ACTION_TYPES.DELETE:
            return items.filter((item) => item._id !== action.payload);
        case ACTION_TYPES.FETCH_ALL:
            return action.payload;
        case ACTION_TYPES.CREATE:
            return [...items, action.payload];
        case ACTION_TYPES.FETCH_ONE:
            return action.payload;

        default:
            return items;
    }
};

export default itemsReducer;
