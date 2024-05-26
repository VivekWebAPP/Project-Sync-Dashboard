import { loginToken, signUpToken, userDetails } from '../../API/loginSignupAPI.js'; // Import functions to handle API requests
import {newEmployeerProject,newEmployeeProject,newTeacherProject,newStudentProject,fetchAllEmployeerProjects,fetchAllEmployeeProjects,fetchAllTeacherCourses,fetchAllStudentsAssignments} from '../../API/createNewProjectAndFetchAllProjectsAPI.js'; // Import functions to handle API requests
import {updateEmployeerProject,updateEmployeeProject,updateTeacherProject,updateStudentProject} from '../../API/UpdateTheProject.js';
import {deletionOfEmployeerProject,deletionOfEmployeeProject,deletionOfTeacherProject,deletionOfStudentProject} from '../../API/deleteTheProject.js';

export const login = ( name, email, password ) => {
  return async (dispatch) => {
    try {
      const response = await loginToken(name, email, password); // Assuming loginUser is a function that makes the login API request
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: response // Assuming response contains the user data upon successful login
      });
    } catch (error) {
      dispatch({
        type: "LOGIN_FAILURE",
        payload: error.message, // Assuming error.message contains the error message
      });
    }
  };
};

export const signUp = ( userName, profession, email, password, country ) => {
  return async (dispatch) => {
    try {
      const response = await signUpToken(userName, profession, email, password, country); // Assuming signUpUser is a function that makes the sign up API request
      dispatch({
        type: "SIGNUP_SUCCESS",
        payload: response, // Assuming response contains the user data upon successful sign up
      });
    } catch (error) {
      dispatch({
        type: "SIGNUP_FAILURE",
        payload: error.message, // Assuming error.message contains the error message
      });
    }
  };
};


export const userDetail = (token)=>{
  return async (dispatch)=>{
    try {
      const response =await userDetails(token); // Assuming userDetails is a function that makes the up API request
      dispatch({
        type:"UserDetails_Success",
        payload:response, // Assuming response contains the user data upon successful login 
      });
    } catch (error) {
      dispatch({
        type:"UserDetails_Failure",
        payload:error.message, // Assuming error.message contains the error message
      });
    }
  }
}


export const CreateNewEmployeerProject=(token,CompanyName,ProjectName,ProjectType,ProjectPrice,FromDate,ToDate,StatusOfTheProject,Location,Priority)=>{
  return async (dispatch)=>{
    try {
      const response = await newEmployeerProject(token,CompanyName,ProjectName,ProjectType,ProjectPrice,FromDate,ToDate,StatusOfTheProject,Location,Priority);
      dispatch({
        type:"EmployeerProjectCreatedSuccessfully",
        payload:response,
      });
    } catch (error) {
      dispatch({
        type:"EmployeerProjectCreationFailed",
        payload:error.message,
      })
    }
  }
};


export const CreateNewEmployeeProject=(token,ProjectName,ProjectType,ProjectPrice,Expenses,ExpensesName,Budget,AdditionalBudgetName,AdditionalBudget,FromDate,ToDate,StatusOfTheProject,Location,Priority)=>{
  return async (dispatch)=>{
    try {
      const response = await newEmployeeProject(token,ProjectName,ProjectType,ProjectPrice,Expenses,ExpensesName,Budget,AdditionalBudgetName,AdditionalBudget,FromDate,ToDate,StatusOfTheProject,Location,Priority);
      dispatch({
        type:"EmployeeProjectCreatedSuccessfully",
        payload:response,
      });
    } catch (error) {
      dispatch({
        type:"EmployeeProjectCreationFailed",
        payload:error.message,
      })
    }
  }
};


export const CreateNewTeacherProject=(token,CourseName,NoOfStudentEnrolled,CourseType,CourseExpense,FromData,ToDate,StatusOfTheCourse,OverallGradesInTheCourse,Priority)=>{
  return async (dispatch)=>{
    try {
      const response = await newTeacherProject(token,CourseName,NoOfStudentEnrolled,CourseType,CourseExpense,FromData,ToDate,StatusOfTheCourse,OverallGradesInTheCourse,Priority);
      dispatch({
        type:"TeacherCourseCreatedSuccessfully",
        payload:response,
      });
    } catch (error) {
      dispatch({
        type:"TeacherCourseCreationFailed",
        payload:error.message,
      })
    }
  }
};

export const CreateNewStudentProject=(token,TeacherName,AssignmentName,Subject,CoursePrice,Expenses,ExpensesName,Budget,AdditionalBudgetName,AdditionalBudget,FromDate,ToDate,StatusOfTheAssignment,Grades,Priority)=>{
  return async (dispatch)=>{
    try {
      const response = await newStudentProject(token,TeacherName,AssignmentName,Subject,CoursePrice,Expenses,ExpensesName,Budget,AdditionalBudgetName,AdditionalBudget,FromDate,ToDate,StatusOfTheAssignment,Grades,Priority);
      dispatch({
        type:"StudentAssignmentCreatedSuccessfully",
        payload:response,
      });
    } catch (error) {
      dispatch({
        type:"StudentAssignmenCreationFailed",
        payload:error.message,
      })
    }
  }
};


export const fetchAllEmployeerProject=(token)=>{
  return async (dispatch)=>{
    try {
      const response = await fetchAllEmployeerProjects(token);
      dispatch({
        type:"Fetched_Employer_Project_Successfully",
        payload:response,
      });
    } catch (error) {
      dispatch({
        type:"Fetching_Employer_Project_Failed",
        payload:error.message,
      })
    }
  }
}



