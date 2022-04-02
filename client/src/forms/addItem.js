import { Box, Container, TextField, Typography } from "@mui/material";
import { Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { postItemAction } from "../stores/actions/items";
import { itemValidationSchema } from "../validations/index";

const itemInfo = [
    { label: "name", name: "name", type: "text" },
    { label: "manufacturer", name: "manufacturer", type: "text" },
    { label: "description", name: "description", type: "text" },
    { label: "color", name: "color", type: "text" },
    { label: "price", name: "price", type: "number" },
    { label: "imageFileName", name: "imageFileName", type: "text" },
    { label: "screen", name: "screen", type: "text" },
    { label: "processor", name: "processor", type: "text" },
    { label: "ram", name: "ram", type: "number" },
    { label: "createdAt", name: "createdAt", type: "date" },
];

export const AddItem = () => {
    const defaultValues = {
        name: "",
        manufacturer: "",
        description: "",
        color: "",
        price: "",
        imageFileName: "",
        screen: "",
        processor: "",
        ram: "",
        createdAt: "",
    };

    const dispatch = useDispatch();

    const onSubmit = (values) => {
        console.log("Adding item", values);
        dispatch(postItemAction(values));
    };

    const onReset = () => {
        console.log("reseting cell values");
    };

    return (
        <Formik
            initialValues={defaultValues}
            validationSchema={itemValidationSchema}
            onSubmit={onSubmit}
            onReset={onReset}
        >
            {(formik) => (
                <Container
                    sx={{
                        flex: 1,
                        alignContent: "center",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <Typography variant="h4" sx={{ padding: 5 }}>
                        Add an Item to the Phone Catalog
                    </Typography>
                    <Form>
                        <Box
                            sx={{
                                flex: 1,
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignContent: "center",
                                alignItems: "center",
                            }}
                        >
                            {itemInfo.map((el, key) => {
                                return (
                                    <TextField
                                        label={
                                            el.label === "createdAt"
                                                ? ""
                                                : el.label
                                        }
                                        name={el.name}
                                        type={el.type}
                                        key={key}
                                        onChange={formik.handleChange}
                                    />
                                );
                            })}
                        </Box>
                        <Container sx={{ flexDirection: "column" }}>
                            <button type="submit">Register</button>
                            <button type="reset">Reset</button>
                        </Container>
                    </Form>
                </Container>
            )}
        </Formik>
    );
};
