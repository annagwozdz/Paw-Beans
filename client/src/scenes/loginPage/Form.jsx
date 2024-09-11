import { useState } from "react";
import {
    Box,
    Button,
    TextField,
    useMediaQuery,
    Typography,
    useTheme,
} from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { Formik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLogin } from "state";
import Dropzone from "react-dropzone";
import FlexBetween from "components/FlexBetween";

// Validation Schemas
const registerSchema = yup.object().shape({
    firstName: yup.string().required("required"),
    lastName: yup.string().required("required"),
    email: yup.string().email("invalid email").required("required"),
    password: yup.string().required("required"),
    location: yup.string().required("required"),
    age: yup.number().required("required"),
    species: yup.string().required("required"),
    breed: yup.string().required("required"),
    neutered: yup.boolean().required("required"),
    gender: yup.string().required("required"),
    human: yup.string().required("required"),
    picture: yup.mixed().required("required"),
});

// Add a schema for login form
const loginSchema = yup.object().shape({
    email: yup.string().email("invalid email").required("required"),
    password: yup.string().required("required"),
});

// Initial Values
const initialValuesRegister = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    location: "",
    age: "",
    species: "",
    breed: "",
    neutered: false,
    gender: "",
    human: "",
    picture: "",
};

const initialValuesLogin = {
    email: "",
    password: "",
};

