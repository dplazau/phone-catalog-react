import { AppBar, Typography } from "@mui/material";
import { Link } from "react-router-dom";


const ItemsAppBar = () => {
    return (
        <AppBar position="sticky" color="inherit">
            <Typography variant="h2" align="center">
                Phone Catalog
            </Typography>
            <Link to="/">Home</Link>
            <Link to="/add-item">Add Item</Link>
        </AppBar>
    );
};

export default ItemsAppBar;
