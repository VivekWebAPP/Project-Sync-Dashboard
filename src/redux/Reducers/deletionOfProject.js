const deletionOfExistingProject=(state='',action)=>{
    switch (action.type) {
        case 'Deleted_Employer_Project_Successfully':
            return action.payload;
        case 'Deletion_Employer_Project_Failed':
            return '';
        case 'Deleted_Employee_Project_Successfully':
            return action.payload;
        case 'Deletion_Employee_Project_Failed':
            return '';
        case 'Deleted_Teacher_Course_Successfully':
            return action.payload;
        case 'Deletion_Teacher_Course_Failed':
            return '';
        case 'Deleted_Student_Assignement_Successfully':
            return action.payload;
        case 'Deletion_Student_Assignement_Failed':
            return '';
        default:
            return state;
    }
};

export default deletionOfExistingProject;