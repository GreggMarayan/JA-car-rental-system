import React, { useState } from 'react';
import AdminSideBar from '../../ui/components/AdminSideBar';
import { Box, CssBaseline, Toolbar } from '@mui/material';

export default function AdminDashboard() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AdminSideBar 
        mobileOpen={mobileOpen} 
        onClose={handleDrawerToggle} 
      />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - 240px)` },
          ml: { sm: '240px' },
        }}
      >
        <Toolbar /> {/* This creates space for content below AppBar */}
        <h1>Admin Dashboard</h1>
        {/* Add your dashboard content here */}
      </Box>
    </Box>
  );
}