import { Box, Grid, Stack } from "@mui/material";
import React from "react";
import EmployeeCard from "./EmployeeCard";

export default function Main() {
  return (
    <Grid container flexDirection="row" flexWrap="wrap">
      <Grid item xs={6} md={4} sx={{ p: 1 }}>
        <EmployeeCard />
      </Grid>
      <Grid item xs={6} md={4} sx={{ p: 1 }}>
        <EmployeeCard />
      </Grid>
      <Grid item xs={6} md={4} sx={{ p: 1 }}>
        <EmployeeCard />
      </Grid>
      <Grid item xs={6} md={4} sx={{ p: 1 }}>
        <EmployeeCard />
      </Grid>
      
    </Grid>
  );
}
