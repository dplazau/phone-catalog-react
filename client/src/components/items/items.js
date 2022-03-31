import React, { useEffect } from "react";
import { CircularProgress, Grid } from "@mui/material";
import { useSelector } from "react-redux";
import Item from "./item/item";
import styled from "styled-components";

const ItemsContainer = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Items = () => {
    const items = useSelector((state) => state.itemsReducer);

    useEffect(() => {}, [items]);

    return !items.length ? (
        <CircularProgress />
    ) : (
        <ItemsContainer>
            {items.map((item) => (
                <Grid item key={item._id} xs={12} sm={6}>
                    <Item item={item} key={item.id} />
                </Grid>
            ))}
        </ItemsContainer>
    );
};

export default Items;
