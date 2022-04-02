import { Container, Typography } from "@mui/material";
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
        <Container>
            {!Item ? (
                <p>...Loading</p>
            ) : (
                Object.keys(Item).map((key, index) =>
                    key === "imageFileName" ? (
                        <img src={Item[key]} alt="" />
                    ) : (
                        <Container sx={{ flex: 1, flexDirection: "column" }}>
                            <Typography key={index}>
                                {key}: {Item[key]}
                            </Typography>
                        </Container>
                    )
                )
            )}
        </Container>
    );
};

export default ItemPage;
