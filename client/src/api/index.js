import axios from "axios";

const url = "http://localhost:5000/items";

export const fetchItems = () => axios.get(url);

export const postItem = (newItem) => axios.post(url, newItem);

export const deleteItem = (id) => axios.delete(`${url}/${id}`)

export const fetchItem = (id) => axios.get(`${url}/${id}`);
