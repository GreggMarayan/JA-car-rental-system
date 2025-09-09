import React, { useState } from 'react';
import AdminSideBar from '../../ui/components/AdminSideBar';
import { Box, CssBaseline, useMediaQuery } from '@mui/material';
import MobileAppBar from '../../ui/components/MobileAppBar';

export default function AdminDashboard() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width: 1024px)');

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      
      {isMobile && (
        <MobileAppBar 
          title="Dashboard"
          onMenuClick={handleDrawerToggle}
        />)}
      
      <AdminSideBar 
        mobileOpen={mobileOpen} 
        onClose={() => setMobileOpen(false)} 
      />
      
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - 16rem)` },
          ml: { sm: '16rem' },
          mt: { xs: '56px', sm: 0 } // Match AppBar height on mobile
        }}>
        {!isMobile && <h1>Admin Dashboard</h1>}
        {/* Add your dashboard content here */}
      </Box>
    </Box>
  );
}