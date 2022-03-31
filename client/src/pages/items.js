import { Container, Grid, Grow } from "@mui/material";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Items from "../components/items/items";
import { getItemsAction } from "../stores/actions/items";

const ItemsPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getItemsAction());
    }, [dispatch]);

    return (
        <Container>
            <Grow in>
                <Grid
                    container
                    justifyContent="space-between"
                    alignItems="stretch"
                    spacing={3}
                >
                    <Grid item xs={12} sm={7}>
                        <Items />
                    </Grid>
                </Grid>
            </Grow>
        </Container>
    );
};

export default ItemsPage;
