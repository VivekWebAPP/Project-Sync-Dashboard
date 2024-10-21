import { combineReducers } from "redux";
import loginOrSignUp from "./loginAndSignUpReducer.js";
import createNewProject from "./createNewProject.js";
import fetchProject from "./fetchAllProjects.js";
import updateTheExistingProjects from './updationOfProject.js';
import deletionOfExistingProject from './deletionOfProject.js';

const combinedReducer = combineReducers({
  authonication: loginOrSignUp,
  newProjectCreation: createNewProject,
  fetchAllProjects: fetchProject,
  updateTheProject: updateTheExistingProjects,
  deletionOfProject:deletionOfExistingProject,
});

export default combinedReducer;
