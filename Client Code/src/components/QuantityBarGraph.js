import React, { useContext } from 'react';
import { ResponsiveBar } from '@nivo/bar';
import Context from '../context/ContextAPI';
import { tokens } from "../theme";
import { useTheme } from "@mui/material";

const QuantityBarGraph = () => {
    const context = useContext(Context);
    const { fetchProjects, usersType } = context;
    const data = fetchProjects;
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    function generateRandomHSLColor() {
        // Generate a random hue between 0 and 360 degrees.
        const hue = Math.floor(Math.random() * 360);

        // Generate a random saturation between 0 and 100%.
        const saturation = Math.floor(Math.random() * 101);

        // Generate a random lightness between 0 and 100%.
        const lightness = Math.floor(Math.random() * 101);

        // Return the HSL color code as a string.
        return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    }
    let typeOfProjects = [];

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
    const createHashMap = (arr) => {
        let hash = new Map();
        arr.forEach(element => {
            hash.set(element, hash.get(element) + 1 || 1);
        });
        return hash;
    }

    const mainDataForProjectType = () => {
        const requiredHash = createHashMap(typeOfProjects);
        let resultantArray = [];
        requiredHash.forEach((value, key) => {
            let obj = {};
            obj["ProjectType"] = key;
            obj[key] = value;
            obj["keyColor"] = generateRandomHSLColor();
            resultantArray.push(obj);
        });
        return resultantArray;
    };

    const getKeys = [];

    const requiredHash = createHashMap(typeOfProjects);

    requiredHash.forEach((value, key) => {
        getKeys.push(key);
    });

    const mainDataForStatusBarGraph = mainDataForProjectType();

    return (
        <ResponsiveBar
            data={mainDataForStatusBarGraph}
            keys={getKeys}
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
            indexBy="ProjectType"
            margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
            padding={0.3}
            valueScale={{ type: 'linear' }}
            indexScale={{ type: 'band', round: true }}
            colors={{ scheme: 'nivo' }}
            defs={[
                {
                    id: 'dots',
                    type: 'patternDots',
                    background: 'inherit',
                    color: '#38bcb2',
                    size: 4,
                    padding: 1,
                    stagger: true
                },
                {
                    id: 'lines',
                    type: 'patternLines',
                    background: 'inherit',
                    color: '#eed312',
                    rotation: -45,
                    lineWidth: 6,
                    spacing: 10
                }
            ]}
            borderColor={{
                from: 'color',
                modifiers: [
                    [
                        'darker',
                        '3'
                    ]
                ]
            }}
            axisTop={null}
            axisRight={null}
            axisBottom={{
                tickSize: 8,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'ProjectType',
                legendPosition: 'middle',
                legendOffset: 32,
                truncateTickAt: 100
            }}
            axisLeft={{
                tickSize: 9,
                tickPadding: 2,
                tickRotation: 0,
                legend: 'Number',
                legendPosition: 'middle',
                legendOffset: -41,
                truncateTickAt: 0
            }}
            enableGridX={true}
            labelTextColor={{
                from: 'color',
                modifiers: [
                    [
                        'darker',
                        1.6
                    ]
                ]
            }}
            legends={[
                {
                    dataFrom: 'keys',
                    anchor: 'bottom-right',
                    direction: 'column',
                    justify: false,
                    translateX: 120,
                    translateY: 0,
                    itemsSpacing: 2,
                    itemWidth: 100,
                    itemHeight: 20,
                    itemDirection: 'left-to-right',
                    itemOpacity: 0.85,
                    symbolSize: 20,
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemOpacity: 1
                            }
                        }
                    ]
                }
            ]}
            role="application"
            isFocusable={true}
            ariaLabel="Nivo bar chart demo"
            barAriaLabel={e => e.id + ": " + e.formattedValue + " in Status: " + e.indexValue}
        />
    )
}

export default QuantityBarGraph
