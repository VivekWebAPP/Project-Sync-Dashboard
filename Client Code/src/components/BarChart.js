import { useTheme } from "@mui/material";
import { ResponsiveBar } from "@nivo/bar";
import { tokens } from "../theme";
import Context from "../context/ContextAPI";
import { useContext } from "react";
import SettingLoader from "../Loaders Design/SettingLoader";


const BarChart = ({ isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const context = useContext(Context);
  const { fetchProjects, usersType } = context;
  const data = fetchProjects;
  console.log(fetchProjects);
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
  let count1 = 0;
  let count2 = 0;
  let count3 = 0;
  let count4 = 0;

  if (data !== '' && usersType !== '') {
    if (usersType === 'Employer') {
      for (let i = 0; i < data.length; i++) {
        if (data[i].StatusOfTheProject === 'Just Started') {
          count1++;
        }
        else if (data[i].StatusOfTheProject === 'On Going') {
          count2++;
        }
        else if (data[i].StatusOfTheProject === 'About to finish') {
          count3++;
        }
        else if (data[i].StatusOfTheProject === 'Finished') {
          count4++;
        }
      }
    }
    else if (usersType === 'Employee') {
      for (let i = 0; i < data.length; i++) {
        if (data[i].StatusOfTheProject === 'Just Started') {
          count1++;
        }
        else if (data[i].StatusOfTheProject === 'On Going') {
          count2++;
        }
        else if (data[i].StatusOfTheProject === 'About to finish') {
          count3++;
        }
        else if (data[i].StatusOfTheProject === 'Finished') {
          count4++;
        }
      }
    }
    else if (usersType === 'Teacher') {
      for (let i = 0; i < data.length; i++) {
        if (data[i].StatusOfTheCourse === 'Just Started') {
          count1++;
        }
        else if (data[i].StatusOfTheCourse === 'On Going') {
          count2++;
        }
        else if (data[i].StatusOfTheCourse === 'About to finish') {
          count3++;
        }
        else if (data[i].StatusOfTheCourse === 'Finished') {
          count4++;
        }
      }
    }
    else if (usersType === 'Student') {
      for (let i = 0; i < data.length; i++) {
        if (data[i].StatusOfTheAssignment === 'Just Started') {
          count1++;
        }
        else if (data[i].StatusOfTheAssignment === 'On Going') {
          count2++;
        }
        else if (data[i].StatusOfTheAssignment === 'About to finish') {
          count3++;
        }
        else if (data[i].StatusOfTheAssignment === 'Finished') {
          count4++;
        }
      }
    }
  };

  const mainDataForStatusBarGraph = [{
    "Status": "Just Started",
    "Just Started": count1,
    "Just StartedColor": generateRandomHSLColor(),
  }, {
    "Status": "On Going",
    "On Going": count2,
    "On GoingColor": generateRandomHSLColor(),
  }, {
    "Status": "About to finish",
    "About to finish": count3,
    "About to finishColor": generateRandomHSLColor(),
  }, {
    "Status": "Finished",
    "Finished": count4,
    "FinishedColor": generateRandomHSLColor(),
  }];

  return (
    <>
      {mainDataForStatusBarGraph === '' ?<SettingLoader/>: <ResponsiveBar
        data={mainDataForStatusBarGraph}
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
        keys={[
          'Just Started',
          'On Going',
          'About to finish',
          'Finished',
        ]}
        indexBy="country"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        valueScale={{ type: "linear" }}
        indexScale={{ type: "band", round: true }}
        colors={{ scheme: "nivo" }}
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
          legend: 'Status',
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
        barAriaLabel={e => e.id + ": " + e.formattedValue + " in country: " + e.indexValue}
      />}
    </>
  );
};

export default BarChart;
