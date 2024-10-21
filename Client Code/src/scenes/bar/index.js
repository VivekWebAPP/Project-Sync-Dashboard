import { Box } from "@mui/material";
import Header from "../../components/Header";
import BarChart from "../../components/BarChart";
import ComponentsBarChart from "../../components/ComponentsBarChart";
import QuantityBarGraph from "../../components/QuantityBarGraph";

const Bar = () => {
  return (
    <Box m="20px">
      <Header title="Bar Chart" subtitle="Simple Bar Chart" />
      <Box height="75vh">
        <BarChart />
      </Box>
      <Box height="75vh">
        <ComponentsBarChart />
      </Box>
      <Box height="75vh">
        <QuantityBarGraph />
      </Box>
    </Box>
  );
};

export default Bar;
