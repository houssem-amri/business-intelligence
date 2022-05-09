import React, { useEffect, useState } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
// Material Dashboard 2 React components
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import { format } from "date-fns";
import ReactApexChart from "react-apexcharts";
import Table_chargeVariable from "./Table_chargeVariable";
import startOfMonth from 'date-fns/startOfMonth'

export default function Charge_variable() {
  const [data, setData] = useState([]);
  const [serieMonth, setserieMonth] = useState([]);
  const [serieDay, setserieDay] = useState([]);

  const optionsMonth = {
    chart: {
      height: 350,
      type: "bar",
    },
    plotOptions: {
      bar: {
        borderRadius: 10,
        dataLabels: {
          position: "top",
        },
      },
    },
    dataLabels: {
      enabled: true,

      offsetY: -20,
      style: {
        fontSize: "12px",
        colors: ["#304758"],
      },
    },
    xaxis: {
      type: "datetime",
      labels: {
        format: 'dd MMM yyyy',
      },
    
      // position: "top",
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      crosshairs: {
        fill: {
          type: "gradient",
          gradient: {
            colorFrom: "#D8E3F0",
            colorTo: "#BED1E6",
            stops: [0, 100],
            opacityFrom: 0.4,
            opacityTo: 0.5,
          },
        },
      },
      tooltip: {
        enabled: true,
      },
    },
    yaxis: {
      axisBorder: {
        show: true,
      },
      axisTicks: {
        show: true,
      },
      labels: {
        show: true,
        formatter: function (val) {
          return val + "Dt";
        },
      },
    },
  };
  const optionsDay= {
    chart: {
      height: 350,
      type: "bar",
    },
    plotOptions: {
      bar: {
        borderRadius: 10,
      },
    },
    dataLabels: {
      enabled: false,

      
    },
    xaxis: {
      type: "datetime",
      labels: {
        format: 'dd MMM yyyy',
      },
      // position: "top",
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      crosshairs: {
        fill: {
          type: "gradient",
          gradient: {
            colorFrom: "#D8E3F0",
            colorTo: "#BED1E6",
            stops: [0, 100],
            opacityFrom: 0.4,
            opacityTo: 0.5,
          },
        },
      },
      tooltip: {
        enabled: true,
      },
    },
    yaxis: {
      axisBorder: {
        show: true,
      },
      axisTicks: {
        show: true,
      },
      labels: {
        show: true,
        formatter: function (val) {
          return val + "Dt";
        },
      },
    },
  };

  useEffect(() => {
    getDataCharge_variable();
  }, []);

  const getDataCharge_variable = () => {
    axios.get("http://localhost:3200/api/charge_variable").then((res) => {
      console.log(res.data.data);
      setData(res.data.data)
      DayDataChart(res.data.data);
      MonthDataChart(res.data.data)
    });
  };

  const DayDataChart = (data) => {
    const groups = data.reduce((groups, game) => {
      let date = format(new Date(game.Date), "dd MMM yyyy HH:mm:ss");
      if (!groups[date]) {
        groups[date] = [];
      }
      groups[date].push(game);
      return groups;
    }, {});
    const groupArrays = Object.keys(groups).map((date) => {
      return [groups[date][0].Date, groups[date][0].Cout];
    });
    setserieDay([{ name: "Cout Variable", data: groupArrays }]);
  };

  const MonthDataChart = (data)=>{
    const groups = data.reduce((groups, game) => {
      let date = format(new Date(game.Date), " MMM yyyy");
      if (!groups[date]) {
        groups[date] = [];
      }
      groups[date].push(game);
      return groups;
    }, {});
    const groupArrays = Object.keys(groups).map((date) => {
      let startDate=startOfMonth(new Date(date))
      let S=0
      for (let i = 0; i < groups[date].length; i++) {
        S=S+groups[date][i].Cout
      }
      console.log("here 0",format(new Date(date), "dd MMM yyyy"));
      return [format(startDate, "dd MMM yyyy HH:mm:ss"), S];
    });
    
    setserieMonth([{ name: "Cout Variable", data: groupArrays }]);
  }
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Analyse Charge variable By Month
                </MDTypography>
              </MDBox>
              <MDBox pt={4} pb={3} px={3}>
                <MDBox component="form" role="form">
                  <div id="chart">
                    <ReactApexChart
                      options={optionsMonth}
                      series={serieMonth}
                      type="bar"
                      height={350}
                    />
                  </div>
                </MDBox>
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Analyse Charge variable By Day
                </MDTypography>
              </MDBox>
              <MDBox pt={4} pb={3} px={3}>
                <MDBox component="form" role="form">
                  <div id="chart">
                    <ReactApexChart
                      options={optionsDay}
                      series={serieDay}
                      type="bar"
                      height={350}
                    />
                  </div>
                </MDBox>
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Table Charge variable
                </MDTypography>
              </MDBox>
              <MDBox pt={4} pb={3} px={3}>
                <MDBox component="form" role="form">
                  <Table_chargeVariable data={data}/>
                </MDBox>
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      {/* <Footer /> */}
    </DashboardLayout>
  );
}
