import { Box, Container, TextField } from "@mui/material";
import { Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { postItemAction } from "../stores/actions/items";
import { itemValidationSchema } from "../validations/index";

const itemInfo = [
    { label: "id", name: "id", type: "text" },
    { label: "name", name: "name", type: "text" },
    { label: "manufacturer", name: "manufacturer", type: "text" },
    { label: "description", name: "description", type: "text" },
    { label: "color", name: "color", type: "text" },
    { label: "price", name: "price", type: "number" },
    { label: "imageFileName", name: "imageFileName", type: "text" },
    { label: "screen", name: "screen", type: "text" },
    { label: "processor", name: "processor", type: "text" },
    { label: "ram", name: "ram", type: "text" },
    { label: "createdAt", name: "createdAt", type: "date" },
];

export const AddItem = () => {
    const defaultValues = {
        id: "",
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

    return (
        <Container>
            <Formik
                initialValues={defaultValues}
                validationSchema={itemValidationSchema}
                onSubmit={onSubmit}
            >
                {(formik) => (
                    <div>
                        <div>
                            <h1>Add an Item</h1>
                        </div>
                        <Form>
                            <Box
                                sx={{
                                    flex: 1,
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    alignContent: "center",
                                    position: "relative",
                                }}
                            >
                                {itemInfo.map((el, key) => {
                                    return (
                                        <TextField
                                            label={el.label}
                                            name={el.name}
                                            type={el.type}
                                            key={key}
                                            onChange={formik.handleChange}
                                        />
                                    );
                                })}
                            </Box>
                            <Container
                                sx={{
                                    flex: 1,
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    alignContent: "center",
                                    position: "relative",
                                }}
                            >
                                <button type="submit">Register</button>
                                <button type="reset">Reset</button>
                            </Container>
                        </Form>
                    </div>
                )}
            </Formik>
        </Container>
    );
};
