import { Container } from "@mui/material";
import { AddItem } from "../forms/addItem";

const AddItemPage = () => {
    return (
        <Container sx={{ flex: 1, alignContent: "center" }}>
            <AddItem />
        </Container>
    );
};

export default AddItemPage;
