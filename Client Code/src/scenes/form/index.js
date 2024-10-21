import { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import Context from '../../context/ContextAPI.js';
import { action } from "../../redux/index.js";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Form = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const context = useContext(Context);
  const { typeOfUser, authData, typeOfPlaceholderBasedOnTypeOfUser, usersType } = context;
  const typeUser = typeOfUser();
  const typeOfPlaceholderBasedOnUser = typeOfPlaceholderBasedOnTypeOfUser();
  const createdProject = useSelector((state) => state.newProjectCreation);
  const dispatch = useDispatch();
  const [StatusOfTheProject, setStatusOfTheProject] = useState('');
  const [Priority, setPriority] = useState('');
  const [ProjectBudget, setProjectBudget] = useState(0)
  const [newProjectComponents, setnewProjectComponents] = useState({
    CompanyName: '',
    ProjectName: '',
    ProjectType: '',
    ProjectPrice: 0,
    FromDate: '',
    ToDate: '',
    StatusOfTheProject: StatusOfTheProject,
    Location: '',
    Priority: Priority,
  });
  const [ExpenseAndBudget, setExpenseAndBudget] = useState({
    ExpenseName: '',
    ExpenseAmount: '',
    MainBudgetAmount: '',
    BudgetName: '',
    BudgetAmount: '',
  })

  const typeOfUse = authData.profession;

  const handleChangeForStatusOfProject = (event) => {
    setStatusOfTheProject(event.target.value);
  };

  const handleOnChangeOfProjectBudget = (event) => {
    setProjectBudget(event.target.value);
  }

  const handleOnChange = (event) => {
    setnewProjectComponents({ ...newProjectComponents, [event.target.name]: event.target.value });
  }

  const handleChangePriority = (event) => {
    setPriority(event.target.value);
  };

  const handleExpensesAndBudgets = (event) => {
    setExpenseAndBudget({ ...ExpenseAndBudget, [event.target.name]: event.target.value });
  }

  // const phoneRegExp =
  //   /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

  const checkoutSchema = yup.object().shape({
    CompanyName: yup.string().required("required"),
    ProjectName: yup.string().required("required"),
    ProjectType: yup.string().required("required"),
    ProjectPrice: yup.number().required("required"),
    FromDate: yup.date().required("required"),
    ToDate: yup.date().required("required"),
    StatusOfTheProject: yup.string().required("required"),
    Locaion: yup.string().required("required"),
    Priority: yup.string().required("required"),
  });

  const onsubmit = (event) => {
    event.preventDefault();
    newProjectComponents.StatusOfTheProject = StatusOfTheProject;
    newProjectComponents.Priority = Priority;
    newProjectComponents.FromDate = newProjectComponents.FromDate.toString(newProjectComponents.FromDate);
    newProjectComponents.ToDate = newProjectComponents.ToDate.toString(newProjectComponents.ToDate);
    let token = localStorage.getItem('jwtToken');
    if (typeOfUse === 'Employer') {
      dispatch(action.CreateNewEmployeerProject(token, newProjectComponents.CompanyName, newProjectComponents.ProjectName, newProjectComponents.ProjectType, newProjectComponents.ProjectPrice, ProjectBudget, newProjectComponents.FromDate, newProjectComponents.ToDate, newProjectComponents.StatusOfTheProject, newProjectComponents.Location, newProjectComponents.Priority));
    }
    else if (typeOfUse === 'Employee') {
      dispatch(action.CreateNewEmployeerProject(token, newProjectComponents.CompanyName, newProjectComponents.ProjectName, newProjectComponents.ProjectType, newProjectComponents.ProjectPrice, ExpenseAndBudget.ExpenseName, ExpenseAndBudget.ExpenseAmount, ExpenseAndBudget.MainBudgetAmount, ExpenseAndBudget.BudgetName, ExpenseAndBudget.BudgetAmount, newProjectComponents.FromDate, newProjectComponents.ToDate, newProjectComponents.StatusOfTheProject, newProjectComponents.Location, newProjectComponents.Priority));
    }
    else if (typeOfUse === "Teacher") {
      dispatch(action.CreateNewTeacherProject(token, newProjectComponents.CompanyName, newProjectComponents.ProjectName, newProjectComponents.ProjectType, newProjectComponents.ProjectPrice, ProjectBudget, newProjectComponents.FromDate, newProjectComponents.ToDate, newProjectComponents.StatusOfTheProject, newProjectComponents.Location, newProjectComponents.Priority));
    }
    else if (typeOfUse === "Student") {
      dispatch(action.CreateNewStudentProject(token, newProjectComponents.CompanyName, newProjectComponents.ProjectName, newProjectComponents.ProjectType, newProjectComponents.ProjectPrice, ExpenseAndBudget.ExpenseName, ExpenseAndBudget.ExpenseAmount, ExpenseAndBudget.MainBudgetAmount, ExpenseAndBudget.BudgetName, ExpenseAndBudget.BudgetAmount, newProjectComponents.FromDate, newProjectComponents.ToDate, newProjectComponents.StatusOfTheProject, newProjectComponents.Location, newProjectComponents.Priority));
    }
  };

  return (
    <Box m="20px">
      <Header title={`Add A ${typeUser.Title}`} subtitle="Create a New User Profile" />

      <Formik
        onSubmit={onsubmit}
        initialValues={newProjectComponents}
        validationSchema={checkoutSchema}
      >
        {({
          errors,
          touched,
          handleBlur,
          handleSubmit,
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
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label={typeOfPlaceholderBasedOnUser.HeadPersion}
                onBlur={handleBlur}
                onChange={handleOnChange}
                value={newProjectComponents.CompanyName}
                name="CompanyName"
                error={!!touched.CompanyName && !!errors.CompanyName}
                helperText={touched.CompanyName && errors.CompanyName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label={typeOfPlaceholderBasedOnUser.WorkName}
                onBlur={handleBlur}
                onChange={handleOnChange}
                value={newProjectComponents.ProjectName}
                name="ProjectName"
                error={!!touched.ProjectName && !!errors.ProjectName}
                helperText={touched.ProjectName && errors.ProjectName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label={typeOfPlaceholderBasedOnUser.WorkType}
                onBlur={handleBlur}
                onChange={handleOnChange}
                value={newProjectComponents.ProjectType}
                name="ProjectType"
                error={!!touched.ProjectType && !!errors.ProjectType}
                helperText={touched.ProjectType && errors.ProjectType}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label={typeOfPlaceholderBasedOnUser.ProjectPrice}
                onBlur={handleBlur}
                onChange={handleOnChange}
                value={newProjectComponents.ProjectPrice}
                name="ProjectPrice"
                error={!!touched.ProjectPrice && !!errors.contact}
                helperText={touched.ProjectPrice && errors.contact}
                sx={{ gridColumn: "span 4" }}
              />
              {(usersType === 'Employer' || usersType === 'Teacher') ?
                <TextField
                  fullWidth
                  variant="filled"
                  type="number"
                  label={typeOfPlaceholderBasedOnUser.ProjectBudget}
                  onBlur={handleBlur}
                  onChange={handleOnChangeOfProjectBudget}
                  value={{ ProjectBudget }}
                  name="ProjectBudget"
                  error={!!ProjectBudget}
                  helperText={ProjectBudget}
                  sx={{ gridColumn: "span 4" }}
                /> : <div></div>}
              <TextField
                fullWidth
                variant="filled"
                type="date"
                onBlur={handleBlur}
                onChange={handleOnChange}
                value={newProjectComponents.FromDate}
                name="FromDate"
                error={!!touched.FromDate && !!errors.FromDate}
                helperText={touched.FromDate && errors.FromDate}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="date"
                onBlur={handleBlur}
                onChange={handleOnChange}
                value={newProjectComponents.ToDate}
                name="ToDate"
                error={!!touched.ToDate && !!errors.ToDate}
                helperText={touched.ToDate && errors.ToDate}
                sx={{ gridColumn: "span 4" }}
              />
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Status Of The Work</InputLabel>
                <Select
                  fullWidth
                  variant="filled"
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={StatusOfTheProject}
                  label="Status Of The Work"
                  onChange={handleChangeForStatusOfProject}
                  sx={{ gridColumn: "span 4" }}
                >
                  <MenuItem value={'Just Started'}>Just Started</MenuItem>
                  <MenuItem value={'On Going'}>On Going</MenuItem>
                  <MenuItem value={'About to finish'}>About to finish</MenuItem>
                  <MenuItem value={'Finished'}>Finished</MenuItem>
                </Select>
              </FormControl>
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label={typeOfPlaceholderBasedOnUser.Location}
                onBlur={handleBlur}
                onChange={handleOnChange}
                value={newProjectComponents.Location}
                name="Location"
                error={!!touched.Location && !!errors.Location}
                helperText={touched.Location && errors.Location}
                sx={{ gridColumn: "span 4" }}
              />
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Priority</InputLabel>
                <Select
                  fullWidth
                  variant="filled"
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={Priority}
                  label="Priority"
                  onChange={handleChangePriority}
                  sx={{ gridColumn: "span 4" }}
                >
                  <MenuItem value={'Low'}>Low</MenuItem>
                  <MenuItem value={'Medium'}>Medium</MenuItem>
                  <MenuItem value={'High'}>High</MenuItem>
                </Select>
              </FormControl>
              {typeOfUse === 'Employee' || typeOfUse === 'Student' ? <>
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label='Adds your current expense name.'
                  onBlur={handleBlur}
                  onChange={handleExpensesAndBudgets}
                  value={ExpenseAndBudget.ExpenseName}
                  name="ExpenseName"
                  error={!!touched.ExpenseName && !!errors.ExpenseName}
                  helperText={touched.ExpenseName && errors.ExpenseName}
                  sx={{ gridColumn: "span 4" }}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="number"
                  label='Adds your current expense amount.'
                  onBlur={handleBlur}
                  onChange={handleExpensesAndBudgets}
                  value={ExpenseAndBudget.ExpenseAmount}
                  name="ExpenseAmount"
                  error={!!touched.ExpenseAmount && !!errors.ExpenseAmount}
                  helperText={touched.ExpenseAmount && errors.ExpenseAmount}
                  sx={{ gridColumn: "span 4" }}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="number"
                  label='Sets your income / budget.'
                  onBlur={handleBlur}
                  onChange={handleExpensesAndBudgets}
                  value={ExpenseAndBudget.MainBudgetAmount}
                  name="MainBudgetAmount"
                  error={!!touched.MainBudgetAmount && !!errors.MainBudgetAmount}
                  helperText={touched.MainBudgetAmount && errors.MainBudgetAmount}
                  sx={{ gridColumn: "span 4" }}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label='Adds your current income / budget name'
                  onBlur={handleBlur}
                  onChange={handleExpensesAndBudgets}
                  value={ExpenseAndBudget.BudgetName}
                  name="BudgetName"
                  error={!!touched.BudgetName && !!errors.BudgetName}
                  helperText={touched.BudgetName && errors.BudgetName}
                  sx={{ gridColumn: "span 4" }}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="number"
                  label='Adds your current income / budget amount'
                  onBlur={handleBlur}
                  onChange={handleExpensesAndBudgets}
                  value={ExpenseAndBudget.BudgetAmount}
                  name="BudgetAmount"
                  error={!!touched.BudgetAmount && !!errors.BudgetAmount}
                  helperText={touched.BudgetAmount && errors.BudgetAmount}
                  sx={{ gridColumn: "span 4" }}
                />
              </> : <></>}
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained" onClick={onsubmit}>
                Add To The Queue
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default Form;
