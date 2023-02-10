import React from 'react';
import { Box } from '@mui/system';

import { Header } from '../../components';

export const Dashboard = () => (
  <Box m='20px'>
    <Box display='flex' justifyContent='space-between' alignItems='center'>
      <Header title='DASHBOARD' subtitle='Welcome to your dashboard' />
    </Box>
  </Box>
);

export const Bar = () => <div>Bar</div>;

export const Line = () => <div>Line</div>;

export const Pie = () => <div>Pie</div>;

export const FAQ = () => <div>FAQ</div>;

export const Geography = () => <div>Geography</div>;

export const Calendar = () => <div>Calendar</div>;
