/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

// Data
import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";

// Dashboard components
import Projects from "layouts/dashboard/components/Projects";
import OrdersOverview from "layouts/dashboard/components/OrdersOverview";

function Dashboard() {
  const { sales, tasks } = reportsLineChartData;

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="dark"
                icon="weekend"
                title="Bookings"
                count={281}
                percentage={{
                  color: "success",
                  amount: "+55%",
                  label: "than lask week",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                icon="leaderboard"
                title="Today's Users"
                count="2,300"
                percentage={{
                  color: "success",
                  amount: "+3%",
                  label: "than last month",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="success"
                icon="store"
                title="Revenue"
                count="34k"
                percentage={{
                  color: "success",
                  amount: "+1%",
                  label: "than yesterday",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="primary"
                icon="person_add"
                title="Followers"
                count="+91"
                percentage={{
                  color: "success",
                  amount: "",
                  label: "Just updated",
                }}
              />
            </MDBox>
          </Grid>
        </Grid>
        <MDBox mt={4.5}>
 <div className="row">
  {/* Left col */}
  <section className="col-lg-7 connectedSortable ui-sortable">
    {/* Custom tabs (Charts with tabs)*/}
    <div className="card">
      <div className="card-header ui-sortable-handle" style={{cursor: 'move'}}>
        <h3 className="card-title">
          <i className="fas fa-chart-pie mr-1" />
          Sales
        </h3>
        <div className="card-tools">
          <span title="3 New Messages" className="badge badge-primary">3</span>
          <button type="button" className="btn btn-tool" data-card-widget="collapse">
            <i className="fas fa-minus" />
          </button>
          <button type="button" className="btn btn-tool" title="Contacts" data-widget="chat-pane-toggle">
            <i className="fas fa-comments" />
          </button>
          <button type="button" className="btn btn-tool" data-card-widget="remove">
            <i className="fas fa-times" />
          </button>
        </div>
      </div>{/* /.card-header */}
      <div className="card-body">
        <div className="tab-content p-0">
          {/* Morris chart - Sales */}
          <div className="chart tab-pane active" id="revenue-chart" style={{position: 'relative', height: 300}}><div className="chartjs-size-monitor"><div className="chartjs-size-monitor-expand"><div  /></div><div className="chartjs-size-monitor-shrink"><div  /></div></div>
            <canvas id="revenue-chart-canvas" height={300} style={{height: 300, display: 'block', width: 651}} width={651} className="chartjs-render-monitor" />
          </div>
          <div className="chart tab-pane" id="sales-chart" style={{position: 'relative', height: 300}}>
            <canvas id="sales-chart-canvas" height={0} style={{height: 0, display: 'block', width: 0}} className="chartjs-render-monitor" width={0} />
          </div>
        </div>
      </div>{/* /.card-body */}
    </div>
 
  
  </section>
  <section className="col-lg-5 connectedSortable ui-sortable">
    {/* Custom tabs (Charts with tabs)*/}
    <div className="card">
      <div className="card-header ui-sortable-handle" style={{cursor: 'move'}}>
        <h3 className="card-title">
          <i className="fas fa-chart-pie mr-1" />
          Sales
        </h3>
        <div className="card-tools">
          <span title="3 New Messages" className="badge badge-primary">3</span>
          <button type="button" className="btn btn-tool" data-card-widget="collapse">
            <i className="fas fa-minus" />
          </button>
          <button type="button" className="btn btn-tool" title="Contacts" data-widget="chat-pane-toggle">
            <i className="fas fa-comments" />
          </button>
          <button type="button" className="btn btn-tool" data-card-widget="remove">
            <i className="fas fa-times" />
          </button>
        </div>
      </div>{/* /.card-header */}
      <div className="card-body">
        <div className="tab-content p-0">
          {/* Morris chart - Sales */}
          <div className="chart tab-pane active" id="revenue-chart" style={{position: 'relative', height: 300}}><div className="chartjs-size-monitor"><div className="chartjs-size-monitor-expand"><div  /></div><div className="chartjs-size-monitor-shrink"><div  /></div></div>
            <canvas id="revenue-chart-canvas" height={300} style={{height: 300, display: 'block', width: 651}} width={651} className="chartjs-render-monitor" />
          </div>
          <div className="chart tab-pane" id="sales-chart" style={{position: 'relative', height: 300}}>
            <canvas id="sales-chart-canvas" height={0} style={{height: 0, display: 'block', width: 0}} className="chartjs-render-monitor" width={0} />
          </div>
        </div>
      </div>{/* /.card-body */}
    </div>
 
  
  </section>
</div>
</MDBox>
        
        {/* <MDBox mt={4.5}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsBarChart
                  color="info"
                  title="website views"
                  description="Last Campaign Performance"
                  date="campaign sent 2 days ago"
                  chart={reportsBarChartData}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsLineChart
                  color="success"
                  title="daily sales"
                  description={
                    <>
                      (<strong>+15%</strong>) increase in today sales.
                    </>
                  }
                  date="updated 4 min ago"
                  chart={sales}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsLineChart
                  color="dark"
                  title="completed tasks"
                  description="Last Campaign Performance"
                  date="just updated"
                  chart={tasks}
                />
              </MDBox>
            </Grid>
          </Grid>
        </MDBox> */}
        {/* <MDBox>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={8}>
              <Projects />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <OrdersOverview />
            </Grid>
          </Grid>
        </MDBox> */}
      </MDBox>
    </DashboardLayout>
  );
}

export default Dashboard;
