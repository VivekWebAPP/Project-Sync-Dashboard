import React, { useContext } from 'react';
import Context from '../context/ContextAPI';
import { ResponsiveRadialBar } from '@nivo/radial-bar';
import { tokens } from "../theme";
import { useTheme } from "@mui/material";


const RadialPaiChart = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const context = useContext(Context);
    const { fetchProjects, usersType } = context;
    const data = fetchProjects;
    let mainData = []
    if (data !== '') {
        if (usersType === 'Employer') {
            for (let i = 0; i < data.length; i++) {
                let obj = {
                    "id": "",
                    "data": [{
                        "x": "Project Price",
                        "y": 0,
                    }, {
                        "x": "Project Budget",
                        "y": 0,
                    }],
                };

                obj["id"] = data[i].ProjectName;
                obj['data'][0]['y'] = data[i].ProjectPrice;
                obj['data'][1]['y'] = data[i].ProjectBudget;
                mainData.push(obj);
            }
        }
        else if (usersType === 'Employee') {
            for (let i = 0; i < data.length; i++) {
                let obj = {
                    "id": "",
                    "data": [{
                        "x": "Project Price",
                        "y": 0,
                    }, {
                        "x": "Expenses",
                        "y": 0,
                    }, {
                        "x": "Budget",
                        "y": 0,
                    }, {
                        "x": "Additional Budget",
                        "y": 0,
                    }],
                };

                obj["id"] = data[i].ProjectName;
                obj['data'][0]['y'] = data[i].ProjectExpense;
                obj['data'][1]['y'] = data[i].Expenses;
                obj['data'][2]['y'] = data[i].Budget;
                obj['data'][3]['y'] = data[i].AdditionalBudget;
                mainData.push(obj);
            }
        }
        else if (usersType === 'Teacher') {
            for (let i = 0; i < data.length; i++) {
                let obj = {
                    "id": "",
                    "data": [{
                        "x": "Course Price",
                        "y": 0,
                    }, {
                        "x": "Course Budget",
                        "y": 0,
                    }],
                };

                obj["id"] = data[i].CourseName;
                obj['data'][0]['y'] = data[i].ProjectPrice;
                obj['data'][1]['y'] = data[i].ProjectBudget;
                mainData.push(obj);
            }
        }
        else if (usersType === 'Student') {
            for (let i = 0; i < data.length; i++) {
                let obj = {
                    "id": "",
                    "data": [{
                        "x": "Course Price",
                        "y": 0,
                    }, {
                        "x": "Expenses",
                        "y": 0,
                    }, {
                        "x": "Budget",
                        "y": 0,
                    }, {
                        "x": "Additional Budget",
                        "y": 0,
                    }],
                };

                obj["id"] = data[i].Subject;
                obj['data'][0]['y'] = data[i].CoursePrice;
                obj['data'][1]['y'] = data[i].Expenses;
                obj['data'][2]['y'] = data[i].Budget;
                obj['data'][3]['y'] = data[i].AdditionalBudget;
                mainData.push(obj);
            }
        }
    }
    return (
        <ResponsiveRadialBar
            data={mainData}
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
            valueFormat=">-.2f"
            startAngle={-3}
            padding={0.35}
            cornerRadius={2}
            margin={{ top: 40, right: 120, bottom: 80, left: 40 }}
            radialAxisStart={{ tickSize: 5, tickPadding: 5, tickRotation: 0 }}
            circularAxisOuter={{ tickSize: 5, tickPadding: 12, tickRotation: 0 }}
            labelsSkipAngle={6}
            labelsTextColor={{ from: 'color', modifiers: [] }}
            legends={[
                {
                    dataFrom: 'keys',
                    anchor: 'bottom',
                    direction: 'row',
                    justify: false,
                    translateX: -5,
                    translateY: 51,
                    itemWidth: 130,
                    itemHeight: 24,
                    itemsSpacing: 0,
                    symbolSize: 17,
                    itemDirection: 'right-to-left',
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemTextColor: '#000'
                            }
                        }
                    ]
                }
            ]}
        />
    )
}

export default RadialPaiChart
