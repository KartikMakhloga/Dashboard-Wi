import React from 'react';
import { Paper, Typography } from '@mui/material';

function StatCard() {
  return (
    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
      <Typography component="p" variant="h4">
        $3,024
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        on 15 March, 2022
      </Typography>
    </Paper>
  );
}

export default StatCard;
