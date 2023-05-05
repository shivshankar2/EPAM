import { Box } from '@mui/material';
import React from 'react'
import { Chart } from "react-google-charts";


const data = [
    ["Year", "Pass", "Fail"],
    ["2016", 1000, 300],
    ["2017", 1100, 200],
    ["2018", 900, 300],
    ["2019", 1200, 350],
    ["2020", 800, 100],
  ];
  
  const options = {
    chart: {
      title: "Year wise Fail & Pass Students",
      
    },
  };
const Graph = () => {
  return (
    <Box style={{marginTop:"15px"}}>
         <Chart
        chartType="Bar"
        data={data}
        options={options}
        width="80%"
        height="500px"
      />
      
    </Box>
  )
}

export default Graph
