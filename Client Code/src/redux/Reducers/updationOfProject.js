const updateTheExistingProjects = (state = "", action) => {
  switch (action.type) {
    case "EmployeerProjectUpdatedSuccessfully":
      return action.payload;
    case "EmployeerProjectUpdationFailed":
      return "";
    case "EmployeeProjectUpdatedSuccessfully":
      return action.payload;
    case "EmployeeProjectUpdationFailed":
      return "";
    case "TeacherCourseUpdatedSuccessfully":
      return action.payload;
    case "TeacherCourseUpdationFailed":
      return "";
    case "StudentAssignmentUpdatedSuccessfully":
      return action.payload;
    case "StudentAssignmentUpdationFailed":
      return "";
    default:
      return state;
  }
};


export default updateTheExistingProjects;
