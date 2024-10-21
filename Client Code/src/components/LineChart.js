import { ResponsiveLine } from "@nivo/line";
import { useTheme } from "@mui/material";
import { tokens } from "../theme";
import { useContext } from "react";
import Context from "../context/ContextAPI";

const LineChart = ({ isCustomLineColors = false, isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const context = useContext(Context);
  const { fetchProjects, usersType } = context;
  const data = fetchProjects;
  let mainData = []
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
  const createHashMap = (arr) => {
    let hash = new Map();
    for (let i = 0; i < arr.length; i++) {
      hash.set(arr[i], hash.get(arr[i]) + 1 || 1)
    }
    return hash;
  }
  const MapComponents = [];
  if (data !== '') {
    if (usersType === "Employer") {
      for (let i = 0; i < data.length; i++) {
        MapComponents.push(data[i].ProjectName);
      }
    }
    else if (usersType === "Employee") {
      for (let i = 0; i < data.length; i++) {
        MapComponents.push(data[i].ProjectName);
      }
    }
    else if (usersType === "Teacher") {
      for (let i = 0; i < data.length; i++) {
        MapComponents.push(data[i].CourseName);
      }
    }
    else if (usersType === "Student") {
      for (let i = 0; i < data.length; i++) {
        MapComponents.push(data[i].Subject);
      }
    }
  }
  const uniqueMapComponent = createHashMap(MapComponents);
  const uniqueMapComponentKeys = []
  uniqueMapComponent.forEach((value, key) => {
    uniqueMapComponentKeys.push(key);
  });

  if (data !== '') {
    if (usersType === 'Employer') {
      for (let j = 0; j < uniqueMapComponentKeys.length; j++) {
        let obj = {
          "id": "",
          "color": generateRandomHSLColor(),
          "data": [{
            "x": "Project Price",
            "y": 0,
          }, {
            "x": "Project Budget",
            "y": 0,
          }],
        };
        obj["id"] = uniqueMapComponentKeys[j];
        for (let i = 0; i < data.length; i++) {
          if (data[i].CourseName === uniqueMapComponentKeys[j]) {
            obj['data'][0]['y'] = obj['data'][0]['y'] + data[i].ProjectPrice;
            obj['data'][1]['y'] = obj['data'][1]['y'] + data[i].ProjectBudget;
          }
        }
        mainData.push(obj);
      }
    }
    else if (usersType === 'Employee') {
      for (let j = 0; j < uniqueMapComponentKeys.length; j++) {
        let obj = {
          "id": "",
          "color": generateRandomHSLColor(),
          "data": [{
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
        obj["id"] = uniqueMapComponentKeys[j];
        for (let i = 0; i < data.length; i++) {
          if (data[i].Subject === uniqueMapComponentKeys[j]) {
            obj['data'][0]['y'] = obj['data'][0]['y'] + data[i].Expenses;
            obj['data'][1]['y'] = obj['data'][1]['y'] + data[i].Budget;
            obj['data'][2]['y'] = obj['data'][2]['y'] + data[i].AdditionalBudget;
          }
        }
        mainData.push(obj);
      }
    }
    else if (usersType === 'Teacher') {
      for (let j = 0; j < uniqueMapComponentKeys.length; j++) {
        let obj = {
          "id": "",
          "color": generateRandomHSLColor(),
          "data": [{
            "x": "Course Price",
            "y": 0,
          }, {
            "x": "Course Budget",
            "y": 0,
          }],
        };
        obj["id"] = uniqueMapComponentKeys[j];
        for (let i = 0; i < data.length; i++) {
          if (data[i].CourseName === uniqueMapComponentKeys[j]) {
            obj['data'][0]['y'] = obj['data'][0]['y'] + data[i].CourseExpense;
            obj['data'][1]['y'] = obj['data'][1]['y'] + data[i].CourseBudget;
          }
        }
        mainData.push(obj);
      }
    }
    else if (usersType === 'Student') {
      for (let j = 0; j < uniqueMapComponentKeys.length; j++) {
        let obj = {
          "id": "",
          "color": generateRandomHSLColor(),
          "data": [{
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
        obj["id"] = uniqueMapComponentKeys[j];
        for (let i = 0; i < data.length; i++) {
          if (data[i].Subject === uniqueMapComponentKeys[j]) {
            console.log(data[i].Subject);
            obj['data'][0]['y'] = obj['data'][0]['y'] + data[i].Expenses;
            obj['data'][1]['y'] = obj['data'][1]['y'] + data[i].Budget;
            obj['data'][2]['y'] = obj['data'][2]['y'] + data[i].AdditionalBudget;
          }
        }
        mainData.push(obj);
      }
    }
  }

  return (
    <ResponsiveLine
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
        tooltip: {
          container: {
            color: colors.primary[500],
          },
        },
      }}
      colors={isDashboard ? { datum: "color" } : { scheme: "nivo" }}
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: true,
        reverse: false,
      }}
      yFormat=" >-.2f"
      curve="catmullRom"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        orient: "bottom",
        tickSize: 0,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : "transportation",
        legendOffset: 36,
        legendPosition: "middle",
      }}
      axisLeft={{
        orient: "left",
        tickValues: 5,
        tickSize: 3,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : "count",
        legendOffset: -40,
        legendPosition: "middle",
      }}
      enableGridX={false}
      enableGridY={false}
      pointSize={8}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabelYOffset={-12}
      useMesh={true}
      legends={[
        {
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: "left-to-right",
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: "circle",
          symbolBorderColor: "rgba(0, 0, 0, .5)",
          effects: [
            {
              on: "hover",
              style: {
                itemBackground: "rgba(0, 0, 0, .03)",
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  );
};

export default LineChart;