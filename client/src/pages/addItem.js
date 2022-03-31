import { Grid, Grow } from "@mui/material";
import React from "react";
import { AddItem } from "../forms/addItem";

const AddItemPage = () => {
    return (
        <div>
            <Grow in>
                <Grid
                    container
                    justifyContent="space-between"
                    alignItems="stretch"
                    spacing={3}
                >
                    <Grid item xs={12} sm={4}>
                        <AddItem />
                    </Grid>
                </Grid>
            </Grow>
        </div>
    );
};

export default AddItemPage;
