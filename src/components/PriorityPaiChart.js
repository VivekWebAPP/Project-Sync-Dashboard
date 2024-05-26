import { useContext } from "react";
import Context from "../context/ContextAPI";
import { ResponsivePie } from "@nivo/pie";
import { tokens } from "../theme";
import { useTheme } from "@mui/material";

const PieChart = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const context = useContext(Context);
  const { fetchProjects } = context;
  const data = fetchProjects;
  function generateRandomHSLColor() {
    // Generate a random hue between 0 and 360 degrees.
    const hue = Math.floor(Math.random() * 360);

    // Generate a random saturation between 0 and 100%.
    const saturation = Math.floor(Math.random() * 100);

    // Generate a random lightness between 0 and 100%.
    const lightness = Math.floor(Math.random() * 100);

    // Return the HSL color code as a string.
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  }
  let count1 = 0;
  let count2 = 0;
  let count3 = 0;

  if (data != null) {
    for (let i = 0; i < data.length; i++) {
      if (data[i].Priority === "High") {
        count1++;
      }
      else if (data[i].Priority === "Medium") {
        count2++;
      }
      else if (data[i].Priority === "Low") {
        count3++;
      }
    }
  }

  const mainDataForPai = [{
    "id": "High",
    "label": "High",
    "value": count1,
    "color": generateRandomHSLColor(),
  }, {
    "id": "Medium",
    "label": "Medium",
    "value": count2,
    "color": generateRandomHSLColor(),
  }, {
    "id": "Low",
    "label": "Low",
    "value": count3,
    "color": generateRandomHSLColor(),
  }];
  return (
    <ResponsivePie
      data={mainDataForPai}
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
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
      innerRadius={0.5}
      padAngle={0.7}
      cornerRadius={3}
      activeOuterRadiusOffset={8}
      borderColor={{
        from: "color",
        modifiers: [["darker", 0.2]],
      }}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor={colors.grey[100]}
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: "color" }}
      enableArcLabels={false}
      arcLabelsRadiusOffset={0.4}
      arcLabelsSkipAngle={7}
      arcLabelsTextColor={{
        from: "color",
        modifiers: [["darker", 2]],
      }}
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "rgba(255, 255, 255, 0.3)",
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "rgba(255, 255, 255, 0.3)",
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      legends={[
        {
          anchor: "bottom",
          direction: "row",
          justify: false,
          translateX: 0,
          translateY: 56,
          itemsSpacing: 0,
          itemWidth: 100,
          itemHeight: 18,
          itemTextColor: "#999",
          itemDirection: "left-to-right",
          itemOpacity: 1,
          symbolSize: 18,
          symbolShape: "circle",
          effects: [
            {
              on: "hover",
              style: {
                itemTextColor: "#000",
              },
            },
          ],
        },
      ]}
    />
  );
};

export default PieChart;