'use client'  // This indicates that the code in the file should be executed on the client side
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import { useEffect, useState } from 'react';

import PageContainer from '@/app/components/container/PageContainer';
import MonthlyEarnings from '@/app/components/dashboards/modern/MonthlyEarnings';
import EmployeeSalary from '@/app/components/dashboards/modern/EmployeeSalary';
import SellingProducts from '@/app/components/dashboards/modern/SellingProducts';
import WeeklyStats from '@/app/components/dashboards/modern/WeeklyStats';
import TopPerformers from '@/app/components/dashboards/modern/TopPerformers';
import YearlyBreakup from '@/app/components/dashboards/modern/YearlyBreakup';
import { Span } from 'next/dist/trace';

import ProtectedRoute  from '../components/protected-route/ProtectedRoute';  // agregado 

export default function Dashboard (){

  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <PageContainer title="Dashboard" description="this is Dashboard">
      <Box mt={3}>
      <Grid container spacing={3}>
          {/* column */}
          <Grid item xs={12} lg={4}>
            <WeeklyStats isLoading={isLoading} />
          </Grid>
          {/* column */}
          <Grid item xs={12} lg={4}>
            <EmployeeSalary isLoading={isLoading} />
          </Grid>
          {/* column */}
          <Grid item xs={12} lg={4}>
            <SellingProducts />
          </Grid>
          {/* column */}
          <Grid item xs={12} lg={4}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} lg={12}>
                <MonthlyEarnings isLoading={isLoading} />
              </Grid>
              <Grid item xs={12} sm={6} lg={12}>
                <YearlyBreakup isLoading={isLoading} />
              </Grid>
            </Grid>
          </Grid>
          {/* column */}
          <Grid item xs={12} lg={8}>
            <TopPerformers />
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  )
}

