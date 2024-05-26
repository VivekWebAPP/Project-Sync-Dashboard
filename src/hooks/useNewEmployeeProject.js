import React from 'react';

const useNewEmployeeProject = () => {
    const newEmployeeProject = async (token, ProjectName, ProjectType, ProjectPrice, Expenses, ExpensesName, Budget, AdditionalBudgetName, AdditionalBudget, FromDate, ToDate, StatusOfTheProject, Location, Priority) => {
        try {
            const response = await fetch(`http://localhost:5000/employer/createNewProject`, {
                method: "POST",
                mode: "cors",
                cache: "no-cache",
                credentials: "same-origin",
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": token,
                },
                body: JSON.stringify({ ProjectName: ProjectName, ProjectType: ProjectType, ProjectExpense: ProjectPrice, Expenses: Expenses, ExpensesName: ExpensesName, Budget: Budget, AdditionalBudgetName: AdditionalBudgetName, AdditionalBudget: AdditionalBudget, FromData: FromDate, ToDate: ToDate, StatusOfTheProject: StatusOfTheProject, Location: Location, Priority: Priority }),
            });
            const json = await response.json();
            if (response.ok) {
                return json;
            } else {
                throw new Error('Creation Failed');
            }
        } catch (error) {
            throw new Error('Internal Error Occurred');
        }
    }
    return {newEmployeeProject};
}

export default useNewEmployeeProject
