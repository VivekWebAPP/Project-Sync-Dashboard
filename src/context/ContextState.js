import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { action } from "../redux/index.js";
import Context from "./ContextAPI.js";
import AuthContext from "./AuthContext.js";

const ContextState = (props) => {
  // Fetching Users Data From The Redux Store
  const dispatch = useDispatch();

  const authData = useSelector((state) => state.authonication);
  const context = useContext(AuthContext);
  const {authToken} = context;
  const token = authToken.toString();

  useEffect(() => {
    if (token) {
      dispatch(action.userDetail(token));
    }
    // eslint-disable-next-line
  }, [token]);

  const InputDataBasedOnTypeOfUser = [
    {
      Title: "Project",
      HeadPersion: "Company Name",
      WorkName: "Project Name",
      WorkType: "Project Type",
      ProjectPrice: "Project Price",
      ProjectBudget: "Project Budget",
      FromDate: "From Date",
      ToDate: "To Date",
      StatusOfTheWork: "Status Of The Project",
      Location: "Location",
      Priority: "Priority",
    },
    {
      Title: "Project",
      HeadPersion: "Project Manager Name",
      WorkName: "Project Name",
      WorkType: "Project Type",
      ProjectPrice: "Project Type",
      FromDate: "From Date",
      ToDate: "To Date",
      StatusOfTheWork: "Status Of The Project",
      Location: "Location",
      Priority: "Priority",
    },
    {
      Title: "Course",
      HeadPersion: "Course Name",
      WorkName: "No Of Student Enrolled",
      WorkType: "Course Type",
      ProjectPrice: "Course Price",
      ProjectBudget: "Course Budget",
      FromDate: "From Date",
      ToDate: "To Date",
      StatusOfTheWork: "Overall Grades In The Course",
      Location: "Location",
      Priority: "Priority",
    },
    {
      Title: "Assignment",
      HeadPersion: "Teacher Name",
      WorkName: "Assignment Name",
      WorkType: "Subject Type",
      ProjectPrice: "Course Price",
      FromDate: "From Date",
      ToDate: "To Date",
      StatusOfTheWork: "Status Of The Subject",
      Location: "Grades",
      Priority: "Priority",
    },
  ];

  const InputPlaceholdersBasedOnTypeOfUser = [
    {
      HeadPersion: "Ex- IBM LIMITED",
      WorkName: "Project Sync App",
      WorkType: "Web App",
      ProjectPrice: "Ex - 3500",
      Location: "Ex - Delhi",
    },
    {
      HeadPersion: "Ex - ABC Team Leader",
      WorkName: "Project Sync App",
      WorkType: "Web App",
      ProjectPrice: "Ex - 3500",
      Location: "Ex - Delhi",
    },
    {
      HeadPersion: "Ex - Thermodynamics Properties Of Material",
      WorkName: "Ex- 20 to 40",
      WorkType: "Ex - Mechanical",
      ProjectPrice: "Ex - 3500",
      Location: "Ex - Delhi",
    },
    {
      HeadPersion: "Ex - Mr/Mrs ABC",
      WorkName: "Ex - Trigonometry",
      WorkType: "Ex - Maths",
      ProjectPrice: "Ex - 3500",
      Location: "Ex - Delhi",
    },
  ];

  const typeOfUser = () => {
    switch (authData.profession) {
      case "Employer":
        return InputDataBasedOnTypeOfUser[0];
      case "Employee":
        return InputDataBasedOnTypeOfUser[1];
      case "Teacher":
        return InputDataBasedOnTypeOfUser[2];
      case "Student":
        return InputDataBasedOnTypeOfUser[3];
      default:
        return "";
    }
  };

  const typeOfPlaceholderBasedOnTypeOfUser = () => {
    switch (authData.profession) {
      case "Employer":
        return InputPlaceholdersBasedOnTypeOfUser[0];
      case "Employee":
        return InputPlaceholdersBasedOnTypeOfUser[1];
      case "Teacher":
        return InputPlaceholdersBasedOnTypeOfUser[2];
      case "Student":
        return InputPlaceholdersBasedOnTypeOfUser[3];
      default:
        return "";
    }
  };

  const usersType = authData.profession;

  const fetchProjects = useSelector((state) => state.fetchAllProjects);
  useEffect(() => {
    if (usersType === 'Employer') {
      dispatch(action.fetchAllEmployeerProject(token));
    }
  }, [dispatch, token, usersType]);

  useEffect(() => {
    if (usersType === 'Employee') {
      dispatch(action.fetchAllEmployeerProject(token));
    }
  }, [dispatch, token, usersType]);

  useEffect(() => {
    if (usersType === 'Teacher') {
      dispatch(action.fetchAllTeacherProject(token));
    }
  }, [dispatch, token, usersType]);

  useEffect(() => {
    if (usersType === 'Student') {
      dispatch(action.fetchAllStudentProject(token));
    }
  }, [dispatch, token, usersType]);


  // const deleteTheProject = useSelector((state) => state.deletionOfProject);
  useEffect(() => {
    if (usersType === 'Employer') {
      dispatch(action.DeleteEmployeerProject(token));
    }
  }, [dispatch, token, usersType]);

  useEffect(() => {
    if (usersType === 'Teacher') {
      dispatch(action.fetchAllTeacherProject(token));
    }
  }, [dispatch, token, usersType]);

  useEffect(() => {
    if (usersType === 'Student') {
      dispatch(action.fetchAllStudentProject(token));
    }
  }, [dispatch, token, usersType]);

  return (
    <Context.Provider value={{ authData, fetchProjects, typeOfUser, typeOfPlaceholderBasedOnTypeOfUser, usersType }}>
      {props.children}
    </Context.Provider>
  );
};

export default ContextState;