export const fetchAllEmployeeProject=(token)=>{
  return async (dispatch)=>{
    try {
      const response = await fetchAllEmployeeProjects(token);
      dispatch({
        type:"Fetched_Employee_Project_Successfully",
        payload:response,
      });
    } catch (error) {
      dispatch({
        type:"Fetching_Employee_Project_Failed",
        payload:error.message,
      })
    }
  }
};


export const fetchAllTeacherProject=(token)=>{
  return async (dispatch)=>{
    try {
      const response = await fetchAllTeacherCourses(token);
      dispatch({
        type:"Fetched_Course_Successfully",
        payload:response,
      });
    } catch (error) {
      dispatch({
        type:"Fetching_Course_Failed",
        payload:error.message,
      })
    }
  }
};

export const fetchAllStudentProject=(token)=>{
  return async (dispatch)=>{
    try {
      const response = await fetchAllStudentsAssignments(token);
      dispatch({
        type:"Fetched_Assignment_Successfully",
        payload:response,
      });
    } catch (error) {
      dispatch({
        type:"Fetching_Assignment_Failed",
        payload:error.message,
      });
    }
  }
};



export const UpdateEmployeerProject = (token,id,ProjectName,ProjectType,ProjectPrice,FromDate,ToDate,StatusOfTheProject,Location,Priority)=>{
  return async (dispatch)=>{
    try {
      const response = await updateEmployeerProject(token,id,ProjectName,ProjectType,ProjectPrice,FromDate,ToDate,StatusOfTheProject,Location,Priority);
      dispatch({
        type:"EmployeerProjectUpdatedSuccessfully",
        payload:response,
      });
    } catch (error) {
      dispatch({
        type:"EmployeerProjectUpdationFailed",
        payload:error.message,
      })
    }
  }
};


export const UpdateEmployeeProject = (token,id,ProjectName,ProjectType,ProjectPrice,FromDate,ToDate,StatusOfTheProject,Location,Priority)=>{
  return async (dispatch)=>{
    try {
      const response = await updateEmployeeProject(token,id,ProjectName,ProjectType,ProjectPrice,FromDate,ToDate,StatusOfTheProject,Location,Priority);
      dispatch({
        type:"EmployeeProjectUpdatedSuccessfully",
        payload:response,
      });
    } catch (error) {
      dispatch({
        type:"EmployeeProjectUpdationFailed",
        payload:error.message,
      })
    }
  }
};


export const UpdateTeacherProject = (token,id,CourseName,NoOfStudentEnrolled,CourseType,CourseExpense,FromDate,ToDate,StatusOfTheCourse,OverallGradesInTheCourse,Priority)=>{
  return async (dispatch)=>{
    try {
      const response = await updateTeacherProject(token,id,CourseName,NoOfStudentEnrolled,CourseType,CourseExpense,FromDate,ToDate,StatusOfTheCourse,OverallGradesInTheCourse,Priority);
      dispatch({
        type:"TeacherCourseUpdatedSuccessfully",
        payload:response,
      });
    } catch (error) {
      dispatch({
        type:"TeacherCourseUpdationFailed",
        payload:error.message,
      })
    }
  }
};



export const UpdateStudentProject = (token,id,TeacherName,AssignmentName,Subject,CoursePrice,FromDate,ToDate,StatusOfTheAssignment,Grades,Priority)=>{
  return async (dispatch)=>{
    try {
      const response = await updateStudentProject(token,id,TeacherName,AssignmentName,Subject,CoursePrice,FromDate,ToDate,StatusOfTheAssignment,Grades,Priority);
      dispatch({
        type:"StudentAssignmentUpdatedSuccessfully",
        payload:response,
      });
    } catch (error) {
      dispatch({
        type:"StudentAssignmentUpdationFailed",
        payload:error.message,
      })
    }
  }
};


export const DeleteEmployeerProject=(token,id)=>{
  return async (dispatch)=>{
    try {
      const response = await deletionOfEmployeerProject(token,id);
      dispatch({
        type:"Deleted_Employer_Project_Successfully",
        payload:response,
      });
    } catch (error) {
      dispatch({
        type:"Deletion_Employer_Project_Failed",
        payload:error.message,
      })
    }
  }
};


export const DeleteEmployeeProject=(token,id)=>{
  return async (dispatch)=>{
    try {
      const response = await deletionOfEmployeeProject(token,id);
      dispatch({
        type:"Deleted_Employee_Project_Successfully",
        payload:response,
      });
    } catch (error) {
      dispatch({
        type:"Deletion_Employee_Project_Failed",
        payload:error.message,
      })
    }
  }
};


export const DeleteTeacherCourse=(token,id)=>{
  return async (dispatch)=>{
    try {
      const response = await deletionOfTeacherProject(token,id);
      dispatch({
        type:"Deleted_Teacher_Course_Successfully",
        payload:response,
      });
    } catch (error) {
      dispatch({
        type:"Deletion_Teacher_Course_Failed",
        payload:error.message,
      })
    }
  }
};


export const DeleteStudentAssignment=(token,id)=>{
  return async (dispatch)=>{
    try {
      const response = await deletionOfStudentProject(token,id);
      dispatch({
        type:"Deleted_Student_Assignement_Successfully",
        payload:response,
      });
    } catch (error) {
      dispatch({
        type:"Deletion_Student_Assignement_Failed",
        payload:error.message,
      })
    }
  }
};


