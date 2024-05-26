import React, { useContext } from 'react';
import Context from '../context/ContextAPI';
import { ResponsiveMarimekko } from '@nivo/marimekko';
import { tokens } from "../theme";
import { useTheme } from "@mui/material";
import SettingLoader from '../Loaders Design/SettingLoader';


const ComponentsBarChart = () => {
    const context = useContext(Context);
    const { fetchProjects, usersType } = context;
    const data = fetchProjects;
    let peoples = [];
    let typeOfProjects = [];
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    if (data !== '') {
        if (usersType === 'Employer') {
            for (let i = 0; i < data.length; i++) {
                peoples.push(data[i].CompanyName);
            }
        }
        else if (usersType === 'Employee') {
            for (let i = 0; i < data.length; i++) {
                peoples.push(data[i].ProjectManagerName);
            }
        }
        else if (usersType === 'Teacher') {
            for (let i = 0; i < data.length; i++) {
                peoples.push(data[i].CourseName);
            }
        }
        else if (usersType === 'Student') {
            for (let i = 0; i < data.length; i++) {
                let removeSpace = data[i].TeacherName;
                removeSpace = removeSpace.split(" ").join("")
                peoples.push(removeSpace);
            }
        }
    }

    if (data !== '' && usersType !== '') {
        if (usersType === 'Employer') {
            for (let i = 0; i < data.length; i++) {
                typeOfProjects.push(data[i].ProjectType);
            }
        }
        else if (usersType === 'Employee') {
            for (let i = 0; i < data.length; i++) {
                typeOfProjects.push(data[i].ProjectType);
            }
        }
        else if (usersType === 'Teacher') {
            for (let i = 0; i < data.length; i++) {
                typeOfProjects.push(data[i].CourseType);
            }
        }
        else if (usersType === 'Student') {
            for (let i = 0; i < data.length; i++) {
                typeOfProjects.push(data[i].Subject);
            }
        }
    };
    const CreateHashMap = (arr) => {
        let resultingMap = new Map();
        for (let i = 0; i < arr.length; i++) {
            resultingMap.set(arr[i], resultingMap.get(arr[i]) + 1 || 1);
        }

        return resultingMap;
    }

    let peoplesHashMap = CreateHashMap(peoples);
    let projectsHashMap = CreateHashMap(typeOfProjects);

    const peoplesArray = []
    peoplesHashMap.forEach((value, key) => {
        peoplesArray.push(key);
    });

    const projectsArray = [];
    projectsHashMap.forEach((value, key) => {
        projectsArray.push(key);
    });

    let mainDataArray = [];

    if (data !== '') {
        if (usersType === 'Employer') {
            for (let peoples in peoplesArray) {
                let obj = {};
                obj["peoples"] = peoples;
                for (let i = 0; i < projectsArray.length; i++) {
                    obj[projectsArray[i]] = 0;
                }
                for (let projectType in projectsArray) {
                    for (let i = 0; i < data.length; i++) {
                        if (peoples === data[i].CompanyName && projectType === data[i].ProjectType) {
                            obj[projectType] = obj[projectType] + 1;
                        }
                    }
                }
                mainDataArray.push(obj);
            };
        }
        else if (usersType === "Employee") {
            for (let peoples in peoplesArray) {
                let obj = {};
                obj["peoples"] = peoples;
                for (let i = 0; i < projectsArray.length; i++) {
                    obj[projectsArray[i]] = 0;
                }
                for (let projectType in projectsArray) {
                    for (let i = 0; i < data.length; i++) {
                        if (peoples === data[i].ProjectManagerName && projectType === data[i].ProjectType) {
                            obj[projectType] = obj[projectType] + 1;
                        }
                    }
                }
                mainDataArray.push(obj);
            };
        }
        else if (usersType === "Teacher") {
            for (let peoples in peoplesArray) {
                let obj = {};
                obj["peoples"] = peoples;
                for (let i = 0; i < projectsArray.length; i++) {
                    obj[projectsArray[i]] = 0;
                }
                for (let projectType in projectsArray) {
                    for (let i = 0; i < data.length; i++) {
                        if (peoples === data[i].CourseName && projectType === data[i].CourseType) {
                            obj[projectType] = obj[projectType] + 1;
                        }
                    }
                }
                mainDataArray.push(obj);
            };
        }
        else if (usersType === "Student") {
            for (let people = 0; people < peoplesArray.length; people++) {
                let obj = {};
                obj["peoples"] = peoplesArray[people];
                obj["participation"] = peoplesHashMap.get(peoplesArray[people]);
                for (let i = 0; i < projectsArray.length; i++) {
                    obj[projectsArray[i]] = 0;
                }
                for (let projectType = 0; projectType < projectsArray.length; projectType++) {
                    for (let i = 0; i < data.length; i++) {
                        let dataNameCheck = data[i].TeacherName;
                        dataNameCheck = dataNameCheck.toString(dataNameCheck);
                        dataNameCheck = dataNameCheck.split(" ").join("");
                        if (dataNameCheck === peoplesArray[people] && data[i].Subject === projectsArray[projectType]) {
                            obj[projectsArray[projectType]] = obj[projectsArray[projectType]] + 1;
                        }
                    }
                }
                mainDataArray.push(obj);
            };
        }
    }

    let dimensions = [];
    for (let i = 0; i < projectsArray.length; i++) {
        let obj = {
            id: '',
            value: '',
        };
        obj.id = projectsArray[i];
        obj.value = projectsArray[i]
        dimensions.push(obj);
    };


    let design = [];
    for (let i = 0; i < peoplesArray.length; i++) {
        let obj = {
            match: {
                id: peoplesArray[i]
            },
            id: 'lines'
        };
        design.push(obj);
    }
    return (
        <>
            {data===''?<SettingLoader/>:<ResponsiveMarimekko
            data={mainDataArray}
            theme={{
                axis: {
                    domain: {
                        line: {
                            stroke: colors.grey[100],
                        },
                    },
                    legend: {
                        text: {
                            fill: colors.grey[100],
                        },
                    },
                    ticks: {
                        line: {
                            stroke: colors.grey[100],
                            strokeWidth: 1,
                        },
                        text: {
                            fill: colors.grey[100],
                        },
                    },
                },
                legends: {
                    text: {
                        fill: colors.grey[100],
                    },
                },
            }}
            id="peoples"
            value="participation"
            dimensions={dimensions}
            offset="diverging"
            innerPadding={14}
            axisTop={null}
            axisRight={{
                orient: 'right',
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: '',
                legendOffset: 0
            }}
            axisBottom={{
                orient: 'bottom',
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'peoples',
                legendOffset: 36,
                legendPosition: 'middle'
            }}
            axisLeft={{
                orient: 'left',
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'participation',
                legendOffset: -40,
                legendPosition: 'middle'
            }}
            enableGridX={true}
            margin={{ top: 40, right: 80, bottom: 50, left: 80 }}
            colors={{ scheme: 'spectral' }}
            borderColor={{
                from: 'color',
                modifiers: [
                    [
                        'darker',
                        '3'
                    ]
                ]
            }}
            defs={[
                {
                    id: 'lines',
                    type: 'patternLines',
                    background: 'rgba(0, 0, 0, 0)',
                    color: 'inherit',
                    rotation: -45,
                    lineWidth: 4,
                    spacing: 8
                }
            ]}
            fill={design}
            legends={[
                {
                    anchor: 'bottom',
                    direction: 'row',
                    justify: false,
                    translateX: 44,
                    translateY: 50,
                    itemWidth: 152,
                    itemHeight: 21,
                    itemsSpacing: 0,
                    symbolSize: 20,
                    itemDirection: 'left-to-right'
                }
            ]}
        />}
        </>
    )
}

export default ComponentsBarChart
