import { useContext, useEffect, useState } from 'react';
import { Box, Button, TextField } from '@mui/material';
import { Formik } from 'formik';
import * as yup from 'yup';
import useMediaQuery from '@mui/material/useMediaQuery';
import SendIcon from '@mui/icons-material/Send';
import Header from '../../components/Header';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { action } from '../../redux';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import AuthContext from '../../context/AuthContext';

const SiginForm = () => {
    const isNonMobile = useMediaQuery('(min-width:600px)');
    const token = useSelector((state) => state.authonication);
    const dispatch = useDispatch();
    const [Profession, setProfession] = useState('')
    const [signComponents, setsignComponents] = useState({
        name: "",
        profession: Profession,
        email: "",
        password: "",
        country: "",
    });
    const context = useContext(AuthContext);
    const {setauthToken} = context;

    // const phoneRegExp =
    //     /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

    const userSchema = yup.object().shape({
        name: yup.string().required('required'),
        profession: yup.string().email('Invalid email').required('required'),
        email: yup.string().required('required'),
        password: yup.string().required('required'),
        country: yup.string().required('required'),
    });

    const handleOnChangeOfProfession = (event) => {
        setProfession(event.target.value);
    }

    const handleOnChange = (event) => {
        setsignComponents({ ...signComponents, [event.target.name]: event.target.value });
    }

    const onSubmit = (event) => {
        event.preventDefault();
        signComponents.profession = Profession;
        dispatch(action.signUp(signComponents.name, signComponents.profession, signComponents.email, signComponents.password, signComponents.country));
        console.log(signComponents);
    }

    useEffect(()=>{
        if(token){
            localStorage.setItem('jwtToken',token);
            setauthToken(token);
            console.log('This is from sigin',token);
        }
        // eslint-disable-next-line
    },[token,setauthToken])

    return (
        <Box m="15px">
            <Helmet>
                <title>Profile Form | ReactDashX</title>
            </Helmet>
            <Header title="CREATE USER" subtitle="Create a New User Profile" />

            <Formik
                onSubmit={onSubmit}
                initialValues={signComponents}
                validationSchema={userSchema}
            >
                {({
                    handleBlur,
                }) => (
                    <form onSubmit={onSubmit}>
                        <Box
                            display="grid"
                            gap="20px"
                            gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                            sx={{
                                '& > div': { gridColumn: isNonMobile ? undefined : 'span 4' },
                            }}
                        >
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Full Name"
                                onBlur={handleBlur}
                                onChange={handleOnChange}
                                value={signComponents.firstName}
                                name="name"
                                sx={{ gridColumn: 'span 4' }}
                            />
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Profession</InputLabel>
                                <Select
                                    fullWidth
                                    variant="filled"
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={Profession}
                                    label="Status Of The Work"
                                    onChange={handleOnChangeOfProfession}
                                    sx={{ gridColumn: "span 4" }}
                                >
                                    <MenuItem value={'Employer'}>Employer</MenuItem>
                                    <MenuItem value={'Employee'}>Employee</MenuItem>
                                    <MenuItem value={'Teacher'}>Teacher</MenuItem>
                                    <MenuItem value={'Student'}>Student</MenuItem>
                                </Select>
                            </FormControl>
                            <TextField
                                fullWidth
                                variant="filled"
                                type="email"
                                label="Email"
                                onBlur={handleBlur}
                                onChange={handleOnChange}
                                value={signComponents.contact}
                                name="email"
                                sx={{ gridColumn: 'span 4' }}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="password"
                                label="Password"
                                onBlur={handleBlur}
                                onChange={handleOnChange}
                                value={signComponents.address1}
                                name="password"
                                sx={{ gridColumn: 'span 4' }}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Country"
                                onBlur={handleBlur}
                                onChange={handleOnChange}
                                value={signComponents.country}
                                name="country"
                                sx={{ gridColumn: 'span 4' }}
                            />
                        </Box>
                        <Box display="flex" justifyContent="end" mt="15px">
                            <Button
                                type="submit"
                                onClick={onSubmit}
                                color="secondary"
                                variant="contained"
                                startIcon={<SendIcon />}
                            >
                                Create User
                            </Button>
                        </Box>
                    </form>
                )}
            </Formik>
        </Box>
    );
};

export default SiginForm
