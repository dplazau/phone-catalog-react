import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout";
import { PAGES } from "./pages";
import { getItemsAction } from "./stores/actions/items";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getItemsAction());
    }, [dispatch]);

    return (
        <BrowserRouter>
            <Layout />
            <Routes>
                <Route index path="/" element={<PAGES.ItemsPage />} />
                <Route path="/items/:id" element={<PAGES.ItemPage />} />
                <Route path="/add-item" element={<PAGES.AddItemPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
