import React, { useState } from "react";
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
import axios from "axios";
import { useNavigate } from "react-router-dom";
// Data

export default function Add_manager() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPwd] = useState("");
let navigate=useNavigate()
  const handleSubmit = () => {
    let data = {
      name: name,
      email: email,
      password: password,
      role: "manager",
    };
    axios
      .post("http://localhost:3200/api/ajouter_Manager", data)
      .then((res) => {
        console.log(res.data.message);
        navigate("/tables")
      })
      .catch((err) => console.log(err));
  };
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
                  Ajouter Manager
                </MDTypography>
              </MDBox>
              <MDBox pt={4} pb={3} px={3}>
                <MDBox component="form" role="form">
                  <MDBox mb={2}>
                    <MDInput
                      onChange={(e) => setName(e.target.value)}
                      type="text"
                      label="Name"
                      variant="standard"
                      fullWidth
                    />
                  </MDBox>
                  <MDBox mb={2}>
                    <MDInput
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      label="Email"
                      variant="standard"
                      fullWidth
                    />
                  </MDBox>
                  <MDBox mb={2}>
                    <MDInput
                      onChange={(e) => setPwd(e.target.value)}
                      type="password"
                      label="Password"
                      variant="standard"
                      fullWidth
                    />
                  </MDBox>

                  <MDBox mt={4} mb={1}>
                    <MDButton variant="gradient" onClick={handleSubmit} color="info" fullWidth>
                      Ajouter
                    </MDButton>
                  </MDBox>
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
