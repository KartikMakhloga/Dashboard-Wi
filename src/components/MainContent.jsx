import { React, useState, useEffect } from "react";
import { Container, Grid, Paper, Typography } from "@mui/material";
import StatCard from "./StatCard";
import {
  processTimeSeriesData,
  processCategoryData,
  processSeverityData,
  processIPData,
  processRealTimeLineChart,
  processNetworkTrafficData,
  processConnectionRatioData,
  processMostTargetedServicesData,
  processEventTypeData,
} from "../utils";

import TimeSeriesChart from "./TimeSeriesChart";
import CategoryDistributionPieChart from "./CategoryDistributionPieChart";
import SeverityLevelBarChart from "./SeverityLevelBarChart";
import IPScatterPlot from "./IPScatterPlot";
import NetworkTrafficChart from "./NetworkTrafficVolumeChart";
import ConnectionRatioChart from "./FailedSuccessRatioChart";
import MostTargetedServicesChart from "./MostTargetedServicesChart";
import EventTypeChart from "./EventTypePieChart";

function MainContent({ data }) {
  const [timeSeriesData, setTimeSeriesData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const [severityData, setSeverityData] = useState([]);
  const [ipData, setIPData] = useState([]);
  const [networkTrafficData, setNetworkTrafficData] = useState([]);
  const [connectionRatioData, setConnectionRatioData] = useState([]);
  const [mostTargetedServicesData, setMostTargetedServicesData] = useState([]);
  const [eventTypeData, setEventTypeData] = useState([]);

  useEffect(() => {
    const processedTimeSeriesData = processTimeSeriesData(data);
    const processedCategoryData = processCategoryData(data);
    setSeverityData(processSeverityData(data));
    setIPData(processIPData(data));
    setNetworkTrafficData(processNetworkTrafficData(data));
    setConnectionRatioData(processConnectionRatioData(data));
    setMostTargetedServicesData(processMostTargetedServicesData(data));
    setEventTypeData(processEventTypeData(data));

    setTimeSeriesData(processedTimeSeriesData);
    setCategoryData(processedCategoryData);
  }, [data]);
  return (
    <Grid container spacing={2} style={{ padding: 20 }}>
      <Grid item xs={12} md={6} lg={6}>
        <Paper style={{ padding: 16 }}>
          <Typography variant="h6" color="textPrimary" gutterBottom>
            Category Distribution
          </Typography>
          <CategoryDistributionPieChart data={categoryData} />
        </Paper>
      </Grid>
      <Grid item xs={12} md={6} lg={6}>
        <Paper style={{ padding: 16 }}>
          <Typography variant="h6" color="textPrimary" gutterBottom>
            Event Type Distribution
          </Typography>
          <EventTypeChart data={eventTypeData} />
        </Paper>
      </Grid>
      <Grid item xs={12} md={6} lg={6}>
        <Paper style={{ padding: 16 }}>
          <Typography variant="h6" color="textPrimary" gutterBottom>
            Severity Level Distribution
          </Typography>
          <SeverityLevelBarChart data={severityData} />
        </Paper>
      </Grid>
      <Grid item xs={12} md={6} lg={6}>
        <Paper style={{ padding: 16 }}>
          <Typography variant="h6" color="textPrimary" gutterBottom>
            Network Traffic (Assuming flow_id represents the volume)
          </Typography>
          <NetworkTrafficChart data={networkTrafficData} />
        </Paper>
      </Grid>
      <Grid item xs={12} md={6} lg={6}>
        <Paper style={{ padding: 16 }}>
          <Typography variant="h6" color="textPrimary" gutterBottom>
            Connection Ratio
          </Typography>
          <ConnectionRatioChart data={connectionRatioData} />
        </Paper>
      </Grid>
      <Grid item xs={12} md={6} lg={6}>
        <Paper style={{ padding: 16 }}>
          <Typography variant="h6" color="textPrimary" gutterBottom>
            Most Targeted Services (Assuming dest. IP represents a service)
          </Typography>
          <MostTargetedServicesChart data={mostTargetedServicesData} />
        </Paper>
      </Grid>
      <Grid item xs={12} md={6} lg={6}>
        <Paper style={{ padding: 16 }}>
          <Typography variant="h6" color="textPrimary" gutterBottom>
            Time Series of Alerts
          </Typography>
          <TimeSeriesChart data={timeSeriesData} />
        </Paper>
      </Grid>

      <Grid item xs={12} md={6} lg={6}>
        <Paper style={{ padding: 16 }}>
          <Typography variant="h6" color="textPrimary" gutterBottom>
            IP Interactions Scatter Plot
          </Typography>
          <IPScatterPlot data={ipData} />
        </Paper>
      </Grid>
    </Grid>
  );
}

export default MainContent;
