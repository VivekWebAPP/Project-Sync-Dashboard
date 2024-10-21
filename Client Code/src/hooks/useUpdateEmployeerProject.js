import React from 'react'

const useUpdateEmployeerProject = () => {
    const updateEmployeerProject = async (token, id, ProjectName, ProjectType, ProjectPrice, FromDate, ToDate, StatusOfTheProject, Location, Priority) => {
        try {
            const response = await fetch(`http://localhost:5000/project/updateProject/${id}`, {
                method: "POST",
                mode: "cors",
                cache: "no-cache",
                credentials: "same-origin",
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": token,
                },
                body: JSON.stringify({ ProjectName: ProjectName, ProjectType: ProjectType, ProjectPrice: ProjectPrice, FromData: FromDate, ToDate: ToDate, StatusOfTheProject: StatusOfTheProject, Location: Location, Priority: Priority }),
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
    };
    return { updateEmployeerProject }
}

export default useUpdateEmployeerProject
