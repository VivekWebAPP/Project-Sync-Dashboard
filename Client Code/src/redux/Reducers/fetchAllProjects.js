const fetchProject = (state = "", action) => {
  switch (action.type) {
    case "Fetched_Successfully":
      return action.payload;
    case "Fetching_Failed":
      return "";
    case "Fetched_Employer_Project_Successfully":
      return action.payload;
    case "Fetching_Employer_Project_Failed":
      return "";
    case "Fetched_Employee_Project_Successfully":
      return action.payload;
    case "Fetching_Employee_Project_Failed":
      return "";
    case "Fetched_Course_Successfully":
      return action.payload;
    case "Fetching_Course_Failed":
      return "";
    case "Fetched_Assignment_Successfully":
      return action.payload;
    case "Fetching_Assignment_Failed":
      return "";
    default:
      return state;
  }
};

export default fetchProject;
