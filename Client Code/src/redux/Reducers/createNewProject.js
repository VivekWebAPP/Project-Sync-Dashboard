const createNewProject = (state = "", action) => {
  switch (action.type) {
    case "EmployeerProjectCreatedSuccessfully":
      return action.payload;
    case "EmployeerProjectCreationFailed":
      return "";
    case "EmployeeProjectCreatedSuccessfully":
      return action.payload;
    case "EmployeeProjectCreationFailed":
      return "";
    case "TeacherCourseCreatedSuccessfully":
      return action.payload;
    case "TeacherCourseCreationFailed":
      return "";
    case "StudentAssignmentCreatedSuccessfully":
      return action.payload;
    case "":
      return "StudentAssignmenCreationFailed";
    default:
      return state;
  }
};

export default createNewProject;
