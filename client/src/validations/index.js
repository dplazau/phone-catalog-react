import * as Yup from "yup";

export const itemValidationSchema = Yup.object({
    name: Yup.string().required("Required"),
    manufacturer: Yup.string().required("Required"),
    description: Yup.string().required("Required"),
    color: Yup.string().required("Required"),
    price: Yup.number().required("Required"),
    imageFileName: Yup.string().required("Required"),
    screen: Yup.string().required("Required"),
    processor: Yup.string().required("Required"),
    ram: Yup.number().required("Required"),
    createdAt: Yup.date(),
});
