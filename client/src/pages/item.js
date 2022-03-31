import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getItemAction } from "../stores/actions/items";

const ItemPage = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const [Item, setItem] = useState();

    useEffect(() => {
        dispatch(getItemAction(id)).then(({ payload }) => setItem(payload));
    }, [dispatch, id]);

    return (
        <div>
            {!Item ? (
                <p>...Loading</p>
            ) : (
                Object.keys(Item).map((key, index) => (
                    <p key={index}>{Item[key]}</p>
                ))
            )}
        </div>
    );
};

export default ItemPage;
