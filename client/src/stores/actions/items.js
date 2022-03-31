import * as api from "../../api";
import { ACTION_TYPES } from "../constants";

export const getItemsAction = () => async (dispatch) => {
    try {
        const { data } = await api.fetchItems();
        return dispatch({ type: ACTION_TYPES.FETCH_ALL, payload: data });
    } catch (error) {
        console.log(error.message);
    }
};

export const getItemAction = (id) => async (dispatch) => {
    try {
        const { data } = await api.fetchItem(id);
        return dispatch({ type: ACTION_TYPES.FETCH_ONE, payload: data });
    } catch (error) {
        console.log(error.message);
    }
};

export const postItemAction = (newItem) => async (dispatch) => {
    try {
        const { data } = await api.postItem(newItem);
        return dispatch({ type: ACTION_TYPES.CREATE, payload: data });
    } catch (error) {
        console.log(error.message);
    }
};

export const deleteItemAction = (id) => async (dispatch) => {
    try {
        dispatch({ type: ACTION_TYPES.DELETE, payload: id });
        await api.deleteItem(id);
    } catch (error) {
        console.log(error.message);
    }
};