// Main Form Component
const Form = () => {
    const [pageType, setPageType] = useState("login");
    const { palette } = useTheme();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isNonMobile = useMediaQuery("(min-width:600px)");
    const isLogin = pageType === "login";
    const isRegister = pageType === "register";

    // Register user
    const register = async (values, onSubmitProps) => {
        const formData = new FormData();
        for (let key in values) {
            formData.append(key, values[key]);
        }
        formData.append("picturePath", values.picture.name);

        const savedUserResponse = await fetch(
            "http://localhost:3001/auth/register",
            {
                method: "POST",
                body: formData,
            }
        );

        const savedUser = await savedUserResponse.json();
        onSubmitProps.resetForm();

        if (savedUser) {
            setPageType("login");
        }
    };

    // Log in user
    const login = async (values, onSubmitProps) => {
        const loggedInResponse = await fetch("http://localhost:3001/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(values),
        });

        const loggedIn = await loggedInResponse.json();
        onSubmitProps.resetForm();

        if (loggedIn) {
            dispatch(
                setLogin({
                    user: loggedIn.user,
                    token: loggedIn.token,
                })
            );
            navigate("/home");
        }
    };

    // Handle form submit for login/register
    const handleFormSubmit = async (values, onSubmitProps) => {
        if (isLogin) await login(values, onSubmitProps);
        if (isRegister) await register(values, onSubmitProps);
    };

    return (
        <Formik
            onSubmit={handleFormSubmit}
            initialValues={isLogin ? initialValuesLogin : initialValuesRegister}
            validationSchema={isLogin ? loginSchema : registerSchema}
        >
            {({
                values,
                errors,
                touched,
                handleBlur,
                handleChange,
                handleSubmit,
                setFieldValue,
                resetForm,
            }) => (
                <form onSubmit={handleSubmit}>
                    <Box
                        display="grid"
                        gap="30px"
                        gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                        sx={{
                            "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
                        }}
                    >
                        {isRegister && (
                            <>
                                {/* First Name Field */}
                                <TextField
                                    label="First Name"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.firstName}
                                    name="firstName"
                                    error={Boolean(touched.firstName) && Boolean(errors.firstName)}
                                    helperText={touched.firstName && errors.firstName}
                                    sx={{ gridColumn: "span 2" }}
                                />

                                {/* Last Name Field */}
                                <TextField
                                    label="Last Name"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.lastName}
                                    name="lastName"
                                    error={Boolean(touched.lastName) && Boolean(errors.lastName)}
                                    helperText={touched.lastName && errors.lastName}
                                    sx={{ gridColumn: "span 2" }}
                                />

                                {/* Location Field */}
                                <TextField
                                    label="Location"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.location}
                                    name="location"
                                    error={Boolean(touched.location) && Boolean(errors.location)}
                                    helperText={touched.location && errors.location}
                                    sx={{ gridColumn: "span 4" }}
                                />

                                {/* Age Field */}
                                <TextField
                                    label="Age"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.age}
                                    name="age"
                                    error={Boolean(touched.age) && Boolean(errors.age)}
                                    helperText={touched.age && errors.age}
                                    sx={{ gridColumn: "span 2" }}
                                />

                                {/* Species Field */}
                                <TextField
                                    label="Species"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.species}
                                    name="species"
                                    error={Boolean(touched.species) && Boolean(errors.species)}
                                    helperText={touched.species && errors.species}
                                    sx={{ gridColumn: "span 2" }}
                                />

                                {/* Breed Field */}
                                <TextField
                                    label="Breed"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.breed}
                                    name="breed"
                                    error={Boolean(touched.breed) && Boolean(errors.breed)}
                                    helperText={touched.breed && errors.breed}
                                    sx={{ gridColumn: "span 2" }}
                                />

                                {/* Neutered Field */}
                                <TextField
                                    label="Neutered (true/false)"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.neutered}
                                    name="neutered"
                                    error={Boolean(touched.neutered) && Boolean(errors.neutered)}
                                    helperText={touched.neutered && errors.neutered}
                                    sx={{ gridColumn: "span 2" }}
                                />

                                {/* Gender Field */}
                                <TextField
                                    label="Gender"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.gender}
                                    name="gender"
                                    error={Boolean(touched.gender) && Boolean(errors.gender)}
                                    helperText={touched.gender && errors.gender}
                                    sx={{ gridColumn: "span 2" }}
                                />

                                {/* Human Field */}
                                <TextField
                                    label="Human"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.human}
                                    name="human"
                                    error={Boolean(touched.human) && Boolean(errors.human)}
                                    helperText={touched.human && errors.human}
                                    sx={{ gridColumn: "span 2" }}
                                />

                                {/* Dropzone for Picture */}
                                <Box
                                    gridColumn="span 4"
                                    border={`1px solid ${palette.neutral.medium}`}
                                    borderRadius="5px"
                                    p="1rem"
                                >
                                    <Dropzone
                                        acceptedFiles=".jpg,.jpeg,.png"
                                        multiple={false}
                                        onDrop={(acceptedFiles) =>
                                            setFieldValue("picture", acceptedFiles[0])
                                        }
                                    >
                                        {({ getRootProps, getInputProps }) => (
                                            <Box
                                                {...getRootProps()}
                                                border={`2px dashed ${palette.primary.main}`}
                                                p="1rem"
                                                sx={{ "&:hover": { cursor: "pointer" } }}
                                            >
                                                <input {...getInputProps()} />
                                                {!values.picture ? (
                                                    <p>Add Picture Here</p>
                                                ) : (
                                                    <FlexBetween>
                                                        <Typography>{values.picture.name}</Typography>
                                                        <EditOutlinedIcon />
                                                    </FlexBetween>
                                                )}
                                            </Box>
                                        )}
                                    </Dropzone>
                                </Box>
                            </>
                        )}

                        {/* Email Field */}
                        <TextField
                            label="Email"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.email}
                            name="email"
                            error={Boolean(touched.email) && Boolean(errors.email)}
                            helperText={touched.email && errors.email}
                            sx={{ gridColumn: "span 4" }}
                        />

                        {/* Password Field */}
                        <TextField
                            label="Password"
                            type="password"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.password}
                            name="password"
                            error={Boolean(touched.password) && Boolean(errors.password)}
                            helperText={touched.password && errors.password}
                            sx={{ gridColumn: "span 4" }}
                        />
                    </Box>

                    {/* Buttons */}
                    <Box>
                        <Button
                            fullWidth
                            type="submit"
                            sx={{
                                m: "2rem 0",
                                p: "1rem",
                                backgroundColor: palette.primary.main,
                                color: palette.background.alt,
                                "&:hover": { color: palette.primary.main },
                            }}
                        >
                            {isLogin ? "LOGIN" : "REGISTER"}
                        </Button>
                        <Typography
                            onClick={() => {
                                setPageType(isLogin ? "register" : "login");
                                resetForm();
                            }}
                            sx={{
                                textDecoration: "underline",
                                color: palette.primary.main,
                                "&:hover": {
                                    cursor: "pointer",
                                    color: palette.primary.light,
                                },
                            }}
                        >
                            {isLogin
                                ? "Don't have an account? Sign Up here."
                                : "Already have an account? Login here."}
                        </Typography>
                    </Box>
                </form>
            )}
        </Formik>
    );
};

export default Form;