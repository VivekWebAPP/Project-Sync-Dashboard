import { useContext, useEffect, useState } from 'react';
import { Box, Button, TextField } from '@mui/material';
// import { Formik } from 'formik' Tooltip;
// import * as yup from 'yup';
import useMediaQuery from '@mui/material/useMediaQuery';
import SendIcon from '@mui/icons-material/Send';
import Header from '../../components/Header';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { action } from '../../redux';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';


const LoginForm = () => {
  const isNonMobile = useMediaQuery('(min-width:600px)');
  const dispatch = useDispatch();
  const loginToken = useSelector((state) => state.authonication); // Fixed typo
  const [loginComponents, setLoginComponents] = useState({
    name: '',
    email: '',
    password: '',
  });
  const context = useContext(AuthContext);
  const { setauthToken } = context;

  // const phoneRegExp =
  //   /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

  // const userSchema = yup.object().shape({
  //   name: yup.string().required('required'),
  //   email: yup.string().email('Invalid email').required('required'),
  //   password: yup.string().required('required'),
  // });

  const handleOnChange = (event) => {
    setLoginComponents({ ...loginComponents, [event.target.name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(action.login(loginComponents.name, loginComponents.email, loginComponents.password));
    console.log(loginComponents);
  };

  useEffect(() => {
    if (loginToken) {
      localStorage.setItem('jwtToken', loginToken);
      setauthToken(loginToken);
    }
    // eslint-disable-next-line
  }, [loginToken,setauthToken]);


  return (
    <Box m="15px">
      <Helmet>
        <title>Profile Form | ReactDashX</title>
      </Helmet>
      <Header title="CURRENT USER" subtitle="User's Login" />

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

            onChange={handleOnChange}
            value={loginComponents.name}
            name="name"
            sx={{ gridColumn: 'span 4' }}
          />
          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="Email (Press Enter Before Submitting)"

            onChange={handleOnChange}
            value={loginComponents.email}
            name="email"
            sx={{ gridColumn: 'span 4' }}
          />
          <TextField
            fullWidth
            variant="filled"
            type="password"
            label="Password"

            onChange={handleOnChange}
            value={loginComponents.password}
            name="password"
            sx={{ gridColumn: 'span 4' }}
          />
          <Link to='/sigin'>Do Not Have A Account</Link>
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
    </Box>
  );
};

export default LoginForm
